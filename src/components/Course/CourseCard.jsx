import React, { useEffect, useRef, useState } from "react";
import { MoreVertical } from "lucide-react";
import { useEnrollment } from "../../context/EnrollmentContext";

const CourseCard = ({ course }) => {
  const { title, image, id } = course;
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { isEnrolled, toggleEnrollment } = useEnrollment();

  const enrolled = isEnrolled((id || "").toString());

  const handleEnrollClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleEnrollment(id.toString());
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <a href={`/course/${id}`}>
      <div
        key={course.id}
        className="bg-white rounded-lg shadow overflow-hidden relative max-w-60"
      >
        <div className="h-32 bg-gray-200 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            width={"200"}
            height={"200"}
          />
          {enrolled && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
              Enrolled
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-800">{title}</h3>
            <button
              className="text-gray-400 hover:text-gray-100 bg-black/5 hover:bg-black/10 p-1 rounded-full transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowDropdown(!showDropdown);
              }}
            >
              <MoreVertical className="w-5 h-5" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 py-1">
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={handleEnrollClick}
                >
                  {enrolled ? "Unenroll" : "Enroll"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
