import React, { useState } from 'react';
import '../styles/Section.css';
import WebDev from '../variables/WebDev';
import UxDesign from '../variables/UxDesign';
import SocialMedia from '../variables/SocialMedia';
import { Link } from 'react-router-dom';
import {Link as RouterLink} from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Section = () => {

    const [text, setText] = useState('first-con');
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <div className='section'>

            {/* <div>
                <div className='change-box'>
                    <button className='state-change-btn' onClick={() => setText('first-con')}>Web Development </button>
                    <button className='state-change-btn' onClick={() => setText('second-con')}>UI/UX Design </button>
                    <button className='state-change-btn' onClick={() => setText('third-con')}>Social Media Design</button>
                </div>

                <div>
                    {text === 'first-con' && <WebDev />}
                    {text === 'second-con' && <UxDesign />}
                    {text === 'third-con' && <SocialMedia />}

                    <div className="button">
                        <Link component={RouterLink} to='/services'><button className='section-button'>See More</button></Link>
                    </div>
                </div>
            </div> */}
            {/* <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid> */}
            <div style={{color: "white", backgroundColor: "red", width: "100%"}}>Test</div>

        </div>
    );
};

export default Section;