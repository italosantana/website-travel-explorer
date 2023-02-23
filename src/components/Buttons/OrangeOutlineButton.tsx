import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

type Props = {
    href: string;
    children: React.ReactNode;
}
export const OrangeButton = ({ href, children }: Props) => {
    return (
        <Button
            variant="outlined"
            href={href}
            endIcon={<SendIcon />}
            sx={{
                color: "#F66F4D",
                border: "1.4px solid #F66F4D",
                borderRadius: '27px',
                width: "170px",
                height: '54px',
            }}
        >
            {children}
        </Button>
    )
}