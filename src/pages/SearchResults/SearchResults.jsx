import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BlockItem from "../../components/BlockItem/BlockItem";
import Loading from "../../components/Loading/Loading";

const SearchResults = () => {
 const { term } = useParams();
 const [searchTerm, setSearchTerm] = useState("");
 const [searchData, setSearchData] = useState([]);

 useEffect(() => {
  setSearchTerm(term);
 }, [term]);

 useEffect(() => {
  const fetchResults = async () => {
   if (searchTerm.length > 0) {
    const response = await axios.get(
     `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US`,
     {
      headers: {
       accept: "application/json",
       Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
      },
     }
    );
    setSearchData(response.data.results);
   }
  };

  const fetchDataTimeout = setTimeout(fetchResults, 2000);

  return () => clearTimeout(fetchDataTimeout);
 }, [searchTerm]);

 console.log(searchData);

 return (
  <>
   {
    (searchData.length === 0 ? (
     <Loading className="m-auto" />
    ) : (
     <div className="text-darkest col-span-4 grid grid-cols-5 gap-4">
      {searchData.map((result) => (
       <BlockItem key={result.id} data={result} />
      ))}
     </div>
    ))
   }
  </>
 );
};

export default SearchResults;
