import React, { Suspense, use, memo } from "react";
import { useParams } from "react-router-dom";
import { useEnrollment } from "../../context/EnrollmentContext";
import { fetchApiData } from "../../hooks/useApi";
import LoadingFallback from "../LoadingFallback";

const EnrollmentButton = memo(({ courseId }) => {
  const { isEnrolled, toggleEnrollment } = useEnrollment();
  const enrolled = isEnrolled(courseId);

  const handleEnrollClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleEnrollment(courseId);
  };

  return (
    <button
      onClick={handleEnrollClick}
      className={`mt-6 py-3 px-4 rounded-md text-lg font-bold shadow-md cursor-pointer ${
        enrolled
          ? "bg-teal-400 hover:bg-teal-500 text-white"
          : "bg-indigo-400 hover:bg-indigo-500 text-white "
      }`}
    >
      {enrolled ? "Already Enrolled" : "Enroll"}
    </button>
  );
});

const CourseDetailsContent = () => {
  const { id } = useParams();
  const { data: courseDetails, error } = use(
    fetchApiData(`${"/api/courses/"}${id}`)
  );

  if (error) {
    return (
      <p className="text-center p-8 text-red-500">Error getting course data</p>
    );
  }

  if (!courseDetails) {
    return <p className="text-center p-8">No course details available.</p>;
  }

  const { title, description, image } = courseDetails;

  return (
    <>
      <div className="bg-white h-15 flex items-center pl-10 text-xl font-medium">
        <p>My Course</p>
      </div>
      <div className="flex w-full flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto my-6">
        <div className="w-full md:w-1/2 relative">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="bg-gray-200 h-64 md:h-full"></div>
          )}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-6">
              {title}
            </h2>
          </div>
        </div>

        {/* Course Details */}
        <div className="md:w-1/2 p-6 flex flex-col">
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-blue-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>

          <EnrollmentButton courseId={id} />
        </div>
      </div>
    </>
  );
};

const CourseDetails = () => {
  const loadingText = "Loading course details...";
  return (
    <Suspense fallback={<LoadingFallback text={loadingText} />}>
      <CourseDetailsContent />
    </Suspense>
  );
};

export default CourseDetails;
