import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../assets/indexed.json";

const ReviewForm = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [textareaContent, setTextareaContent] = useState("");
  const maxWordLimit = 250;
  const id = useParams().id;
  const getCourseNameById = (courseId) => {
    const course = jsonData[courseId];
    return course ? course.title : "Course Not Found";
  };
  const courseName = getCourseNameById(id);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTextareaChange = (event) => {
    const content = event.target.value;
    // Calculate word count
    const wordCount = content.trim().split(/\s+/).length;

    // Limit the textarea content to 250 words
    if (wordCount <= maxWordLimit) {
      setTextareaContent(content);
    }
  };
  return (
    <div
      className="flex flex-row gap-9 justify-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="flex flex-col relative">
        <div className="label">
          <span className="label-text text-xl">
            {id} - {courseName}
          </span>
        </div>
        <textarea
          placeholder="Mention workload, grade cutoffs, paper-patterns, course difficulty etc.."
          className="textarea textarea-bordered textarea-lg w-[50vw] h-[25vw] resize-none"
          value={textareaContent}
          onChange={handleTextareaChange}
        ></textarea>
        <div className="text-gray-500 absolute bottom-0 right-0 mr-4 mt-4 text-gray-500">
          Words: {textareaContent.trim().split(/\s+/).length}/{maxWordLimit}
        </div>
        <div className="label">
          <span className="label-text text-sm">Keep it relevant...</span>
        </div>
      </div>
      <div className="grid grid-rows-4 gap-5">
        <div>
          <select className="select select-info w-auto" required>
            <option value="" disabled selected>
              Select instructor
            </option>
            <option value="firstInstructor">First instructor</option>
            <option value="secondInstructor">Second instructor</option>
            <option value="otherInstructor">Other</option>
          </select>
        </div>

        <div className="label gap-9">
          <select className="select select-info w-auto" required>
            <option disabled selected>
              Select semester
            </option>
            <option>Spring</option>
            <option>Monsoon</option>
          </select>
          <select className="select select-info w-auto" required>
            <option disabled selected>
              Select year
            </option>
            <option>'24</option>
            <option>'23</option>
            <option>'22</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-left">Post as anonymous</span>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="checkbox"
            />
          </label>
        </div>
        <div>
          <button
            className="btn btn-wide btn-outline btn-primary btn-success"
            type="submit"
          >
            {" "}
            Post{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
