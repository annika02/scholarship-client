import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Context/AuthProvider";
import auth from "../../Firebase/firebase.config";
import googleImg from "../../assets/googleLogo.png";

const Register = () => {
  const { setUser, user, register, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  // Move sensitive data to environment variables
  const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      { method: "POST", body: formData }
    );
    return await response.json();
  };

  const handleRegistration = async (name, email, password, imageUrl) => {
    const userCredential = await register(email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl,
    });
    return userCredential;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email, password, image } = Object.fromEntries(formData);

    if (!PASSWORD_REGEX.test(password)) {
      toast.error(
        "Password must contain at least 6 characters with uppercase, lowercase and numbers"
      );
      return;
    }

    try {
      // Upload image
      const imgbbData = await handleImageUpload(image);

      // Register user
      const userCredential = await handleRegistration(
        name,
        email,
        password,
        imgbbData.data.url
      );

      setUser(userCredential.user);
      toast.success("Registration successful!");
      e.target.reset();
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        error.code === "auth/email-already-in-use"
          ? "Email already in use"
          : "Registration failed. Please try again"
      );
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithGoogle();
      setUser(userCredential.user);
      toast.success("Logged in with Google successfully");
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Google login failed. Please try again");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-emerald-700 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Create Your Account</h1>
          <p className="text-emerald-100 mt-1">
            Join our scholarship community today
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Must contain 6+ characters with uppercase, lowercase and numbers
              </p>
            </div>

            {/* Profile Image */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Profile Image
              </label>
              <input
                type="file"
                name="image"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-emerald-50 file:text-emerald-700
                  hover:file:bg-emerald-100 transition"
                accept="image/*"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md"
            >
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-600 hover:text-emerald-800 font-medium transition"
              >
                Sign in here
              </Link>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition duration-200"
            >
              <img src={googleImg} alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
