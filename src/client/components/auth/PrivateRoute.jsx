//import { useAuth } from './AuthProvider';
import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';
//PrivateRoute is a wrapper for routes
//redirects to login if user is not authenticated
function PrivateRoute({ children }) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default PrivateRoute;
