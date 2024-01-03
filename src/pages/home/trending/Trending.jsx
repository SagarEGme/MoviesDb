import React, { useState } from "react";
import "./style.scss"
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const [mediaType, setMediaType] = useState("movie");

    const { data, loading } = useFetch(`/trending/${mediaType}/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
        setMediaType(tab==="Movies"? "movie":"tv")
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <div className="tabs">

                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
                </div>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;