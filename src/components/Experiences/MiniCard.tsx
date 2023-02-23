import { Box, Typography } from "@mui/material"
import theme from "../../styles/theme";

type Props = {
    valueExperience: string;
    descriptionExperience: string;
}
export const MiniCard = ({ valueExperience, descriptionExperience }: Props) => {
    return (
        <Box
            sx={{
                diplay: 'flex',
                flexDirection: "row",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "14px",
                width: "166px",
                height: "178px",
                m: '10px',
                textAlign: 'center',
                [theme.breakpoints.down('desktop')]: {
                    height: "100%",
                }
            }}
        >
            <Typography
                sx={{
                    fontSize: "46px",
                    color: "#F66F4D",
                    fontFamily: "Inter",
                    fontWeight: 600,
                    [theme.breakpoints.down('desktop')]: {
                        fontSize: "26px"
                    }
                }}>
                {valueExperience}
            </Typography>
            <Typography
                sx={{
                    fontSize: "21px",
                    color: "#939597",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    [theme.breakpoints.down('desktop')]: {
                        fontSize: "16px"
                    }
                }}>
                {descriptionExperience}
            </Typography>
        </Box>
    )
}