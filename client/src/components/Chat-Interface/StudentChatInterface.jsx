import React, { useState, useEffect } from "react";
import "./StudentChatInterface.css";

function StudentChatInterface() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([
    { text: "Welcome to Team Workspace", sender: "mentor" },
    { text: "hii", sender: "student" }
  ]);
  const [input, setInput] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  // Temporary Dummy Data (remove when backend ready)
  const dummyTeam = {
    mentor: { name: "Raunak Joshi" },
    students: [
      { name: "Ankit Bari" },
      { name: "Rahul Singh" }
    ]
  };

  useEffect(() => {
    // When backend comes, replace this with real fetch()

    /*
    const fetchTeamMembers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/team-members/TEAM_ID");
        const data = await res.json();
        setTeamMembers([
          { name: data.mentor.name, role: "Mentor" },
          ...data.students.map(s => ({ name: s.name, role: "Student" }))
        ]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeamMembers();
    */

    // 🔥 For now using dummy data
    setTeamMembers([
      { name: dummyTeam.mentor.name, role: "Mentor" },
      ...dummyTeam.students.map(s => ({
        name: s.name,
        role: "Candidate"
      }))
    ]);

  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "student" }]);
    setInput("");
  };

  return (
    <div className="chat-page">

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h3>Team Members</h3>
          <button
            className="close-btn"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✖
          </button>
        </div>

        {teamMembers.map((member, index) => (
          <div key={index} className="member">
            {member.name} ({member.role})
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div
        className="chat-container"

      >
        <div className="chat-header">
          {!isSidebarOpen && (
            <button
              className="open-sidebar-btn"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰
            </button>
          )}
          <h2>Team Workspace</h2>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "student" ? "right" : "left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input-section">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default StudentChatInterface;