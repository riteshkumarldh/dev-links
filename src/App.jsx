import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProfilePreview from "./pages/ProfilePreview";

import RouteProtect from "./pages/RouteProtect";

let authenticated = true;
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteProtect isAuthenticated={authenticated}>
              <HomePage />
            </RouteProtect>
          }
        />
        <Route
          path="/login"
          element={
            <RouteProtect isAuthenticated={!authenticated}>
              <LoginPage />
            </RouteProtect>
          }
        />
        <Route
          path="/register"
          element={
            <RouteProtect isAuthenticated={!authenticated}>
              <RegisterPage />
            </RouteProtect>
          }
        />
        <Route
          path="/profile"
          element={
            <RouteProtect isAuthenticated={authenticated}>
              <ProfilePage />
            </RouteProtect>
          }
        />
        <Route
          path="/preview"
          element={
            <RouteProtect isAuthenticated={authenticated}>
              <ProfilePreview />
            </RouteProtect>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
