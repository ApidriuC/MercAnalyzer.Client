import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RequireAuth } from './components/Auth';
import { NAVIGATES } from './constants/constans';
import { AuthProvider } from "./contexts";
import { HomeLayout, LoginDALayout } from "./pages";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* LOGIN */}
          <Route path={NAVIGATES.LOGIN} element={<LoginDALayout />} />

          {/* HOME */}
          <Route
            path={NAVIGATES.SEARCH}
            element={
              <RequireAuth>
                <HomeLayout />
              </RequireAuth>
            }
          />

          {/* DEFAULT ROUTE */}
          <Route path="*" element={<Navigate to={NAVIGATES.SEARCH} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}