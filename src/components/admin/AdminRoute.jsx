
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { supabase } from "../../lib/supabase";

function AdminRoute({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadSession() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (!mounted) {
        return;
      }

      if (error) {
        console.error(
          "Failed to retrieve session:",
          error
        );
      }

      setSession(session);
      setLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="admin-layout">
        <main className="admin-main">
          <div className="admin-loading">
            <p>Checking authentication...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!session) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return children;
}

export default AdminRoute;

