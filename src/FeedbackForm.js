import { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, score });
    setName("");
    setScore("10");
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor");
      return;
    }
    setComment("");
    console.log("Form submitted!");
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setScore(e.target.value);
    console.log("Score changed");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-field">
          <label htmlFor="name">Dessert Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter dessert name hesdre"
            name="dessert_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="score">Score: {score}</label>
          <input
            id="score"
            type="range"
            min="1"
            max="10"
            value={score}
            onChange={handleChange}
          />
          <label htmlFor="comment">Comment:</label>
          <input
            id="comment"
            type="text"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button disabled={!name} type="submit" className="submit-btn">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default FeedbackForm;
