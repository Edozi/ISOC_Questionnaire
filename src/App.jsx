import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import QuestionnaireApp from "./pages/QuestionnaireApp";
import Admin from "./pages/Admin";
import RegistrationAdmin from "./pages/RegistrationAdmin";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./components/admin/AdminRoute";
import RegistrationWelcomePage from "./pages/RegistrationWelcomePage";
import RegistrationPage from "./pages/RegistrationPage";
import RegistrationSuccessPage from "./pages/RegistrationSuccessPage";
import AttendeePage from "./pages/AttendeePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ==========================================
            ROOT
            ========================================== */}

        <Route
          path="/"
          element={
            <Navigate
              to="/questionnaire"
              replace
            />
          }
        />


        {/* ==========================================
            PUBLIC QUESTIONNAIRE
            ========================================== */}

        <Route
          path="/questionnaire"
          element={<QuestionnaireApp />}
        />

        {/* ==========================================
            PUBLIC REGISTRATION WELCOME PAGE
            ========================================== */}

        <Route
          path="/registration"
          element={<RegistrationWelcomePage />}
        />

        {/* ==========================================
            PUBLIC REGISTRATION FORM
            ========================================== */}

        <Route
          path="/registration/form"
          element={<RegistrationPage />}
        />

        {/* ==========================================
            PUBLIC REGISTRATION SUCCESS PAGE
            ========================================== */}

        <Route
          path="/registration/success"
          element={<RegistrationSuccessPage />}
        />

        {/* ==========================================
            ATTENDEE ROUTE
            ========================================== */}

        <Route
          path="/attendee/:token"
          element={<AttendeePage />}
        />


        {/* ==========================================
            ADMIN LOGIN
            PUBLIC
            ========================================== */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* ==========================================
            ADMIN DASHBOARD
            PROTECTED
            ========================================== */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/registrations"
          element={
            <AdminRoute>
              <RegistrationAdmin />
            </AdminRoute>
          }
        />


        {/* ==========================================
            UNKNOWN ROUTES
            ========================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/questionnaire"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;