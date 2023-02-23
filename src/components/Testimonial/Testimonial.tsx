import { Box, Container, Typography } from "@mui/material"
import theme from "../../styles/theme"


const StarRating = () => {
    return (
        <Box>
            <img src='../../src/assets/Star.png' alt="stars quantity rating by user" />
            <img src='../../src/assets/Star.png' alt="stars quantity rating by user" />
            <img src='../../src/assets/Star.png' alt="stars quantity rating by user" />
            <img src='../../src/assets/Star.png' alt="stars quantity rating by user" />
            <img src='../../src/assets/Star.png' alt="stars quantity rating by user" />

            <Typography sx={{
                fontFamily: "Inter",
                fontSize: '20px',
                fontWeight: 500,
                color: "#2D3134",
            }}>Andrew Sarma</Typography>

            <Typography sx={{
                fontFamily: "Inter",
                fontSize: '12px',
                fontWeight: 400,
                color: "#5B5F62",
            }}>Enterpreneur</Typography>
        </Box>
    )
}

const CardUserTestimonial = () => {
    return (
        <Box
            sx={{
                mt: '25px',
                borderRadius: '14px',
                backgroundColor: "#FFF",
                width: '537px',
                height: '283px',
                maxWidth: "90%",
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                p: '30px',
                [theme.breakpoints.down('mobile')]: {
                    height: '100%',
                }
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Inter",
                    fontSize: '18px',
                    fontWeight: 400,
                    color: "#5B5F62",
                    alignItems: 'center',
                    mb: '27px',
                }}
            >
                Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.
            </Typography>
            <StarRating />
        </Box>
    )
}

export const Testimonial = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '671px',
                    width: "1440px",
                    maxWidth: "100%",
                    justifyContent: 'space-between',
                    [theme.breakpoints.down('tablet')]:{
                        height: "100%",
                        m: "20px 0px 20px 0px",
                    }
                }}
            >

                <Box
                    sx={{
                        transform: "matrix(-1, 0, 0, 1, 0, 0)",
                        borderRadius: '245px',
                        height: '539px',
                        width: '390px',
                        backgroundColor: '#EE8162',
                        img: {
                            borderRadius: '245px',
                        },
                        [theme.breakpoints.down('desktop')]: {
                            display: 'none',
                        },
                    }}
                >
                    <img src="../../../src/assets/client.png" alt="showing a client take a picture" />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '50%',
                        flexDirection: "column",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: '56px',
                        }}
                    >
                        A customer said about us:
                    </Typography>
                    <CardUserTestimonial />
                </Box>
            </Box>
        </Container>
    )
}