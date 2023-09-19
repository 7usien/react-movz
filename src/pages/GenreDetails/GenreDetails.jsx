import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import BlockItem from "../../components/BlockItem/BlockItem";
import Loading from "../../components/Loading/Loading";
import { GenreContext } from "../../context/GenreContext";

const GenreDetails = () => {
 const { id } = useParams();
 const [genreMovies, setGenreMovies] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [titleGenre, setTitleGenre] = useState('');

 const { genres } = useContext(GenreContext);

  
  
 useEffect(() => {
  setCurrentPage(1);
 }, [id]);

 useEffect(() => {
   const fechGenres = async () => {
    setLoading(true);
   const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${currentPage}`,
    {
     accept: "application/json",
     headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
     },
    }
   );
   setGenreMovies(response.data?.results);
   setLoading(false);
   setTotalPages(response.data.total_pages);
  };
  fechGenres();
 }, [id, currentPage]);

 const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
 };


  useEffect(() => {
    
    const one = genres.filter(genre => {

      return genre.id == Number(id)
    })

    setTitleGenre(one[0]?.name)

  }, [id, genres])
  

  
 return (
  <>
   {loading ? (
    <div className=" w-full flex items-center justify-center m-auto col-span-2">
     <Loading text="fetching data .." />
    </div>
   ) : (
    <div className=" w-full grid grid-cols-6  col-span-2 gap-5 py-4">
           <h2 className="col-span-full text-3xl text-darkest text-center">

      
{titleGenre}
           
           </h2>
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
   )}
  </>
 );
};

export default GenreDetails;
