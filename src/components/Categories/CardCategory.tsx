import { Box, Typography } from "@mui/material"


type props = {
    image: string;
    title: string;
}
export const CardCategories = ({ image, title }: props) => {
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            m: 2,
        }}
        >
            <img width={170} height={230}src={image} alt="a picture showing one place" />
            <Typography
            sx={{
                fontFamily: 'Inter',
                color: "#2D3134",
                fontSize: "26px",
                fontWeight: 500,
            }}
            >
                {title}               
            </Typography>
        </Box>
    )
}