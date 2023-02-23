import { Box } from "@mui/material"
import { Title } from "../Title/Title"
import { Description } from "../Description/Description"
import theme from "../../styles/theme"


export const Banner = () => {
    return (
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
                <Box
                    component='img'
                    src='../../../src/assets/humanModel.png'
                    alt='a placeholder image'
                    sx={{
                        position: 'absolute',
                        right: 0,
                        opacity: 0.09,
                        zIndex: 0,
                        '@media(max-width: 1190px)': {
                            opacity: 0.09,
                            zIndex: 0,
                            height: '80vh',
                        },
                        [theme.breakpoints.up('desktop')]: {
                            display: 'block',
                            height: '80vh',
                            opacity: 1,
                        },
                    }}
                />
            </Box>
    )
}