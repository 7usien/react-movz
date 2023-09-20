import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchForm = () => {
 const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
 const searchSubmit = (e) => {
   e.preventDefault();
   navigate(`search/${searchTerm}`)
    };





 return (
  <div className="search w-1/3">
   <form onSubmit={searchSubmit}>
    <input
     type="text"
     onChange={(e) => setSearchTerm(e.target.value)}
     placeholder="search for a movie"
     className="border-dark-2 bg-white border-2 rounded-md p-2 capitalize text-darkest w-2/3"
    />
    <input
     type="submit"
     value="search"
     className="bg-dark p-2 rounded-md cursor-pointer hover:bg-primary w-fit"
    />
   </form>
  </div>
 );
};

export default SearchForm;
