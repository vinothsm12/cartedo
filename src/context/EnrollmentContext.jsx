import { createContext, useContext, useState, useEffect } from "react";

const EnrollmentContext = createContext();

export const useEnrollment = () => {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within an EnrollmentProvider");
  }
  return context;
};

export const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedEnrollments = localStorage.getItem("enrolledCourses");
    if (storedEnrollments) {
      setEnrolledCourses(JSON.parse(storedEnrollments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const toggleEnrollment = (courseId) => {
    setEnrolledCourses((prevEnrolled) => {
      const isEnrolled = prevEnrolled.includes(courseId);

      if (isEnrolled) {
        return prevEnrolled.filter((id) => id !== courseId);
      } else {
        return [...prevEnrolled, courseId];
      }
    });
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.includes(courseId);
  };

  const value = {
    enrolledCourses,
    toggleEnrollment,
    isEnrolled,
  };

  return (
    <EnrollmentContext.Provider value={value}>
      {children}
    </EnrollmentContext.Provider>
  );
};
