import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home';
import ChooseUser from '../src/components/ChooseUser';
//import AdminRegister from "./components/AdminRegister";

{/*SignIn imports */}
import AdminSignIn from "./components/AdminSignin";
import FacultySignIn from "./components/FacultySignin";
import StudentSignIn from "./components/StudentSignin";

{/* Dashboard imports */}
import AdminDashboard from "./pages/Admin/Dashboard";
import FacultyDashboard from "./pages/Faculty/Dashboard";
import StudentDashboard from "./pages/Students/Dashboard";

//importing files for admin
import Classes from "../src/pages/Admin/Classes"; 
import Exam from "./pages/Admin/Exam";
import Attendance from "./pages/Admin/Attendance";
import Performance from "./pages/Admin/Performance";
import Faculty from "./pages/Admin/Faculty";
import Students from "./pages/Admin/Students";
import Assignments from "./pages/Admin/Assignments";
import Library from "./pages/Admin/Library";
import EventCalendar from "./pages/Admin/EventCalendar";
import SettingsProfile from "./pages/Admin/SettingsProfile";
import Sidebar from "./pages/Admin/Sidebar";
import Announcement from "./pages/Admin/Announcement";

//importing files for student
import StudentAssignments from "./pages/Students/Assignments";
import StudentAttendance from "./pages/Students/Attendance";
import Exams from "./pages/Students/Exams";
import StudentAnnouncement from "./pages/Students/Announcement";
import StudentLibrary from "./pages/Students/Library";
import StudentPerformance from "./pages/Students/Performance";
import StudentProfile from "./pages/Students/Profile";
import StudentSidebar from "./pages/Students/Sidebar";

//importing files for faculty
import FacultyAnnouncement from "./pages/Faculty/Announcement";
import FacultyAssignments from "./pages/Faculty/Assignments";
import FacultyAttendance from "./pages/Faculty/Attendance";
import FacultyClasses from "./pages/Faculty/Classes";
import FacultyEvents from "./pages/Faculty/Events";
import FacultyExams from "./pages/Faculty/Exams";
import FacultySection from "./pages/Faculty/Faculty";
import FacultyPerformance from "./pages/Faculty/Performance";
import FacultyProfile from "./pages/Faculty/Profile";
import FacultySidebar from "./pages/Faculty/Sidebar";
import StudentSection from "./pages/Faculty/Students";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/choose-user' element = {<ChooseUser/>} /> 

        {/*all the sign-in pages routes */}
        <Route exact path='/choose-user/admin-signIn' element = {<AdminSignIn/>}/>
        <Route exact path='/choose-user/faculty-signIn' element = {<FacultySignIn/>}/>
        <Route exact path='/choose-user/student-signIn' element = {<StudentSignIn/>}/>  

        {/* all the dashboard routes */}
        <Route exact path='/admin/dashboard' element = {<AdminDashboard/>} />
        <Route exact path='/faculty/dashboard' element = {<FacultyDashboard/>} />
        <Route exact path='/student/dashboard' element = {<StudentDashboard/>} />


        {/*Admin sections here */}
        <Route exact path='/admin/classes' element = {<Classes/>} />
        <Route exact path='/admin/exams' element = {<Exam/>} />
        <Route exact path='/admin/attendance' element = {<Attendance/>} />
        <Route exact path='/admin/performance' element = {<Performance/>} />
        <Route exact path='/admin/faculty' element = {<Faculty/>} />
        <Route exact path='/admin/students' element = {<Students/>} />
        <Route exact path='/admin/assignments' element = {<Assignments/>} />
        <Route exact path='/admin/library' element = {<Library/>} />
        <Route exact path='/admin/events' element = {<EventCalendar/>} />
        <Route exact path='/admin/communication' element = {<Announcement/>} />
        <Route exact path='/admin/settings' element = {<SettingsProfile/>} />
        <Route exact path='/admin/dashboard' element = {<Sidebar/>} />


        {/*Student sections here  */}
        <Route exact path='/student/communication' element = {<StudentAnnouncement/>} />
        <Route exact path='/student/assignments' element = {<StudentAssignments/>} />
        <Route exact path='/student/attendance' element = {<StudentAttendance/>} />
        <Route exact path='/student/exams' element = {<Exams/>} />
        <Route exact path='/student/library' element = {<StudentLibrary/>} />
        <Route exact path='/student/performance' element = {<StudentPerformance/>} />
        <Route exact path='/student/profile' element = {<StudentProfile/>} />
        <Route exact path='/student/dashboard' element = {<StudentSidebar/>} />

        {/*Faculty sections here */}
        <Route exact path='/faculty/dashboard' element = {<FacultySidebar/>} />
        <Route exact path='/faculty/communication' element = {<FacultyAnnouncement/>} />
        <Route exact path='/faculty/assignments' element = {<FacultyAssignments/>} />
        <Route exact path='/faculty/attendance' element = {<FacultyAttendance/>} />
        <Route exact path='/faculty/classes' element = {<FacultyClasses/>} />
        <Route exact path='/faculty/events' element = {<FacultyEvents/>} />
        <Route exact path='/faculty/exams' element = {<FacultyExams/>} />
        <Route exact path='/faculty/performance' element = {<FacultyPerformance/>} />
        <Route exact path='/faculty/profile' element = {<FacultyProfile/>} />
        <Route exact path='/faculty/students' element = {<StudentSection/>} />
        <Route exact path='/faculty/faculty' element = {<FacultySection/>} />
      </Routes>
    </Router>
  )
}

export default App;
