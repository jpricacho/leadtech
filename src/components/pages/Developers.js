import { ClassNames } from "@emotion/react";
import React,{useState} from "react";
import '../styles/Developers.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header';
// import 'bootstrap/dist/css/bootstrap.min.css';



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
            <div className="d-flex gap-3" width="100px" height="100vh"> 
                <div className='cards col-3'>
                    <div className='upper-container'>
                        <div className="image-container">
                            <img src="" alt='' />
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> Cielito Ann Repuyan </h3>
                        <h4> Web Developer </h4>
                        <p> (about) </p>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
                <div className='cards col-3'>
                    <div className='upper-container'>
                        <div className="image-container">
                            <img src="" alt=''/>
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> James Patrick Ricacho </h3>
                        <h4> Web Developer </h4>
                        <p> (about) </p>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
                <div className='cards col-3'>
                    <div className='upper-container'>
                        <div className="image-container">
                            <img src="" alt=''/>
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> Meliza De Guia </h3>
                        <h4> Web Developer </h4>
                        <p> (about) </p>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
            </div>
        </>
    )
    
}
export default Developers