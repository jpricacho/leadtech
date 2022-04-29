import { ClassNames } from "@emotion/react";
import React,{useState} from "react";
import '../styles/Developers.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image  from "../images/profile.JPG";
import Image2 from "../images/mel.jpg";
import Image3 from "../images/james.jpg";


const Developers = () => {

    const [name,setName] = useState('your name');
    const [job,setJob] = useState('job title');
    const [about,setAbout] = useState(' check this portfolio ');
    return (
        <>
           <Header />
           <div className="txt text-white display-4" > 
           Meet Our Developers
           </div>
            <div className="d-md-flex gap-3 p-5" width="100px" height="100vh"> 
                <div className='cards col-md-4 col-12'>
                    <div className='upper-container'>
                        <div className="image-container">
                            <img src={Image} alt='avatar' />
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> Cielito Ann Repuyan </h3>
                        <h4> Web Developer </h4>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
                <div className='cards col-md-4 col-12'>
                    <div className='upper-container'>
                        <div className="image-container">
                            <img src={Image3} alt='avatar'/>
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> James Patrick Ricacho </h3>
                        <h4> Web Developer </h4>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
                <div className='cards col-md-4 col-12'>
                    <div className='upper-container'>
                        <div className="image-container">
                        <img src={Image2} alt='avatar' />
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> Meliza De Guia </h3>
                        <h4> Web Developer </h4>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
            </div>
        </>
    )
    
}
export default Developers