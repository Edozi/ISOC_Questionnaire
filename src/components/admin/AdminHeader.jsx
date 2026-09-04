
import {
  Bell,
  CalendarDays,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../../lib/supabase";

function AdminHeader({
  totalResponses,
  onExport,
}) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const { error } =
        await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      navigate("/admin/login", {
        replace: true,
      });
    } catch (error) {
      console.error(
        "Failed to sign out:",
        error
      );
    }
  }

  return (
    <header className="admin-header">

      <div>
        <span className="admin-header-eyebrow">
          SURVEY ANALYTICS
        </span>

        <h1>
          Research Dashboard
        </h1>

        <p>
          Monitor and analyze responses from
          the Living and Thriving in İzmir survey.
        </p>
      </div>


      <div className="admin-header-actions">

        <button
          className="export-button"
          onClick={onExport}
        >
          <span>↓</span>
          Export CSV
        </button>


        <div className="admin-response-count">

          <CalendarDays size={18} />

          <span>
            {totalResponses} responses
          </span>

        </div>


        <button
          className="admin-icon-button"
          title="Notifications"
        >
          <Bell size={19} />
        </button>


        <button
          className="admin-icon-button"
          title="Sign out"
          onClick={handleLogout}
        >
          <LogOut size={19} />
        </button>

      </div>

    </header>
  );
}

export default AdminHeader;

