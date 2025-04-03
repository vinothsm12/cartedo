import { BrowserRouter, Route, Routes } from "react-router";
import CoursePage from "./screens/course";
import CourseDetails from "./screens/courseDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoursePage />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
