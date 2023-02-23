import { Box } from "@mui/material"
import { Title } from "../Title/Title"
import { Description } from "../Description/Description"
import { CardCategories } from "./CardCategory"
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Explorer = [
    {
        title: "Beach",
        image: "../../../src/assets/Beach.png",
    },
    {
        title: "Desert",
        image: "../../../src/assets/Desert.png",
    },
    {
        title: "Mountain",
        image: "../../../src/assets/Mountain.png",
    },
    {
        title: "Temple",
        image: "../../../src/assets/Temple.png",
    },
    {
        title: "Tower",
        image: "../../../src/assets/Tower.png",
    },
    {
        title: "Pyramid",
        image: "../../../src/assets/Pyramid.png",
    }
]

export const Categories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    margin: 0,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
            <Box
                sx={{
                    height: '542px',
                    display: "flex",
                    flexDirection: "column",

                }}
            >
                <Title>Categories</Title>
                <Description>Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</Description>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1180px',
                    }}
                >
                    <Slider {...settings}>
                        {Explorer.map((explore) => (
                            <CardCategories key={explore.title} {...explore} />
                        ))}
                    </Slider>
                </Box>
            </Box>
    )
}