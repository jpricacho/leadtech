import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import '../styles/Developers.css'
import Header from './Header';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Developers = () => {
  return (
    <div className='devbg'>
    <React.Fragment>
        <Header/>
            <CssBaseline />
            <Container id='devprofile'>
                <Box sx={{ flexGrow: 1 }}>
                    <h1 className='title'>Meet Our Developers</h1>
                    <Grid container spacing={2} className='text-center' >
                        <div className='contents'>
                        <Grid item xs={4}>
                            <div className='box slideup'>
                                <img src='https://placeimg.com/640/480/people' className='img'/>
                                <h2 id='name'>Meliza De Guia</h2>
                                <p>Front-end Web Developer</p>
                                <a href='#'><button className='btn'>See Portfolio</button></a>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                            <div className='box slideup'>
                            <img src='https://placeimg.com/640/480/people' className='img'/>
                                <h2 id='name'>Ann Repuyan</h2>
                                <p>Front-end Web Developer</p>
                                <a href='#'><button className='btn'>See Portfolio</button></a>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                            <div className='box slideup'>
                            <img src='https://placeimg.com/640/480/people' className='img'/>
                                <h2 id='name'>James Ricacho</h2>
                                <p>Front-end Web Developer</p>
                                <a href='#'><button className='btn'>See Portfolio</button></a>
                            </div>
                        </Grid>
                        </div>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    </div>
  )
}

export default Developers