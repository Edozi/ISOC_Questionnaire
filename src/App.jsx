import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import QuestionnaireApp from "./pages/QuestionnaireApp";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./components/admin/AdminRoute";
import RegistrationPage from "./pages/RegistrationPage";
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
            PUBLIC REGISTRATION FORM
            ========================================== */}

        <Route
          path="/registration"
          element={<RegistrationPage />}
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