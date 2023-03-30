import React, { Component } from 'react';
import {FaRegCheckCircle, FaComment, FaRegChartBar, FaHeart, FaLeaf} from 'react-icons/fa';


const Posts = () => {
  return (
    <div className='postss'>
      <div className='postss__first'>
        <div className='posts__first__img'>
            </div>
            <div className='posts__first__name'><strong>Bmw</strong><FaRegCheckCircle className='verify'/></div>
            <div className='posts__first__username'>@Bmw <span>10m</span>
            </div>
      </div>
      <div className='postss__details'>
        <div className='postss__details__msg'>
            <p>Provide a valid, navigable address as the href 
            value. If you cannot provide a valid href, but still
            need the element to resemble a link, use a button
            and change it with appropriate styles. Learn more</p>
        </div>
        <div className='postss__details__img'>
            <img width="640px" src='https://images.unsplash.com/photo-1614026480209-cd9934144671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtd3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='Pakistan'/>
        </div>
        <div className='reactions'>
          <span>
             <FaComment className='re'/>93
          </span>
          <span>
            <FaRegChartBar className='re'/>32
          </span>
          <span>
            <FaHeart className='re'/>21
          </span>
          <span>
              <FaLeaf className='re'/>47
          </span>
            
            </div>
      </div>
      <div className='postss__first'>
        <div className='posts__first__img'>
            </div>
            <div className='posts__first__name'><strong>Oper</strong><FaRegCheckCircle className='verify'/></div>
            <div className='posts__first__username'>@oper <span>6m</span>
            </div>
      </div>
      <div className='postss__details'>
        <div className='postss__details__msg'>
            <p>Provide a valid, navigable address as the href 
            value. If you cannot provide a valid href, but still
            need the element to resemble a link, use a button
            and change it with appropriate styles. Learn more</p>
        </div>
        <div className='postss__details__img'>
            <img width='640px' src='https://thumbs.dreamstime.com/b/bmw-i-car-th-shenzhen-hong-kong-macao-international-auto-show-55307303.jpg' alt='Pakistan'/>
        </div>
        <div className='reactions'>
          <span>
             <FaComment className='re'/>93
          </span>
          <span>
            <FaRegChartBar className='re'/>32
          </span>
          <span>
            <FaHeart className='re'/>21
          </span>
          <span>
              <FaLeaf className='re'/>47
          </span>
            
            </div>
      </div>
      <div className='postss__first'>
        <div className='posts__first__img'>
            </div>
            <div className='posts__first__name'><strong>Oper</strong><FaRegCheckCircle className='verify'/></div>
            <div className='posts__first__username'>@oper <span>6m</span>
            </div>
      </div>
      <div className='postss__details'>
        <div className='postss__details__msg'>
            <p>Provide a valid, navigable address as the href 
            value. If you cannot provide a valid href, but still
            need the element to resemble a link, use a button
            and change it with appropriate styles. Learn more</p>
        </div>
        <div className='postss__details__img'>
            <img width='640px' src='https://www.shutterstock.com/image-photo/la-california-february-26-2018-260nw-1035959809.jpg' alt='Pakistan'/>
        </div>
        <div className='reactions'>
          <span>
             <FaComment className='re'/>93
          </span>
          <span>
            <FaRegChartBar className='re'/>32
          </span>
          <span>
            <FaHeart className='re'/>21
          </span>
          <span>
              <FaLeaf className='re'/>47
          </span>
            
            </div>
      </div>
    </div>
  )
}


export default Posts;
