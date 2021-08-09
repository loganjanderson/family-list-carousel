import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.scss";

import FamilyList from "./pages/familyList";

import user from "./mockData";

export default function App(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // mimics API Call
    setUserData(user);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={(props) => {
            return <FamilyList {...props} userData={userData} />;
          }}
        />
      </BrowserRouter>
    </div>
  );
}
