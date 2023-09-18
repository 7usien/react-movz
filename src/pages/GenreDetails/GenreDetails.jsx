import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BlockItem from "../../components/BlockItem/BlockItem";

const GenreDetails = () => {
 const { name } = useParams();
 const [genreMovies, setGenreMovies] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalPages, setTotalPages] = useState(0);


  
 useEffect(() => {
   setCurrentPage(1);
 }, [name]);

  console.log(name)
  
 useEffect(() => {
  const fechGenres = async () => {
   const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${name}&sort_by=popularity.desc&page=${currentPage}`,
    {
     accept: "application/json",
     headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
     },
    }
   );
   setGenreMovies(response.data?.results);
   setTotalPages(response.data.total_pages);
  };
  fechGenres();
 }, [name, currentPage]);

console.log(genreMovies)

 const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
 };

 return (
  <div className=" w-full grid grid-cols-6  col-span-2 gap-5 py-4">
   {genreMovies.map((movie) => (
    <BlockItem key={movie.id} data={movie} />
   ))}

   {/* Pagination */}
   <div className="flex col-span-6 m-auto gap-2 text-xl my-2 grid-flow-col flex-wrap">
    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
     (pageNumber) => {
      if (pageNumber <= 28)
       return (
        <button
         className="bg-dark text-white px-2 py-1 rounded w-10"
         key={pageNumber}
         onClick={() => handlePageChange(pageNumber)}
         disabled={pageNumber === currentPage}>
         {pageNumber}
        </button>
       );
      return null; // Skip rendering buttons for page numbers greater than 28
     }
    )}
   </div>
  </div>
 );
};

export default GenreDetails;
