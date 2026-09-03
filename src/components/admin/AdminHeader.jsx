import {
  Bell,
  CalendarDays,
} from "lucide-react";


function AdminHeader({
  totalResponses,
}) {
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

        <div className="admin-response-count">

          <CalendarDays size={18} />

          <span>
            {totalResponses} responses
          </span>

        </div>


        <button className="admin-icon-button">
          <Bell size={19} />
        </button>

      </div>

    </header>
  );
}


export default AdminHeader;