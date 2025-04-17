import { BrowserRouter, Route, Routes } from "react-router-dom"; // Note: should be react-router-dom, not react-router
import CoursePage from "./screens/course";
import CourseDetails from "./screens/courseDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/cartedo">
      <Routes>
        <Route path="/" element={<CoursePage />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
