import { Box, Typography, Button, SxProps } from "@mui/material";
import { Link } from "react-router-dom";

export default function BadGate() {

    return (
        <Box sx={boxStyle}>
            <Typography
                variant="h1"
                sx={h1Style}>
                404: We can't find what you're looking for..
            </Typography>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large">Return to the Homepage</Button>
            </Link>
        </Box>)
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