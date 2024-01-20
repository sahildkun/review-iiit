import React, { useEffect, useState } from "react";
import jsonData from "../assets/indexed.json";
import { Link, useNavigate } from "react-router-dom";

const AutocompleteComponent = () => {
  let [code, setCode] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const extractedCode = inputValue.split(" ")[0]; // Extracting the first word as the code
    setCode(extractedCode);
  };
 
  return (
    <div className="items-center justify-center h-screen">
      <div className="join center-container">
        <input
          className="input input-bordered join-item w-3/4 bg-slate-100 text-black"
          placeholder="Enter Course Name or Course Code..."
          autoComplete="on"
          list="datalistOptions"
          onChange={handleInputChange}
        />
        <datalist  id="datalistOptions">
          {Object.entries(jsonData).map(([code, { title, instructors }]) => (
            <option key={code} value={`${code} - ${title}`} />
          ))}
        </datalist>
        <button className="btn join-item rounded-r-full text-white hover:text-" type="submit" onClick={()=>navigate(`/posts/${code}`)}>
            Search
        </button>
      </div>
    </div>
  );
};

export default AutocompleteComponent;