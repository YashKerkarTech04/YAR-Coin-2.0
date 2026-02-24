import React, { useState, useEffect } from "react";
import "./TeacherChatInterface.css";

function TeacherChatInterface() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([
    { text: "Welcome to Team Workspace", sender: "teacher" },
    { text: "hii", sender: "student" }
  ]);
  const [input, setInput] = useState("");
  const [students, setStudents] = useState([]);
  const [expandedStudents, setExpandedStudents] = useState({});

  // Temporary Dummy Data (remove when backend ready)
  const dummyTeam = {
    mentor: { name: "Raunak Joshi" },
    students: [
      { name: "Ankit Bari", githubUsername: "ankitbari" },
      { name: "Yash Kerkar", githubUsername: "yashkerkar" }
    ]
  };

  useEffect(() => {
    // When backend comes, replace this with real fetch()
    /*
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/team-members/TEAM_ID");
        const data = await res.json();
        setStudents(data.students.map(s => ({ 
          name: s.name, 
          githubUsername: s.githubUsername 
        })));
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
    */

    // 🔥 For now using dummy data
    setStudents(dummyTeam.students.map(s => ({
      name: s.name,
      githubUsername: s.githubUsername
    })));

    // Initialize all students as collapsed
    const initialExpandedState = {};
    dummyTeam.students.forEach((_, index) => {
      initialExpandedState[index] = false;
    });
    setExpandedStudents(initialExpandedState);

  }, []);

  const toggleStudent = (index) => {
    setExpandedStudents(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "teacher" }]);
    setInput("");
  };

  return (
    <div className="chat-page">

      {/* Sidebar */}
      <div className={`teacher-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h3>Students</h3>
          <button
            className="close-btn"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✖
          </button>
        </div>

        {students.map((student, index) => (
          <div key={index} className="student-container">
            <div 
              className="student-header"
              onClick={() => toggleStudent(index)}
            >
              <span className="student-name">{student.name}</span>
              <span className="dropdown-icon">
                {expandedStudents[index] ? '▼' : '▶'}
              </span>
            </div>
            
            {expandedStudents[index] && (
              <div className="github-graph-container">
                <div className="github-graph-placeholder">
                  {/* GitHub contribution graph will be loaded here */}
                  <div className="graph-content">
                    <p className="graph-placeholder-text">
                      GitHub Contribution Graph 
                    </p>
                    {/* The actual graph will be inserted here via iframe or embed */}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div
        className={`chat-container ${isSidebarOpen ? "shifted" : ""}`}
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
          <h2>Team Workspace - Teacher View</h2>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "teacher" ? "right" : "left"
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

export default TeacherChatInterface;