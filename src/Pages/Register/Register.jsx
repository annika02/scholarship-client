import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import googleImg from "../../assets/googleLogo.png";
import useCreateUser from "../../Hooks/useCreateUser";

const Register = () => {
  const { setUser, user, register, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { createUser } = useCreateUser();
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(location.state?.from || "/", { replace: true });
    }
  }, [user, navigate, location.state]);

  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=48b282cb34af9841dcce86814f69cd23",
      {
        method: "POST",
        body: formData,
      }
    );
    return await response.json();
  };

  const handleRegistration = async (email, password, name, imageUrl) => {
    const userCredential = await register(email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl,
    });
    return userCredential;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const { name, email, password, image } = Object.fromEntries(formData);

      if (!PASSWORD_REGEX.test(password)) {
        toast.error(
          "Password must contain at least 6 characters with uppercase, lowercase and numbers"
        );
        return;
      }

      // Upload image
      const imgbbData = await handleImageUpload(image);

      // Register user
      const userCredential = await handleRegistration(
        email,
        password,
        name,
        imgbbData.data.url
      );

      // Create user in database
      await createUser(auth.currentUser);

      setUser({
        ...userCredential.user,
        displayName: name,
        photoURL: imgbbData.data.url,
      });

      toast.success("Registered successfully");
      navigate(location.state?.from || "/", { replace: true });
    } catch (error) {
      console.error("Registration error:", error);

      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use");
      } else {
        toast.error("Registration failed. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithGoogle();
      setUser(userCredential.user);
      await createUser(auth.currentUser);

      toast.success("Registered with Google successfully");
      navigate(location.state?.from || "/", { replace: true });
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Google registration failed. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-20">
      <div className="card bg-white w-full max-w-xl shadow-2xl rounded-lg overflow-hidden">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Create New Account
            </h2>
            <p className="text-gray-600 mt-2">Join our community today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full"
                  required
                  disabled={loading}
                />
                <label className="label">
                  <span className="label-text-alt">
                    Must contain 6+ chars with uppercase, lowercase and numbers
                  </span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  name="image"
                  type="file"
                  className="file-input file-input-bordered w-full"
                  accept="image/*"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline font-medium"
                state={{ from: location.state?.from }}
              >
                Login here
              </Link>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                className={`btn btn-primary text-white ${
                  loading ? "loading" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>

              <div className="divider">OR</div>

              <button
                type="button"
                onClick={handleGoogleSignin}
                className="btn btn-outline flex items-center justify-center gap-2"
                disabled={loading}
              >
                <img src={googleImg} alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
