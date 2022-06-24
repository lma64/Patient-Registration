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

  return (
    <div>
      <form className='form2'>
        <h5 className='reg-title3'>Turn the screen around and let the patient choose a theme: </h5>
        <div className='form-pic row' id="form-pic" onClick={() => setMove(true)}>
          {images.length > 0 && images.map((theme) => <Theme {... theme}/>) } 
          
        </div>
        <input className="btn2" type="submit" value="Submit" onClick={navigateToEnd}/>
      </form>
    </div>
  )
}

export default Gallery;