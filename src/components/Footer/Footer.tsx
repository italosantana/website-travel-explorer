import { Box, Container, Typography } from "@mui/material"
import theme from "../../styles/theme";

type FooterProps = {
    title: string;
    children: React.ReactNode;
}

type ItemProps = {
    href: string;
    children: React.ReactNode;
}

const ManyItemFooter = ({ href, children }: ItemProps) => {
    return (
        <a href={href}>
            <Typography
                sx={{
                    fontWeight: 400,
                    fontFamily: "Inter",
                    fontSize: '14px',
                    color: "#676A6C",
                    mt: '10px',

                }}
            >{children}</Typography>
        </a>
    )
}
const FooterItem = ({ title, children }: FooterProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "150px",
                a: {
                    textDecoration: 'transparent',
                },
                [theme.breakpoints.down('tablet')]:{
                    mt: '20px',
                }
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#2D3134",
                    mb: '22px',
                }}
            >{title}</Typography>
            {children}
        </Box>

    )
}

export const Footer = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '339px',
                    maxWidth: "100%",
                    width: "1440px",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                <Box>
                    <img src="../../../src/assets/logo-footer.png" alt="image footer logo business" />
                    <Typography
                        sx={{
                            color: "#5B5F62",
                            fontFamily: "Inter",
                            fonSize: '16px',
                            fontWeight: 400,
                            width: '141px',
                            height: "52px",
                            mt: '20px',
                        }}
                    >
                        Enjoy the touring with Salty
                    </Typography>
                    <Box
                        sx={{
                            mt: '40px',
                            img: {
                                mr: '14px'
                            }
                        }}
                    >
                        <img src="../../../src/assets/fb-icon.png" alt="icon social media facebook" />
                        <img src="../../../src/assets/insta-icon.png" alt="icon social media instagram" />
                        <img src="../../../src/assets/twitter-icon.png" alt="icon social media twitter" />
                    </Box>

                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: "row",
                    flexWrap: "wrap",

                }}>
                    <FooterItem title="Resource">
                        <ManyItemFooter href="#">Download</ManyItemFooter>
                        <ManyItemFooter href="#">Help center</ManyItemFooter>
                        <ManyItemFooter href="#">Guide Book</ManyItemFooter>
                        <ManyItemFooter href="#">App Directory</ManyItemFooter>
                    </FooterItem>

                    <FooterItem title="Travellers">
                        <ManyItemFooter href="#">Why Travellers</ManyItemFooter>
                        <ManyItemFooter href="#">Enterprice</ManyItemFooter>
                        <ManyItemFooter href="#">Customer Stories</ManyItemFooter>
                        <ManyItemFooter href="#">Instagram Post</ManyItemFooter>
                    </FooterItem>

                    <FooterItem title="Company">
                        <ManyItemFooter href="#">Travelling</ManyItemFooter>
                        <ManyItemFooter href="#">About Locato</ManyItemFooter>
                        <ManyItemFooter href="#">Success</ManyItemFooter>
                        <ManyItemFooter href="#">Information</ManyItemFooter>
                    </FooterItem>

                    <FooterItem title="Get App">
                        <ManyItemFooter href="#">App Store</ManyItemFooter>
                        <ManyItemFooter href="#">Google Play Store</ManyItemFooter>
                    </FooterItem>
                </Box>
            </Box>
        </Container>
    )
}