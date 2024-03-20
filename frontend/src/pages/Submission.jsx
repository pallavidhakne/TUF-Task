import React, { useEffect, useState } from "react";
import axios from "axios";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/submissions"
        );
        setSubmissions(response.data);
      } catch (error) {
        console.error("Error fetching submissions", error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div>
      {/* Display submissions here */}
      submissions
    </div>
  );
}

export default Submissions;
