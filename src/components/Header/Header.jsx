import { HiVideoCamera } from "react-icons/hi";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { BiSolidMoviePlay } from "react-icons/bi";
import { GenreContext } from "../../context/GenreContext";
import SearchForm from "../Search/SearchForm";

const Header = () => {
 const { setGenres, genres } = useContext(GenreContext);

 const fetchGeneres = async () => {
  const response = await axios.get(
   `https://api.themoviedb.org/3/genre/tv/list?language=en-US`,
   {
    headers: {
     accept: "application/json",
     Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
    },
   }
  );

  setGenres(response?.data?.genres);
 };

 useEffect(() => {
  fetchGeneres();
 }, []);

 return (
  <header className=" w-full bg-white drop-shadow-md h-24 relative z-50">
   <div className="max-w-7xl m-auto flex justify-between items-center content-center; align-middle h-24 ">
    <div className="text-primary  text-lg">
     <NavLink to="/" className="flex place-items-center gap-1">
      <img src={logo} alt="" />
      <h1>React movz DB</h1>
     </NavLink>
    </div>

    <div className="text-darkest flex align-middle text-lg">
     <ul className="flex capitalize gap-4 align-middle">
      <li>
       <NavLink to="top" end>
        top
       </NavLink>
      </li>
      <li>
       <NavLink to="now-playing">now playing</NavLink>
      </li>

      <li>
       <NavLink to="popular">popular</NavLink>
      </li>
      <li>
       <NavLink to="trending">trending</NavLink>
      </li>
     </ul>
    </div>

    <div className="group geners bg-dark text-white rounded-md p-1 capitalize text-lg relative ">
     <h3 className="p-2 flex align-middle border-none relative hover:bg-primary cursor-pointer flex items-center">
      <HiVideoCamera className="inline-block align-middle mr-1" />
      choose your generes
     </h3>
     <ul className="absolute grid grid-cols-3 bg-dark left-0 top-12 w-[600px] rounded-md invisible drop-shadow-lg z-50  group-hover:visible ">
      {genres.map((gen) => (
       <li
        key={gen.id}
        className="border-b border-slate-500/95 p-2 hover:bg-darkest">
        <NavLink to={`genre/${gen.id}`} className="flex items-center gap-1">
         <BiSolidMoviePlay />
         {gen.name}
        </NavLink>
       </li>
      ))}
     </ul>
    </div>

<SearchForm />
   </div>
  </header>
 );
};

export default Header;
