import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import MaterialTheme from "./theme/Theme";
import "./App.scss";
import { logged, not_logged } from "./routes/routes";
import Toast from "./custom/CustomToaster";
import Loading from "./components/Loading/Loading";
import AuthServ from "./services/Auth.service";

import { UserContext } from "./store/Contexts";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState({ routes: [], default: "" });
  const navig = useNavigate();
  const location = useLocation();

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
    if (!loading) {
      if (user) {
        setRoutes(logged);
      } else {
        setRoutes(not_logged);
      }
    }
  }, [user, loading]);

  useEffect(() => {
    if (loading === false && routes.routes.length) {
      let allowed_routes = routes.routes.map((elem) => {
        return elem.route;
      });
      let current_toute = location.pathname.split("/")[1];
      if (allowed_routes.indexOf(current_toute) === -1) {
        navig(routes.default);
      }
    }
  }, [loading, routes, user]);

  return (
    <MaterialTheme>
      <Toast />

      <UserContext.Provider value={{ user, setUser }}>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            {routes.routes.map((route, key) => {
              const { path, Component } = route;
              return <Route key={key} path={path} element={<Component />} />;
            })}
          </Routes>
        )}
      </UserContext.Provider>
    </MaterialTheme>
  );
}

export default App;
