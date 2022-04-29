import { Box, Typography, SxProps } from "@mui/material"
import { useContext } from "react";
import { APIContext } from "../Context/AuthContext";
import BadGate from "./BadGate";

export default function Logout() {
    const ctx = useContext(APIContext);

    return (
        ctx ?
            <Box sx={boxStyle}>
                <Typography
                    variant="h1"
                    sx={h1Style}>
                    Logging you out..
                </Typography>
            </Box>
            : <BadGate />
    )
}

const h1Style: SxProps = {
    padding: '1rem',
    color: '#333',
    fontSize: { xs: '2rem', sm: '3rem', xl: '4rem' },
    textAlign: 'center'
}

const boxStyle: SxProps = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}