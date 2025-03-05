import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
   
    <footer className="footer">
        <div className="footer-content">
            {/* <div className="footer-section about">
                <h5 className="logo-text"><span className='company'>HireWave</span></h5>
                <p>
                    HireWave is a platform where you can find the best jobs and Internships.
                </p><br></br>
                <div className="contact">
                    <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span><br></br><br></br>
                    <span><i className="fas fa-envelope"></i> &nbsp; 2024CopyRight@HireWave.com</span>
                </div><br></br>
            </div> */}
        </div>
        <br></br>
        <h6 className="credit">Designed <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/alok-yadav-906920292"> Alok Yadav</a></h6>
    </footer>
  )
}
export default Footer