import React, { useEffect, useRef, useState } from 'react';
import cards from '../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const Titlecards = ({t1,t2,t3,t4,category}) => {
  const scrollRef = useRef(null);
  const [res,setres] = useState([])
// Function to handle mouse wheel scroll
  const handleScroll = (event) => {
    event.preventDefault(); // Prevent vertical scrolling
    scrollRef.current.scrollLeft += event.deltaY * 2; // Smooth horizontal scroll
  };
  useEffect(()=>{

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTM0YjlhMTBlMjIzOGFmYzg4ODkzZTEyYTAyNTkwMCIsIm5iZiI6MTc0MzA5NzQwMy41NDcwMDAyLCJzdWIiOiI2N2U1OGUzYjQyMWViOGMzMzFiYTVjMWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aKeJWYxAoJivcWBsSHb1-OYgKqmUtr9KwpSpNJhjI0s'
          }
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
          .then(res => res.json())
          .then(res => setres(res.results))
          .catch(err => console.error(err));

    scrollRef.current.addEventListener('wheel',handleScroll)
  },[])

  return (
    <div className="text-white mt-5">
      <h1 className="font-bold text-3xl">{t1?t1:t2?t2:t3?t3:t4}</h1>
      <div 
        ref={scrollRef}
        className="flex gap-10 mt-3 overflow-x-auto no-scrollbar whitespace-nowrap"
      >
        {res.map((card, idx) => (
          <Link to={`player/${card.id}`}><div key={idx} className="w-60 flex-shrink-0">
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" className="w-full rounded-lg" />
            <h1>{card.original_title}</h1>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Titlecards;
