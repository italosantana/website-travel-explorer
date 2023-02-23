import { Typography } from "@mui/material"
import theme from "../../styles/theme";


type Props = {
    children: React.ReactNode;
    sx?: any;
}

export const Title = ({ children, sx }: Props) => {
    return (
        <Typography
            sx={{
                fontFamily: "Sen",
                fontSize: "84px",
                fontWeight: 700,
                color: "#2D3134",
                [theme.breakpoints.down('tablet')]: {
                    fontSize: "58px",
                },
                [theme.breakpoints.down('mobile')]: {
                    fontSize: "42px",
                },
                ...sx
            }}
        >
            {children}
        </Typography>
    )
}