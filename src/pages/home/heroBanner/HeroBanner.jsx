import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";


const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state) => state.home); // destructuring the url 


    const {data, loading} = useFetch("/movie/upcoming");
    // console.log(data);
    useEffect ( () => {
        const bg = url.backdrop + 
        data?.results?.[Math.floor(Math.random() *20)]?.backdrop_path;
        // math.floor is used to make result whole no.
        // this '?' is used taaki when data have no value then this fn results does not call 
        setBackground(bg);
    } , [data]);

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0)  {
            navigate(`/search/${query}`)
        }
    };

  return (
     <div className="heroBanner">
        {!loading && (
        <div className="backdrop-img">
            <Img src = {background} />
         </div>
         )}

         <div className="opacity-layer"></div>

         <ContentWrapper>
            <div className="heroBannerContent">
                
                <span className="title">Welcome.</span>
                <span className="subTitle">Millions of movies,TV shows ans people to discover.
                Explore now.
                </span>
                <div className="searchInput">
                    <input 
                    type="text"
                    placeholder = "Search for a movie or tv show..."
                    onChange = {(e)=>setQuery(e.target.value)}
                    onKeyUp = {searchQueryHandler} />
                    <button>Search</button>
                </div>
            </div>
         </ContentWrapper>
        
     </div>
  );
};

export default HeroBanner;