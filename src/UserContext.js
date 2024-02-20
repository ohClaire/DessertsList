import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext(undefined);

const fetchRandomUser = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api");
    return response.data; // Don't need to JSON.stringify here
  } catch (err) {
    console.error("Could not fetch data", err);
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Hannah",
    email: "hannah@example.com",
    dob: "01/01/2000",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRandomUser();
      if (data && data.results && data.results.length > 0) {
        const randomUser = data.results[0];
        setUser({
          name: randomUser.name.first,
          email: randomUser.email,
          dob: randomUser.dob.date, // Assuming you want the full date string
        });
      }
    };

    fetchData();
  }, []);

  console.log("user", user);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
