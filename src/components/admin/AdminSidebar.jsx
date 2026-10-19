
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  Globe2,
  Compass,
  TriangleAlert,
  MessageSquareText,
  ClipboardList,
} from "lucide-react";

function AdminSidebar({
  activeSection,
  onSectionChange,
}) {
  const menuItems = [
    {
      id: "overview",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      id: "demographics",
      label: "Demographics",
      icon: Users,
    },
    {
      id: "employment",
      label: "Employment",
      icon: BriefcaseBusiness,
    },
    {
      id: "experience",
      label: "Living Experience",
      icon: Globe2,
    },
    {
      id: "future",
      label: "Future Plans",
      icon: Compass,
    },
    {
      id: "challenges",
      label: "Challenges",
      icon: TriangleAlert,
    },
    {
      id: "feedback",
      label: "Feedback",
      icon: MessageSquareText,
    },
  ];

  const managementItems = [
    {
      id: "registrations",
      label: "Registrations",
      icon: ClipboardList,
    },
  ];

  function renderMenuItem(item) {
    const Icon = item.icon;

    return (
      <button
        key={item.id}
        type="button"
        className={`admin-nav-item ${
          activeSection === item.id ? "active" : ""
        }`}
        onClick={() => onSectionChange(item.id)}
      >
        <Icon size={19} />

        <span>{item.label}</span>
      </button>
    );
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <div className="admin-brand-icon">✦</div>

        <div>
          <strong>ISOC</strong>
          <span>Research Dashboard</span>
        </div>
      </div>

      <nav className="admin-navigation">
        <span className="admin-nav-label">
          ANALYTICS
        </span>

        {menuItems.map(renderMenuItem)}

        <span className="admin-nav-label">
          MANAGEMENT
        </span>

        {managementItems.map(renderMenuItem)}
      </nav>

      <div className="admin-sidebar-footer">
        <div className="admin-status">
          <span className="status-dot" />

          <div>
            <strong>System Active</strong>
            <span>Information retrieval active</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;
