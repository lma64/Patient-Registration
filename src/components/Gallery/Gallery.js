import React, { useState } from 'react';
import '../Gallery/Gallery.css';
import alice from "../../assets/Pictures/Aliceinwonderland.webp";
import frozen from "../../assets/Pictures/Frozen2.jpg";
import incredibles from "../../assets/Pictures/The_Incredibles.jpg";
import toystory from "../../assets/Pictures/Toystory4.jpg";
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
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
        <form className='form2'>
          <h5 className='reg-title3'>Turn the screen around and let the patient choose a theme:</h5>
          <div className='form-pic' id="form-pic">
            <img className="picture-gallery" id="1" src={alice} alt="Alice In Wonderland" onClick={()=> handleClick(1)}/>
            <img className="picture-gallery" id="2" src={incredibles} alt="The Incredibles" onClick={()=> handleClick(2)}/>
            <img className="picture-gallery" id="3" src={frozen} alt="Frozen 2" onClick={()=> handleClick(3)}/>
            <img className="picture-gallery" id="4" src={toystory} alt="Toystory 4" onClick={()=> handleClick(4)}/>
          </div>
          <input className="btn2" type="submit" value="Submit" onClick={navigateToEnd}/> 
        </form>
    </div>
  )
}

export default Gallery