import { Typography } from "@mui/material"


type Props = {
    children: React.ReactNode;
}

export const Description = ({ children }: Props) => {
    return (
        <Typography
            sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 400,
                color: "#5B5F62"
            }}
        >
            {children}
        </Typography>
    )
}