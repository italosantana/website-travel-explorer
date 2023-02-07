import { Box, Container } from "@mui/material"
import { Title } from "../Title/Title"
import { Description } from "../Description/Description"
import { CardCategories } from "./CardCategory"


export const Categories = () => {
    return (
        <Container>
            <Box
                sx={{
                    height: '542px',
                    display: "flex",
                    flexDirection: "column",

                }}
            >
                <Title>Categories</Title>
                <Description>Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</Description>
                
                <Box>
                <CardCategories image="../../../src/assets/Beach.png" title="Beach"/>
                <CardCategories image="../../../src/assets/Beach.png" title="Beach"/>
                <CardCategories image="../../../src/assets/Beach.png" title="Beach"/>
                <CardCategories image="../../../src/assets/Beach.png" title="Beach"/>
                <CardCategories image="../../../src/assets/Beach.png" title="Beach"/>
                <CardCategories image="../../../src/assets/Beach.png" title="Beach"/>
                </Box>
            </Box>
        </Container>
    )
}