import { Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Admin from "@/pages/Admin";
import AdminRoute from "./components/AdminRoute";
import ADLanding from "./pages/ADLanding";

export const App = () => (
  <Fragment>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/test" element={<ADLanding />} />
      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <Admin />
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />

      <Route path="*" element={<Landing />} />
    </Routes>
  </Fragment>
);
