import { Fragment } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import Register from "./Register";
import Login from "./Login";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Homepage() {
    return (

        <Fragment>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <div className="posts">
             <Posts/>
            </div>
            <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
            <Link to={'/Register'} style={{ textDecoration: 'none' }}><Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 3 }}
            >
              Register
            </Button>
            </Link>
            <Link to={'/Login'} style={{ textDecoration: 'none' }}><Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            </Link>
            </Box>
            </Box>
        </Fragment>

    );
}

export default Homepage;