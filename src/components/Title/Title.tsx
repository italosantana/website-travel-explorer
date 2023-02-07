import { Typography } from "@mui/material"


type Props = {
    children: React.ReactNode;
}

export const Title = ({ children }: Props) => {
    return (
        <Typography
            sx={{
                fontFamily: "Sen",
                fontSize: "84px",
                fontWeight: 700,
                color: "#2D3134"
            }}
        >
            {children}
        </Typography>
    )
}