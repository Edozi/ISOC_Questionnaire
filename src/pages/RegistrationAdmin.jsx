
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Search,
  Download,
  RefreshCw,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "../styles/admin.css";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import StatCard from "../components/admin/StatCard";
import { adminFetch } from "../lib/api";


const PAGE_SIZE = 50;


function formatDate(value) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "—";

  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}


function escapeCSV(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}


function exportRegistrationsToCSV(registrations) {
  const columns = [
    ["Name", "name"],
    ["Surname", "surname"],
    ["Email", "email"],
    ["Phone", "phone"],
    ["Gender", "gender"],
    ["Country", "country"],
    ["University", "university"],
    ["Education", "education"],
    ["Registered At", "created_at"],
  ];

  const rows = [
    columns.map(([label]) => escapeCSV(label)),
    ...registrations.map((registration) =>
      columns.map(([label, key]) =>
        escapeCSV(
          key === "created_at"
            ? formatDate(registration[key])
            : registration[key]
        )
      )
    ),
  ];

  // UTF-8 BOM helps spreadsheet applications
  // recognize international characters correctly.
  const csv = "\uFEFF" +
    rows.map((row) => row.join(",")).join("\r\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "registrations.csv";
  link.click();

  URL.revokeObjectURL(url);
}


function RegistrationAdmin() {
  const navigate = useNavigate();

  const [registrations, setRegistrations] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  const [search, setSearch] = useState("");
  const [selectedRegistration, setSelectedRegistration] =
    useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadRegistrations(currentOffset = offset) {
    try {
      setLoading(true);
      setError(null);

      const response = await adminFetch(
        `/api/admin/registrations?limit=${PAGE_SIZE}&offset=${currentOffset}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to load registrations (${response.status}).`
        );
      }

      const data = await response.json();

      setRegistrations(
        Array.isArray(data.registrations)
          ? data.registrations
          : []
      );

      setTotal(
        Number.isFinite(data.total) ? data.total : 0
      );

      setOffset(currentOffset);
    } catch (error) {
      console.error("Failed to load registrations:", error);

      setError(
        error.message || "Failed to load registrations."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRegistrations(0);
  }, []);

  const filteredRegistrations = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return registrations;

    return registrations.filter((registration) => {
      const searchableFields = [
        registration.name,
        registration.surname,
        registration.email,
        registration.phone,
        registration.country,
        registration.university,
      ];

      return searchableFields.some((value) =>
        String(value ?? "").toLowerCase().includes(query)
      );
    });
  }, [registrations, search]);

  function handleSectionChange(section) {
    if (section === "registrations") return;

    // Update this mapping if your existing sidebar uses
    // different section IDs or route paths.
    if (section === "overview") {
      navigate("/admin");
    }
  }

  const pageNumber = Math.floor(offset / PAGE_SIZE) + 1;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="admin-layout">
      <AdminSidebar
        activeSection="registrations"
        onSectionChange={handleSectionChange}
      />

      <main className="admin-main">
        <AdminHeader
          totalResponses={total}
          onExport={() =>
            exportRegistrationsToCSV(filteredRegistrations)
          }
        />

        <div className="admin-content">
          <section className="admin-section">
            <div className="section-heading">
              <h2>Event Registrations</h2>
              <p>
                View and manage participants registered for the event.
              </p>
            </div>

            <div className="stats-grid">
              <StatCard
                title="Total Registrations"
                value={total}
                icon={Users}
              />
            </div>

            <div className="registration-toolbar">
              <div className="registration-search">
                <Search size={18} aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search name, email, country, university..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search registrations"
                />
              </div>

              <button
                type="button"
                className="registration-action"
                onClick={() => loadRegistrations(offset)}
                disabled={loading}
              >
                <RefreshCw size={16} />
                Refresh
              </button>

              <button
                type="button"
                className="registration-action"
                onClick={() =>
                  exportRegistrationsToCSV(filteredRegistrations)
                }
                disabled={filteredRegistrations.length === 0}
              >
                <Download size={16} />
                Export CSV
              </button>
            </div>

            {error && (
              <div className="registration-error" role="alert">
                <p>{error}</p>
                <button
                  type="button"
                  onClick={() => loadRegistrations(offset)}
                >
                  Try again
                </button>
              </div>
            )}

            <div className="registration-table-wrapper">
              <table className="registration-table">
                <thead>
                  <tr>
                    <th>Participant</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>University</th>
                    <th>Education</th>
                    <th>Registered</th>
                    <th>Details</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="registration-empty">
                        Loading registrations...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={7} className="registration-empty">
                        Registrations could not be loaded.
                      </td>
                    </tr>
                  ) : filteredRegistrations.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="registration-empty">
                        {search
                          ? "No registrations match your search."
                          : "No registrations found."}
                      </td>
                    </tr>
                  ) : (
                    filteredRegistrations.map((registration) => (
                      <tr key={registration.id}>
                        <td>
                          <strong>
                            {registration.name} {registration.surname}
                          </strong>
                        </td>
                        <td>{registration.email}</td>
                        <td>{registration.country}</td>
                        <td>{registration.university}</td>
                        <td>{registration.education || "—"}</td>
                        <td>{formatDate(registration.created_at)}</td>
                        <td>
                          <button
                            type="button"
                            className="registration-icon-button"
                            aria-label={`View ${registration.name}'s details`}
                            title="View details"
                            onClick={() =>
                              setSelectedRegistration(registration)
                            }
                          >
                            <Eye size={17} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {!loading && !error && (
              <div className="registration-pagination">
                <span>
                  {total === 0
                    ? "No registrations"
                    : `Showing ${offset + 1}–${offset + registrations.length} of ${total}`}
                  {" · "}
                  Page {pageNumber} of {totalPages}
                </span>

                <div>
                  <button
                    type="button"
                    aria-label="Previous page"
                    disabled={loading || offset === 0}
                    onClick={() =>
                      loadRegistrations(
                        Math.max(0, offset - PAGE_SIZE)
                      )
                    }
                  >
                    <ChevronLeft size={18} />
                    Previous
                  </button>

                  <button
                    type="button"
                    aria-label="Next page"
                    disabled={
                      loading || offset + PAGE_SIZE >= total
                    }
                    onClick={() =>
                      loadRegistrations(offset + PAGE_SIZE)
                    }
                  >
                    Next
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      {selectedRegistration && (
        <div
          className="registration-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedRegistration(null);
            }
          }}
        >
          <section
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-detail-title"
          >
            <div className="registration-modal-header">
              <div>
                <h2 id="registration-detail-title">
                  Participant Details
                </h2>
                <p>
                  {selectedRegistration.name}{" "}
                  {selectedRegistration.surname}
                </p>
              </div>

              <button
                type="button"
                className="registration-icon-button"
                aria-label="Close details"
                onClick={() => setSelectedRegistration(null)}
              >
                <X size={20} />
              </button>
            </div>

            <dl className="registration-details">
              {[
                ["Name", selectedRegistration.name],
                ["Surname", selectedRegistration.surname],
                ["Email", selectedRegistration.email],
                ["Phone", selectedRegistration.phone],
                ["Gender", selectedRegistration.gender],
                ["Country", selectedRegistration.country],
                ["University", selectedRegistration.university],
                ["Education", selectedRegistration.education],
                ["Registered At", formatDate(selectedRegistration.created_at)],
                ["Registration ID", selectedRegistration.id],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value || "—"}</dd>
                </div>
              ))}
            </dl>

            <button
              type="button"
              className="registration-action"
              onClick={() => setSelectedRegistration(null)}
            >
              Close
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default RegistrationAdmin;
