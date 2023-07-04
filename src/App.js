import React from "react";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import getRandomUser from "./api/index";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh User</button>
    </div>
  );
}

export default App;
