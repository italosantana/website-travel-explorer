import { Typography } from "@mui/material"


type Props = {
    children: React.ReactNode;
    sx?: any;
}

export const Description = ({ children, sx }: Props) => {
    return (
        <Typography
            sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 400,
                color: "#5B5F62",
                ...sx
            }}
        >
            {children}
        </Typography>
    )
}