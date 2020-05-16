import React, { useState, useEffect, createContext } from "react";
import data from "./assets/Data.json";

export const userContext = React.createContext("default value");

// The Provider component is what makes the state available to all child components,
// no matter how deeply nested they are within the component hierarchy.
// The Provider component receives a value prop. This is where we’ll pass our current value
// const { Provider, Consumer } = UserContext;
