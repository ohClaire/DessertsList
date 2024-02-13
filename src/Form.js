import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="field">
          <label htmlFor="name">Dessert Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter dessert name here"
            name="dessert_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button disabled={!name} type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
