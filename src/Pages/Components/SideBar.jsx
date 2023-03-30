import React from 'react'
import { Link } from 'react-router-dom'
import {FaTwitter, FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaClipboardList, FaUserAlt, FaMehBlank} from "react-icons/fa"
import Avater from './img/avatar.svg'
import hamb from './img/hamb.svg'
import Profile from './Links/Profile'

function SideBar() {
  return (
    <div className='sidebar'>


      <ul className="listSide">
        <Link className='icons logo' to='/'> <li><a href=''><Link to={'/'}><FaTwitter className= 'icons logo'/></Link></a></li></Link>
       
        <li>
          <a href=''><Link to={'/Profile'} element= {<Profile/>}><FaHome className= 'icons'/> Home</Link></a>
        </li>
        <li><a href=''><Link to={'/'}><FaHashtag className= 'icons'/> Explore</Link></a></li>
        <li><a href=''><Link to={'/'}><FaRegBell className= 'icons'/> Notifications</Link></a></li>
        <li><a href=''><Link to={'/'}><FaRegEnvelope className= 'icons'/> Messages</Link></a></li>
        <li><a href=''><Link to={'/'}><FaRegBookmark className= 'icons'/> Bookmarks</Link></a></li>
        <li><a href=''><Link to={'/'}><FaClipboardList className= 'icons'/> Lists</Link></a></li>
        <li><a href=''><Link to={'/'}><FaUserAlt className= 'icons'/> Profile</Link></a></li>
        <li><a href=''><Link to={'/'}><FaMehBlank className= 'icons'/></Link> More</a></li>
      

      <button className='SideButton'>Tweet</button>
 </ul>
      <Link to={"/"} style={
        {
          marginTop:"65px",
          textDecoration:"none",
          display:"flex",
          justifyContent:"space-between",
        }
      }>
        <img style={{marginRight:"15px", display:"inline-block", width: "50px",
height: "50px"}} src={Avater} alt='avatar'/>
        <span style={{
          display:"inline-block", marginTop:"6px"
        }}>
          <span style={{
            fontFamily: 'sans-serif',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHight: "21px",
            color:"black",
            display:"block",
          }}>Bobur</span>
          <span style={{
            display:"block",
            color:"gray"
          }}>@bobur_mavlonov</span>``
        </span>
        <img style={{
          marginLeft:"10px",
          width: "17px",
          height: "4px",
        }} src={hamb} alt='hamb '/>

       </Link>
    </div>
   
  )
}

export default SideBar