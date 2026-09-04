
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight } from "lucide-react";

import { supabase } from "../lib/supabase";
import "../styles/admin-login.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        throw error;
      }

      if (!data.session) {
        throw new Error(
          "Login succeeded, but no session was created."
        );
      }

      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Admin login failed:", error);

      setError(
        error.message ||
          "Unable to sign in. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        {/* BRAND */}

        <div className="admin-login-brand">

          <div className="admin-login-brand-icon">
            ✦
          </div>

          <div className="admin-login-brand-text">
            <strong>ISOC</strong>
            <span>Research Dashboard</span>
          </div>

        </div>


        {/* HEADING */}

        <div className="admin-login-heading">

          <div className="admin-login-icon">
            <Lock size={22} />
          </div>

          <div>
            <h1>Welcome back</h1>

            <p>
              Sign in to access the survey
              research dashboard.
            </p>
          </div>

        </div>


        {/* FORM */}

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >

          {/* EMAIL */}

          <div className="admin-login-field">

            <label htmlFor="admin-email">
              Email address
            </label>

            <div className="admin-login-input">

              <Mail size={18} />

              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="admin@example.com"
                autoComplete="email"
                required
              />

            </div>

          </div>


          {/* PASSWORD */}

          <div className="admin-login-field">

            <label htmlFor="admin-password">
              Password
            </label>

            <div className="admin-login-input">

              <Lock size={18} />

              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

            </div>

          </div>


          {/* ERROR */}

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}


          {/* SUBMIT */}

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >

            {loading ? (
              "Signing in..."
            ) : (
              <>
                <span>Sign in</span>
                <ArrowRight size={18} />
              </>
            )}

          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;

