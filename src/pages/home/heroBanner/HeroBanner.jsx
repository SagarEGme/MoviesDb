import React, { useState, useEffect } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import Img from "../../../components/lazyLoadImage/img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const navigate = useNavigate();

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    } else{
      navigate('/')
    }
  };
  return (
    <>
      <div className='heroBanner'>
        {!loading &&
          <div className='backdrop-img'>
            <Img src={background} />
          </div>}
        <ContentWrapper>
          <div className="opacity-layer"></div>
          <div className="wrapper">
            <div className="heroBannerContent">
              <span className="title">Welcome</span>
              <span className="subTitle">
                Millions of movies, TV shows and people to discover.
                Explore Now.
              </span>
              <div className="searchInput">
                <input type="text" placeholder='Search for a movie or tv show..' onKeyUp={searchQueryHandler} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={()=>navigate(`/search/${query}`)}>Search</button>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}

export default HeroBanner
