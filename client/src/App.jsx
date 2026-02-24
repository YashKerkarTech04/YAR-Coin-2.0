import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Authentication/Auth";
import TeacherHome from "./components/Teacher-Dashboard/TeacherHome";
import StudentHome from "./components/Student-Dashboard/StudentHome";
import Playground from "./components/Student-Dashboard/Playground";
import StudentChatInterface from "./components/Chat-Interface/StudentChatInterface";
import TeacherChatInterface from "./components/Chat-Interface/TeacherChatInterface";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/teacher-home" element={<TeacherHome />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/student/playground" element={<Playground/>} />
        <Route path="/student-workspace" element={<StudentChatInterface />} />
        <Route path="/teacher-workspace" element={<TeacherChatInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
