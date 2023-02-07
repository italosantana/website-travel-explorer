import { Box, Container, Typography } from "@mui/material"
import { Title } from "../Title/Title"
import { Description } from "../Description/Description"


export const Banner = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    backgrounColor: "red",
                    height: '618px',
                }}
            >
                <Box
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    width: "50%",
                }}
                >
                    <Title>Discover the Best Lovely Places</Title>
                    <Description>We are experienced in bringing adventures to stay their journey,
                        with all outdoor destinations in the world as our specialties. Start your adventure now!
                        Nature has already called you!</Description>
                </Box>

                <img src="../../../src/assets/humanModel.png"/>
            </Box>
        </Container>
    )
}