import React , {useState} from 'react';

import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import SwitchTabs from "../../../components/switchTabs/SwitchTab";

import useFetch from '../../../hooks/useFetch';


const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const {data, loading} = useFetch(`/${endpoint}/top_rated`)

    const onTabChange = (tab) => {
        if(tab === "Movies" ) setEndpoint("movie");
        else if(tab === "TV Shows") setEndpoint("tv");
        // else setEndpoint("month");
    }
  return (
    <div className = "carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Top Rated</span>
            <SwitchTabs data= {["Movies","TV Shows"]} onTabChange = {onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}
        endpoint={endpoint}/>
    </div>
  )
}

export default TopRated;