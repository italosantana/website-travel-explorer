import { Box, Typography } from "@mui/material"
import { PopularDestinationCard } from "./PopularDestinationCard"

import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Popular = [
    {
        image: "../../src/assets/mountain-hiking.png",
        title: "Mountain Hiking Tour",
        description: "Mountain Hiking Tour",
        price: "89",
    },
    {
        image: "../../src/assets/machu-picchu.png",
        title: "Machu Picchu, Peru",
        description: "Machu Picchu, Peru",
        price: "99",
    },
    {
        image: "../../src/assets/arizona.png",
        title: "The Grand Canyon, Arizona",
        description: "Mountain Hiking Tour",
        price: "70",
    },
    {
        image: "../../src/assets/mountain-hiking.png",
        title: "Mountain Hiking Tour",
        description: "Mountain Hiking Tour",
        price: "89",
    },
    {
        image: "../../src/assets/mountain-hiking.png",
        title: "Mountain Hiking Tour",
        description: "Mountain Hiking Tour",
        price: "89",
    },
    {
        image: "../../src/assets/mountain-hiking.png",
        title: "Mountain Hiking Tour",
        description: "Mountain Hiking Tour",
        price: "89",
    },
    {
        image: "../../src/assets/mountain-hiking.png",
        title: "Mountain Hiking Tour",
        description: "Mountain Hiking Tour",
        price: "89",
    },
]

export const PopularDestination = () => {
    const settings = {
        dots: true,
        infinite: true,
        margin: 0,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                display: 'flex',
                flexDirection: "column",
                height: '707px',
                maxWidth: "1440px",
            }}
        >
            <Typography sx={{ color: '#2D3134', fontFamily: "Inter", fontWeigth: 600, fontSize: '56px' }}>
                Find Popular Destination
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1180px',
                    mt: 5,
                }}
            >
                <Slider {...settings}>
                    {Popular.map((pop) => (
                        <PopularDestinationCard key={pop.title} {...pop} />
                    ))}
                </Slider>
            </Box>
        </Box>
    )
}