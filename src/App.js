import React, { useState, useEffect } from "react";
import Theme from "./theme/Theme";
import "./App.scss";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // here you have to call the api to get user by token
    setUser({ firstName: "flen", lastName: "flouani" });
    setLoading(false);
  }, []);

  return <Theme>{loading && <h1>Loading ...</h1>}</Theme>;
}

export default App;
