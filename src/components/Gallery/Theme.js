import React, { useState } from 'react';
import '../Gallery/Gallery.css';

const Theme = ({ThemeName, imageLink}) => {
    
  return (
    <div id='gallery-pic'>   
        <img 
            className="picture-gallery"
            id = {imageLink}
            src = {imageLink} 
            alt = {ThemeName}
        />
    </div>
  )
}

export default Theme;