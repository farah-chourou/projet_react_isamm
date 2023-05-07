import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MaterialTheme from "./theme/Theme";
import "./App.scss";
import { logged, not_logged } from "./routes/routes";
import Toast from "./custom/CustomToaster";
import Loading from "./components/Loading/Loading";
import AuthServ from "./services/Auth.service";

import { UserContext } from "./store/Contexts";
import Cv from "./pages/dashboard/Profile/Cv";
import CVStud from "./pages/dashboard/Projet_Stage_PFE/TeacherPFA/Cvstud";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState({ routes: [], default: "" });

  useEffect(() => {
    AuthServ.GetUserByToken(
      (data) => {
        setUser(data);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (user) {
      setRoutes(logged);
    } else {
      setRoutes(not_logged);
    }
  }, [user]);

  return (
    <MaterialTheme>
      <Toast />

      <UserContext.Provider value={{ user, setUser }}>
        {loading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <Routes>
              {routes.routes.map((route, key) => {
                const { path, Component } = route;
                return <Route key={key} path={path} element={<Component />} />;
              })}
              <Route path="/*" element={<Navigate to={routes.default} />} />
              <Route path="/cv" element={<Cv />} />
              <Route path="/cv/:_id" element={<CVStud />} />
            </Routes>
          </BrowserRouter>
        )}
      </UserContext.Provider>
    </MaterialTheme>
  );
}

export default App;
