import "./App.css";
import DessertsList from "./DessertsList";
import FeedbackForm from "./FeedbackForm";
import SignUpForm from "./SignUpForm";
import { useState } from "react";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const [formView, setFormView] = useState(false);

  const showSignUp = () => {
    setFormView((prev) => !prev);
  };
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <FeedbackForm />
      <button onClick={showSignUp} className="sign-up-btn">
        Sign up
      </button>
      <SignUpForm open={formView} />
    </div>
  );
}

export default App;
