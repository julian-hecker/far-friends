import React, { useState, useEffect, useContext } from "react";
import UserTile from "./UserTile/UserTile";
import data from "../../assets/Data.json";
import { userContext } from "../../userContext";
const UserTiles = () => {
  let msg = useContext(userContext);

  useEffect(() => {
    setData(data);
    console.log(data);
    console.log("this is msg " + msg);
  }, []);

  const [data, setData] = useState();
  return (
    <div>
      <UserTile />
    </div>
  );
};

export default UserTiles;
