import { Box, Paper, SxProps, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// 
function PostsFeed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                `http://localhost:4000/posts`
            );
            setPosts(data);
        }
        fetchData();
    }, []);
    console.log(posts);

    

    return (
        <Box sx={boxStyle}>
            {posts.map((post: any) => (
                <Box sx={postStyle} key={post._id}>
                    
                    <Paper elevation={3} sx={contentPaperStyle}>
                        <Box sx={contentStyle}>
                            <Typography variant="h5" sx={postText}>{post.description}</Typography>
                            <Typography></Typography>
                        </Box>
                    </Paper>
                    <Paper sx={usernamePaperStyle} elevation={3}>
                        <Typography sx={usernameStyle} variant="h6">

                        </Typography>
                    </Paper>
                </Box>
            ))}
        </Box>
    );
}

export default PostsFeed;

const usernamePaperStyle: SxProps = {
    height: '100%',
    margin: '0 1rem',
}
const contentStyle: SxProps = {
    margin: '1rem'
}
const postStyle: SxProps = {
    display: 'flex',
    height: '100%',
    width: '100%',
    marginBottom: '1rem',
    flexDirection: { xs: 'column-reverse', md: 'row-reverse' },
    "&: nth-of-type(odd)": {
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
    }
}

const usernameStyle: SxProps = {
    padding: '0.3rem 1rem',
    width: 'max-content',
    height: '100%'
}

const boxStyle: SxProps = {
    paddingTop: '1rem',
    height: '100%',
    width: { xs: '100', md: '80%', xl: '60%' },
}

const contentPaperStyle: SxProps = {
    minHeight: '8rem',
    height: 'auto',
    width: '100%',
}

const contentPapere: SxProps = {
    height: '100%',
    width: '100%',
}
const postText: SxProps = {
    paddingTop: '1.5rem',
    marginLeft: '1rem',
    wordBreak: 'break-all',
    paddingBottom: '1.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
}