import { Box, Button, Typography } from "@mui/material"


type Props = {
    image: string;
    title: string;
    description: string;
    price?: string | number;
}

export const PopularDestinationCard = ({ image, title, description, price }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: "column",
                boxSizing: "border-box",
                width: "386px",
                height: "440px",
                background: "#FAF8ED",
                border: "2px solid #FFFFFF",
                boxShadow: "0px 24px 90px rgba(192, 188, 161, 0.22)",
                borderRadius: "16px",
            }}
        >
            <Box
                component="img"
                sx={{
                    background: `url(${image})`,
                    m: 1,
                    borderRadius: "16px",
                    width: "362px",
                    height: "252px",
                }}
            />
            <Typography
                sx={{
                    color: "#2D3134",
                    fontWeight: 600,
                    fontFamily: "Inter",
                    fontSize: '24px',
                    mt: '24px',
                    ml: '24px',
                }}>
                {title}
            </Typography>
            <Typography
                sx={{
                    color: "#5B5F62",
                    fontWeight: 400,
                    fontFamily: "Inter",
                    fontSize: '14px',
                    mt: '14px',
                    ml: '24px',
                }}>
                {description}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: '35px',
                    ml: '24px',
                }}
            >
                <Typography
                    sx={{
                        color: "#2D3134",
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "24px",
                    }}
                >
                    ${price}/Person
                </Typography>

                <Button
                    variant="outlined"
                    sx={{
                        border: "1px solid #2D3134",
                        borderRadius: "46px",
                        width: "120px",
                        height: "37px",
                        color: "#2D3134",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 400,
                        m: 2,

                        '&:hover': {
                            backgroundColor: "#2D3134",
                            color: "#FFF"
                        }
                    }}
                >
                    Book now
                </Button>
            </Box>
        </Box >
    )
}