import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import googleImg from "../../assets/googleLogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useCreateUser from "../../Hooks/useCreateUser";
import auth from "../../Firebase/firebase.config";

const Login = () => {
  const { login, setUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { createUser } = useCreateUser();

  // Redirect after login
  const from = location.state?.from?.pathname || "/";

  // Email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const { email, password } = Object.fromEntries(formData);

      // Login with Firebase
      const userCredential = await login(email, password);
      setUser(userCredential.user);

      // Create/update user in your database
      await createUser(auth.currentUser);

      toast.success("Logged in successfully");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);

      // More specific error messages
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password");
      } else {
        toast.error("Login failed. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleSignin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithGoogle();
      setUser(userCredential.user);
      await createUser(auth.currentUser);

      toast.success("Logged in with Google successfully");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google login failed. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-20">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered focus:border-primary focus:ring-1 focus:ring-primary"
                required
                disabled={loading}
              />
            </div>

            <div className="form-control">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered focus:border-primary focus:ring-1 focus:ring-primary"
                required
                disabled={loading}
              />
            </div>

            <div className="text-sm text-center pt-2">
              New to this website?{" "}
              <Link
                to="/register"
                className="text-primary hover:underline font-medium"
                state={{ from: location.state?.from }}
              >
                Register now
              </Link>
            </div>

            <div className="divider">OR</div>

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
              disabled={loading}
            >
              <img className="w-5" src={googleImg} alt="Google" />
              Continue with Google
            </button>

            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary text-white ${
                  loading ? "loading" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
