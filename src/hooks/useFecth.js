import axios from "axios";
import { useEffect, useState } from "react";

const useFecth = ({ type }) => {
 const [data, setData] = useState([]);

 useEffect(() => {
  const fetchFn = async () => {
   switch (type) {
    case "top":
     return `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
     break;

    case "latest":
     return `https://api.themoviedb.org/3/movie/latest?language=en-US&page=1`;
     break;

    case "Popular":
     return `https://api.themoviedb.org/3/person/popular?language=en-US&page=1`;
     break;

    case "trend":
     return `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
     break;
   }

   const response = await axios.get(`${type}`, {
    headers: {
     Accept: "application/json",
     Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
    },
   });
  };
 });
};

export default useFecth;
