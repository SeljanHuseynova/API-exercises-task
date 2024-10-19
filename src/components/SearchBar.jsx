import React from "react";

const SearchBar = (props) => {
const {handleSearch,inputText,setInputText}=props
  return (
    <>
      <form onSubmit={handleSearch} className="input-group mb-3"> 
        <input
          type="text"
          className="form-control"
          placeholder="Type word..."
          aria-describedby="basic-addon2"
          onChange={(e)=>setInputText(e.target.value)}
          value={inputText}
        />
        <div className="input-group-append">
          <button className="btn" type="sumbit">
          <i class="fa-solid fa-magnifying-glass icon"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
