import { Box, Container, Typography } from "@mui/material"
import Intersect from '../../assets/Intersect.png'
import { Title } from "../Title/Title"
import { Description } from '../Description/Description';

const CardCentralNewsletter = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#FFD482',
                backgroundImage: `url(${Intersect})`,
                height: '358px',
                width: "1170px",
                alignItems: 'center',
                borderRadius: '30px'
            }}
        >
            <Typography
                sx={{
                    color: "#2D3134",
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '40px'
                }}
            >Sign up to our newsletter</Typography>
            <Typography
                sx={{
                    color: "#2D3134",
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '16px'
                }}
            >Reciev latest news, update, and many other things every week. </Typography>
        </Box>
    )
}

export const Newsletter = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '450px',
                }}
            >
                <CardCentralNewsletter />
            </Box>
        </Container>
    )
}