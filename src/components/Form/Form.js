import React from 'react';
import '../Form/Form.css';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const navigate = useNavigate();
  const navigateToTheme = () => {
    if(!document.getElementById('myselect').options[document.getElementById('myselect').selectedIndex].value == "" && !document.getElementById("check-empty").value.length == 0 && !document.getElementById('myselect1').options[document.getElementById('myselect1').selectedIndex].value == "")
    {
      navigate('/theme');
    }
  };

  // let patients = [];
  // const addPatient = (ev) => {
  //   ev.preventDefault();
  //   let patient = {
  //     name: document.getElementById("check-empty").value,
  //     roomID: document.getElementById("myselect").value,
  //     dietLevel: document.getElementById("myselect1").value,
  //   }
  //   patients.push(patient);
  // }

  // console.warn('added', {patients});
  // let pre = document.querySelector('#msg pre');
  // pre.textContent = '\n' + JSON.stringify(patients, '\t', 2);

  // document.addEventListener("DOMContentLoaded", () => {document.getElementById('btn2').addEventListener('click', addPatient)});

  return (
    <div>
      <h1 className='hospital-title'>Spectrum Health</h1>
        <h2 className='reg-title'>Patient registration</h2>
         <form className='form1'> 
            <h5 className='reg-title2'>Please fill in the information below.</h5>
            <div className='input-info'>
              <label className='label-name name1'>Patient's full name:</label>
              <input required
                id="check-empty"
                className="input-name"
                type= "text"
                name="name"
              />
              <div className='container'> 
              <div class="row">
                <div class="col-sm-6 col1">
                  <label className='label-name'>Room number:</label>
                  <select id="myselect" required>
                    <option value="">None</option>
                    <option value="1100">1100</option>
                    <option value="1101">1101</option>
                    <option value="1102">1102</option>
                    <option value="1103">1103</option>
                    <option value="1104">1104</option>
                    <option value="1105">1105</option>
                    <option value="1106">1106</option>
                    <option value="1107">1107</option>
                    <option value="1108">1108</option>
                    <option value="1109">1109</option>
                    <option value="1110">1110</option>
                  </select>
                </div>
                <div class="col-sm-6 col1">
                  <label className='label-name'>Food restrictions:</label>
                  <select id="myselect1" required>
                    <option value="">None</option>
                    <option value="level1">Level1</option>
                    <option value="level2">Level2</option>
                    <option value="level3">Level3</option>
                  </select>
                </div>
              </div>
              </div>
            </div>
            <input id="btn1" className='submit-btn' type="submit" value="Next" onClick={navigateToTheme}/> 
        </form>
    </div>
  )
}

export default Form