import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext(undefined);

const fetchRandomUser = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api");
    return response.data;
  } catch (err) {
    console.error("Could not fetch data", err);
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    age: "30",
    photo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRandomUser();
      if (data && data.results && data.results.length > 0) {
        const randomUser = data.results[0];
        setUser({
          firstName: randomUser.name.first,
          lastName: randomUser.name.last,
          email: randomUser.email,
          age: randomUser.dob.age,
          photo: randomUser.picture.thumbnail,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
