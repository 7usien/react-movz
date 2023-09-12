import axios from 'axios';
import { useEffect, useState } from 'react';

function useTrailer(videoID) {
  const [videoKeys, setVideoKeys] = useState([]);
  const [chosenOne, setChosenOne] = useState([]);

  useEffect(() => {
    const fecthVideo = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${videoID}/videos?language=en-US`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      );

      setVideoKeys(response.data.results);

      setChosenOne(
        videoKeys.filter((video) => {
          return (
            video.type === 'Trailer' &&
            video.site === 'Youtube' &&
            video.official === true
          );
        })
      );
      //videoKeys > array> filter id==id
      // chosenOne has trailer and offical
      // return it as key
    };

    fecthVideo();
  }, [videoID]);

  return { videoKeys, videoID, chosenOne };
}

export default useTrailer;
