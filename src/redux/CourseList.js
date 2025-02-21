
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from ".coursesSlice";

const CourseList = ({ db }) => {
  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses(db));
    }
  }, [db, dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Course List</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="mb-2 p-2 border rounded">
            <a href={`/course/${course.id}`} className="text-blue-500 hover:underline">
              {course.name} - {course.instructor}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;