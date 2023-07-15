import React , {useState} from 'react';

import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import SwitchTabs from "../../../components/switchTabs/SwitchTab";

import useFetch from '../../../hooks/useFetch';


const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const {data, loading} = useFetch(`/trending/movie/${endpoint}`)

    const onTabChange = (tab) => {
        if(tab === "Day" ) setEndpoint("day");
        else if(tab === "Week") setEndpoint("week");
        // else setEndpoint("year");
    }
  return (
    <div className = "carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data= {["Day","Week"]} onTabChange = {onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending;