import { Box, Container, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import Intersect from '../../assets/Intersect.png'
import theme from "../../styles/theme"

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
                borderRadius: '30px',
                [theme.breakpoints.down('mobile')]:{
                 textAlign: 'center',
                }
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

            <OutlinedInput
                id="outlined-adornment-password"
                sx={{
                    mt: '40px'
                }}
                placeholder="Enter your email address"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
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
                    maxWidth: "100%",
                    width: "1440px",
                }}
            >
                <CardCentralNewsletter />
            </Box>
        </Container>
    )
}