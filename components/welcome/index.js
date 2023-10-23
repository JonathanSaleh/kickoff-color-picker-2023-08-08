import { useState, useEffect } from "react";
import axios from "axios";

import ColorPicker from "../colorPicker";
import s from "./styles.module.css";

// this is just an example
// feel free to use class based components and whatever paradigms you're most comfortable with
const Welcome = () => {
  const [greeting, setGreeting] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchGreeting = async () => {
      const { status, data } = await axios.get("/api/greeting");

      if (status === 200) {
        setGreeting(data);
      } else {
        throw new Error("Error connecting to server");
      }
    };

    fetchGreeting();
  }, [setGreeting, axios]);

  const updateGreeting = async () => {
    if (!value) return;

    const { status, data } = await axios.put("/api/greeting", {
      id: greeting.id,
      body: value,
    });

    setGreeting(data);
    setValue("");
  };

  if (!greeting) return null;

  return (
    <div className={s.welcomeContainer}>
		<ColorPicker />
    </div>
  );
};

export default Welcome;
