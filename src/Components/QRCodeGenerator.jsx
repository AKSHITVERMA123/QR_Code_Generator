import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './style/style.css';

const QRCodeGenerator = () => {

  const [qrValue, setQrValue] = useState('');
  let web;

  const handleChange = (e) => {
    let input = document.getElementById("website");
    if (!input.value.includes("https://www.") && input.value !== "") {
      setTimeout(() => {
        alert("Input is not valid. It must contains https://www.");
      }, 200);
      document.getElementsByClassName("generate")[0].style.cursor = "not-allowed";
      document.getElementsByClassName("generate")[0].disabled = true;
    }
    else {
      document.getElementsByClassName("generate")[0].style.cursor = "pointer";
      document.getElementsByClassName("generate")[0].disabled = false;
    }
  }

  const handleClick = () => {
    let input = document.getElementById("website");
    let qrcode = document.getElementById("qrcode");
    let p = document.getElementById("paragraph");
    if (input.value !== "") {
      web = input.value;
      p.style.display = "block";
      qrcode.style.display = "inline";
      setQrValue(web);
    }
    else {
      setQrValue("");
      p.style.display = "none";
      qrcode.style.display = "none";
      alert("Input value is Empty ! Please fill This");
    }
  }


  return (
    <div className="div">
      <h1>QR Code Generator for Any Website</h1>
      <span className="website">
        <input type='text' placeholder='Enter any website Name' id="website" onChange={handleChange}></input>
        <button className="generate" onClick={handleClick}>Generate QR Code</button>
      </span>
      <div>
        <p id="paragraph">Scan this QR to visit: <br /><strong>{qrValue}</strong></p>
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
    </div>
  )
}

export default QRCodeGenerator;