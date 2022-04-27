import React, { useState } from 'react';
import '../styles/Section.css';
import WebDev from '../variables/WebDev';
import UxDesign from '../variables/UxDesign';
import SocialMedia from '../variables/SocialMedia';
import { Link } from 'react-router-dom';
import {Link as RouterLink} from 'react-router-dom';

const Section = () => {

    const [text, setText] = useState('first-con');

    return (
        <div className='section'>

            <div>
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
            </div>

        </div>
    );
};

export default Section;