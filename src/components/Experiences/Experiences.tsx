import { Box, Typography } from "@mui/material"
import theme from "../../styles/theme"
import { Description } from "../Description/Description"
import { Title } from "../Title/Title"
import { MiniCard } from "./MiniCard"

const ExperiencebyUser = [
    {
        valueExperience: "12k+",
        descriptionExperience: "Success Journey"
    },
    {
        valueExperience: "16k+",
        descriptionExperience: "Awards Winning"
    },
    {
        valueExperience: "20k+",
        descriptionExperience: "Years Of Experience"
    },
]

export const Experiences = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-around",
                maxWidth: "1440px",
                height: "682px",
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    width: "50%",
                    order: 1,
                }}
            >
                <>
                    <Description sx={{ color: "#F66F4D" }}>Our experience</Description>
                    <Typography
                        sx={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: '56px',
                        }}
                    >
                        Our Stories Have Adventures
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontSize: '16px',
                            color: "#5B5F62",
                        }}
                    >
                        Our Stories Have AdventuresWe are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            mt: '40px',
                        }}
                    >
                        <>
                            {ExperiencebyUser.map((exp) => (
                                <MiniCard key={exp.valueExperience} {...exp} />
                            ))}
                        </>
                    </Box>
                </>
            </Box>
            <Box
                component='img'
                src='../../src/assets/thom-holmes.png'
                alt="user relating your experience using our platform"
                sx={{
                    width: "492px",
                    height: "562px",
                    zIndex: 0,
                    [theme.breakpoints.down('desktop')]:{
                        zIndex: -1,
                        position: "absolute",
                        opacity: 0.09,
                    }
                }}
            />
        </Box>
    )
}