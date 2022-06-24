import React, { useEffect, useState } from 'react';
import Theme from './Theme';
import '../Gallery/Gallery.css';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  
  const [images, setImages] = useState([]);
  const [imagesNames, setImagesNames] = useState([]);

  useEffect(() => {
    fetch("https://gbm1wdp0jl.execute-api.us-east-1.amazonaws.com/api/get_themes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
        setImagesNames(data.ThemeName);
      })
  }, []);

  const [move, setMove] = useState(false);

  const navigate = useNavigate();
  const navigateToEnd = () => {
    if(move)
    {
      navigate('/done');
    }
    else {
      alert("You didn't choose a theme!");
    }
  };

  function handleClick(ID) { //creates border
    setMove(true);
    var childImages = document.getElementById("form-pic").children;
    var i;

    // clear any other borders that might be set
    for ( i = 0; i < childImages.length; i++ ) {
      childImages[i].style.border = '';
    }

    document.getElementById(ID).style.border="5px solid orange";
  }

  return (
    <div>
      <form className='form2' >
        <h5 className='reg-title3'>Turn the screen around and let the patient choose a theme: </h5>
        <div className='form-pic row' id="form-pic" onClick={()=> handleClick("picture-gallery")}>
          {images.length > 0 && images.map((theme) => <Theme {... theme} />) } 
          
        </div>
        <input className="btn2" type="submit" value="Submit" onClick={navigateToEnd}/>
      </form>
    </div>
  )
}

export default Gallery;