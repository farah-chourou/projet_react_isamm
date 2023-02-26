import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Theme from "./theme/Theme";
import "./App.scss";
import { logged, not_logged } from "./routes/routes";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState({ routes: [], default: "" });

  useEffect(() => {
    // here you have to call the api to get user by token
    setUser({ firstName: "flen", lastName: "flouani" });
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      setRoutes(logged);
    } else {
      setRoutes(not_logged);
    }
  }, [user]);

  return (
    <Theme>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <BrowserRouter>
          <Routes>
            {routes.routes.map((route, key) => {
              const { path, Component } = route;
              return (
                <Route
                  key={key}
                  path={path}
                  element={<Component user={user} />}
                />
              );
            })}
            <Route path="/*" element={<Navigate to={routes.default} />} />
          </Routes>
        </BrowserRouter>
      )}
    </Theme>
  );
}

export default App;
