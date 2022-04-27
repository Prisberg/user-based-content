import { Box, Card, Grid, Paper, SxProps, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


/* Temporary posts */

interface PostInfo {
    id: number;
    poster: string;
    titel: string;
    content: string;
}

// const posts: PostInfo[] = [
//     {
//         id: 0,
//         poster: 'Göran',
//         titel: 'Post 1',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper ipsum id pretium blandit. Sed quis est malesuada, pellentesque eros pellentesque, porta lectus. In leo ligula, condimentum vel mi fermentum, fermentum malesuada augue. Quisque porttitor tellus et metus finibus pharetra. Nam euismod interdum velit, accumsan dapibus tortor rutrum non. Sed in porttitor orci, quis lacinia eros. Mauris quam diam, rhoncus in lobortis id, rutrum id felis. Morbi placerat nisi leo, sit amet vulputate lorem maximus sed. Etiam varius accumsan dolor in laoreet. Sed ultrices ipsum enim, vitae scelerisque mauris mattis vitae. Mauris commodo sem nec magna congue mollis. Mauris sed laoreet sem, eget elementum dui. Integer'
//     },
//     {
//         id: 1,
//         poster: 'Pia',
//         titel: 'Post 2',
//         content: 'Etiam at felis at lectus dapibus facilisis at quis eros. Integer sagittis urna a metus vulputate rhoncus. Nam eget mi sed libero tempor viverra a a est. Aliquam erat volutpat. Donec sagittis id nulla sed bibendum. Sed eu est at ligula scelerisque imperdiet at ac ligula. Sed aliquam arcu quis ante faucibus, sed convallis urna efficitur. Vestibulum pellentesque ex sagittis, interdum lorem at, ornare nulla. Pellentesque a leo aliquet, lobortis ex ut, faucibus neque. Aenean placerat faucibus libero, sit amet vehicula ante vehicula nec.'
//     },
//     {
//         id: 2,
//         poster: 'John Cena',
//         titel: 'Post 3',
//         content: 'Etiam at felis at lectus dapibus facilisis at quis eros. Integer sagittis urna a metus vulputate rhoncus. Nam eget mi sed libero tempor viverra a a est. Aliquam erat volutpat. Donec sagittis id nulla sed  ex sagittis, interdum lorem at, ornare nulla. Pellentesque a leo aliquet, lobortis ex ut, faucibus neque. Aenean placerat faucibus libero, sit amet vehicula ante vehicula nec.'
//     }
// ]

/* Temporary posts */


function PostsFeed() {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:4000/posts`
      );
      console.log(posts);
      setPosts(data);
    }
    fetchData();
  }, []);

    return (
        <Box sx={boxStyle}>
            {posts.map((post) => (
                <Box sx={postStyle} key={post._id}>
                    <Paper elevation={3} sx={contentPaperStyle}>
                        <Box sx={contentStyle}>
                            <Typography variant="h5">{post.description}</Typography>
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
    width: {xs: '100', md: '80%', xl: '60%'},
}

const contentPaperStyle: SxProps = {
    height: '100%',
    width: '100%',
}