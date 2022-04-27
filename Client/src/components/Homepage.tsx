import { Box, createTheme, SxProps, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import Menu from "./Menu";
import PostsFeed from "./Posts";

function Homepage() {

    return (
        <Box sx={boxStyle}>
            <Typography
                variant="h1"
                sx={h1Style}>
                Welcome to Post
            </Typography>
            <Typography>Sign in to speak your mind, keep it friendly</Typography>
            <PostsFeed />
        </Box>
    );
}

export default Homepage;

const h1Style: SxProps = {
    color: '#333',
    fontSize: { xs: '2.5rem', sm: '4rem', xl: '5rem' },
}

const boxStyle: SxProps = {
    backgroundColor: 'white',
    padding: '2rem',
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}