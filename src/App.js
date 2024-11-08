import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import TicTacToe from "./TicTacToe";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import React, { useEffect } from "react";

function App() {
  const [user, loading, error] = useAuthState(auth);



  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/game" /> : <Login />}
        />

        <Route
          path="/game"
          element={user ? <TicTacToe /> : <Navigate to="/login" />}
        />

        <Route
          path="/"
          element={user ? <Navigate to="/game" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
