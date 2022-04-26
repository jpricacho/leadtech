import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Contact.css';
import Header from './Header';

const Contact = () => {
    return (

        <div className='contactbg'>
            <>
                <Header />
                <CssBaseline />
                <Container id='contactpage'>
                    <Box sx={{ flexGrow: 1 }}>
                        <h1 className='contactus'>Contact Us</h1>
                        <Grid container spacing={2} className='text-center'>
                            <Grid item xs={6}>
                                <div className='otherinfo'>
                                    <h1>Don't be a stranger just say hello!</h1>
                                    <p>Thank you for your interest in our services. Please fill out the form below and we will get back to you promptly regarding your request</p>
                                    <div className='socials'>
                                        <ul>
                                            <li><FacebookIcon /></li>
                                            <li><InstagramIcon /></li>
                                            <li><LinkedInIcon /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <div className='form'>
                                    <form>
                                        <input type='text' placeholder='First Name' />
                                        <input type='text' placeholder='Last Name' />
                                        <br /><br />
                                        <input type='text' placeholder='Phone' />
                                        <input type='text' placeholder='Email' />
                                        <br /><br />
                                        <textarea rows='8' placeholder='Message'></textarea>
                                        <br />
                                        <input type='submit' value='Send' className='submit' />
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </>
        </div>
    )
}

export default Contact