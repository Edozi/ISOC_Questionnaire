import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import QuestionnaireApp from "./pages/QuestionnaireApp";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root to questionnaire */}
        <Route
          path="/"
          element={
            <Navigate
              to="/questionnaire"
              replace
            />
          }
        />

        {/* Public questionnaire */}
        <Route
          path="/questionnaire"
          element={<QuestionnaireApp />}
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* Unknown routes */}
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