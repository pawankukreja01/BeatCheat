import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const CourseDropdown = () => {
  const {course, setCourse }= useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const courses = ['Computer', 'English', 'Mathematics']; 

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button 
          type="button" 
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
          onClick={toggleDropdown}
        >
          {course == null ? 'Select Course' : course}
          {/* Icon */}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-56  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {courses.map((course, index) => (
              <a 
                href="#" 
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" 
                key={index}
                onClick={() => setCourse(course)}
              >
                {course}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDropdown;
