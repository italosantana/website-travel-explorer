import { Box, Container, Typography } from "@mui/material"


const CardUserTestimonial = () => {
    return (
        <Box
            sx={{
                mt: '25px',
                borderRadius: '14px',
                backgroundColor: "#FFF",
                width: '537px',
                height: '283px',
                maxWidth: "100%",
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Inter",
                    fontSize: '18px',
                    fontWeight: 400,
                    color: "#5B5F62",
                    alignItems: 'center',
                }}
            >
                Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.
            </Typography>
        </Box>
    )
}

export const Termonial = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '671px',
                    width: "1440px",
                    maxWidth: "100%",
                    flexWrap: "wrap",
                    justifyContent: 'space-between',
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
                        }
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