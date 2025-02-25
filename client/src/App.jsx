import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/send-email",
        emailData
      );
      setStatus(response.data.message);
      setEmailData({ to: "", subject: "", text: "" });
    } catch (error) {
      setStatus(error.response?.data?.message || "Error sending email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Gmail SMTP Email Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="to">Recipient Email:</label>
          <input
            type="email"
            id="to"
            name="to"
            value={emailData.to}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="text">Message:</label>
          <textarea
            id="text"
            name="text"
            value={emailData.text}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Email"}
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default App;
