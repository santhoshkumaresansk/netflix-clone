import React, { useEffect, useState } from 'react'
import back from '../assets/back_arrow_icon.png'
import info from '../assets/info_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
    const navi = useNavigate()
    const {id} = useParams()
    const [id_no , setid] = useState({
        name:"",
        published_at:"",
        type:"",
        key:""
    })
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTM0YjlhMTBlMjIzOGFmYzg4ODkzZTEyYTAyNTkwMCIsIm5iZiI6MTc0MzA5NzQwMy41NDcwMDAyLCJzdWIiOiI2N2U1OGUzYjQyMWViOGMzMzFiYTVjMWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aKeJWYxAoJivcWBsSHb1-OYgKqmUtr9KwpSpNJhjI0s'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setid(res.results[0]))
            .catch(err => console.error(err));

            
    },[])
  return (
    <div className='text-white p-4'>
        <div onClick={()=>navi(-2)} className='relative z-30 flex justify-between'>
        <img className='w-15 h-15 p-1 cursor-pointer' src={back} alt="" />
        <div >
        <img className='w-15 h-15 p-1 cursor-pointer' src={info} alt="" />
        </div>
        </div>
        <div className='absolute w-full h-full left-0 top-5 p-20'>
        <iframe className='w-full h-full' src={`https://www.youtube.com/embed/${id_no.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="absolute bottom-6 text-white flex justify-between w-full pr-15">
            <p>{id_no.published_at.slice(0,10)}</p>
            <p>{id_no.name}</p>
            <p>{id_no.type}</p>
        </div>
        
    </div>
  )
}

export default Player