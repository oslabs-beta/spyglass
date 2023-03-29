import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthProvider } from '../components/auth/AuthProvider';
import PrivateRoute from '../components/auth/PrivateRoute';
import '../styles/App.css';

function App() {
  return (
    // home page is protected route and requires authorization
    <AuthProvider>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* home page contains routes to different dashboards */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
