import { Box } from "@mui/material"
import { Title } from "../Title/Title"
import { Description } from "../Description/Description"


export const Banner = () => {
    return(
        <Box
        sx={{
            display: "flex",
            flexDirection: "row",
        }}
        >
            <Title>Discover the Best Lovely Places</Title>
            <Description>We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</Description>
        </Box>
    )
}