import { React, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './style/style.css';

const QRCodeGenerator = () => {
    
  const [qrValue, setQrValue] = useState('');
  let web;

  const handleClick = () => {
    let input=document.getElementById("website");
    let qrcode = document.getElementById("qrcode");
    if(input.value!==""){
    web=input.value;
    qrcode.style.display="inline";
    setQrValue(web);
    }
    else{
      setQrValue("");
      qrcode.style.display="none";
      alert("Input value is Empty ! Please fill This");
    }
  }

  const handleChange = (e) => {
     let input=document.getElementById("website");
     if(!input.value.includes("https://www.") && input.value!=="")
     {
      setTimeout(() => {
        alert("Input is not valid. It must contains https://www.");
      }, 200);
      document.getElementsByClassName("generate")[0].style.cursor="not-allowed";
      document.getElementsByClassName("generate")[0].disabled=true;
     }
     else{
        document.getElementsByClassName("generate")[0].style.cursor="pointer";
       document.getElementsByClassName("generate")[0].disabled=false;
     }
  }

    return (
    <div className="div">
      <h1>QR Code Generator for Any Website</h1>
      <span style={{display: "flex", justifyContent: "center", gap: "40px"}}>
        <input type='text' placeholder='Enter any website Name :' id="website" onChange={handleChange}></input>
        <button className="generate" onClick={handleClick}>Generate QR Code</button>
        </span>
      <div>
      <QRCodeCanvas
      id={"qrcode"}
        value={qrValue}
        size={256}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
        includeMargin={true}
      />
      </div>
      <p>Scan this QR to visit: <br /><strong>{qrValue}</strong></p>            
    </div>
    )
}

export default QRCodeGenerator;