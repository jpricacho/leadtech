import { ClassNames } from "@emotion/react";
import React,{useState} from "react";
import '../styles/Developers.css';

const Developers = () => {

    const [name,setName] = useState('your name');
    const [job,setJob] = useState('job title');
    const [about,setAbout] = useState(' check this portfolio ');
    return (
        <>
            <div className="d-flex gap-5" width="100px" height="100vh">
                <div className='cards'>
                    <div className='upper-container'>
                        <div className="image-container">
                            <img src="" alt='' height="100px" width="100px" />
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> ( name ) </h3>
                        <h4> ( job ) </h4>
                        <p> (about) </p>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
                <div className='cards'>
                    <div className='upper-container'>
                        <div className="image-container">
                            <img src="" alt='' height="100px" width="100px" />
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> ( name ) </h3>
                        <h4> ( job ) </h4>
                        <p> (about) </p>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
                <div className='cards'>
                    <div className='upper-container'>
                        <div className="image-container">
                            <img src="" alt='' height="100px" width="100px" />
                        </div>
                    </div>
                    <div className="lower-container">
                        <h3> ( name ) </h3>
                        <h4> ( job ) </h4>
                        <p> (about) </p>
                        <button> Visit Portfolio </button>
                    </div>
                </div>
            </div>
        </>
    )
    
}
export default Developers