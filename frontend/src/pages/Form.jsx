import React, { useState } from "react";
import axios from "axios";
import "./form.css";

function CodeSubmissionForm() {
  const [formData, setFormData] = useState({
    username: "",
    language: "JavaScript", // Default value
    stdin: "",
    sourceCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form validation as needed
    try {
      // Adjust the API URL as per your configuration
      const response = await axios.post(
        "http://localhost:3000/api/submissions",
        formData
      );
      console.log(response.data);
      // Handle submission success (e.g., clear form, show message)
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle submission error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Language:</label>
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
        >
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>
      </div>
      <div>
        <label>Standard Input (stdin):</label>
        <textarea name="stdin" value={formData.stdin} onChange={handleChange} />
      </div>
      <div>
        <label>Source Code:</label>
        <textarea
          name="sourceCode"
          value={formData.sourceCode}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CodeSubmissionForm;
