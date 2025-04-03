import React, { Suspense, use } from "react";
import CourseCard from "./CourseCard";
import { fetchApiData } from "../../hooks/useApi";
import LoadingFallback from "../LoadingFallback";

const Courses = () => {
  const { data: courseList, error } = use(fetchApiData("api/courses"));

  if (error) {
    return (
      <div className="text-red-500 p-4">
        Error getting course data: {error.message}
      </div>
    );
  }

  if (!courseList || courseList.length === 0) {
    return <div className="p-4">No courses available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
      {courseList.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

const CourseList = () => {
  const loadingText = "Loading courses...";
  return (
    <Suspense fallback={<LoadingFallback text={loadingText} />}>
      <div className="bg-white h-15 flex items-center pl-10 text-xl font-medium">
        <p>My Course</p>
      </div>
      <Courses />
    </Suspense>
  );
};

export default CourseList;
