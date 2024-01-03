import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const PageNotFound = () => {
  const navigate=useNavigate();
  return (
    <div className="container">
      <h3>Sorry! We don't have the searched movie in our database.</h3>
      <span>Search Other Movies / Tv Shows</span>
      <div className="searchSection">

      <button onClick={()=> navigate("/explore/movie")}> Movies</button>
      <button onClick={()=> navigate("/explore/tv")}> Tv Shows</button>
      </div>
    </div>
  )
}

export default PageNotFound
