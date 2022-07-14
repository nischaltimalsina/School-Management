import React from "react";
import { Routes, Route } from "react-router-dom";
import Routine, { RoutineSlot } from "./features/admin/Routine";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoutes from "./services/ProtectedRoutes";
import QuestionsModule from "./pages/QuestionsModule";
import SchoolProfiler from "./pages/SchoolProfiler";
import {
  CreateQuestions,
  ViewCollections,
  ViewSets,
} from "./features/admin/Questions";
import { StudentProfile } from "./features/common/Profile";
import Registration from "./pages/Registration";
import {
  StudentRegister,
  StaffRegister,
  ClassRegister,
  SubjectRegister,
} from "./features/admin/RegistrationManager";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/registration" element={<Registration />}>
            <Route path="student" element={<StudentRegister />} />
            <Route path="staff" element={<StaffRegister />} />
            <Route path="class" element={<ClassRegister />} />
            <Route path="subject" element={<SubjectRegister />} />
          </Route>
          <Route path="/settings" element={<SchoolProfiler />} />
          <Route path="/time-table" element={<Routine />}>
            <Route path="slot-criteria" element={<RoutineSlot />} />
          </Route>
          <Route path="/modules/questions" element={<QuestionsModule />}>
            <Route path="create" element={<CreateQuestions />} />
            <Route path="view" element={<ViewSets />} />
            <Route path="collections" element={<ViewCollections />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
