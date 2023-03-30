import React from 'react'
import { Link } from 'react-router-dom'
import Avater from '../img/avatar.svg'
import { FaCalendar, FaRegImage, FaRegListAlt, FaRegSmile, } from 'react-icons/fa';
import TrendsKeyword from './TrendsKeywords';

function HomeBetween() {
  return (
    <div className='container'>
      <div className='bettwenHomeHeader1'>
        <div className='bettwenHomeHeader'>
          <h2>Home</h2>
        </div>

        <div className='userDiv'>
          <div>
            <div style={{
              display:"flex"
            }}>
              <img src={Avater} alt='img'/>
  
                <input className='sideInp' placeholder={"What’s happening"} type={'text'}/>
            </div>

            <div>

              <ul style={{
                marginTop:"35px",
                display:"flex",
                alignItems:"center",
                gap:"20px"
              }}>
                <li><Link><FaRegImage className='ic'/></Link></li>
                <li><Link><FaRegListAlt className='ic'/></Link></li>
                <li><Link><FaRegSmile className='ic'/></Link></li>
                <li><Link><FaCalendar className='ic'/></Link></li>
                <li><Link></Link></li>
              </ul>
            </div>
          </div>
          <button className='buttonSide'>
            Tweet
          </button>

        </div>

        <div>
              <div style={{
                display:"flex"
               }}>
               
                <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwA…G03yF0c0jbI/mP0Qjtx5/B/rnRnoMpy91AAAAAElFTkSuQmCC'} alt=''/>
              </div>
            </div>
            

      </div>
      <TrendsKeyword/>
    </div>
    
  )
}


export default HomeBetween