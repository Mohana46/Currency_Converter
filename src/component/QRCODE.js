import React, { useState } from 'react';
import './assets/css/qr.css';

export const QRCODE = () => {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrData, setQRData] = useState('');
  const [size, setSize] = useState(''); 

  async function generate() {
    setLoading(true);
    
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch (error) {
      console.error("Error Generating QR code", error);
    } finally {
      setLoading(false);
    }
  }

  function download() {
    fetch(img).then((response)=> response.blob()).then((blob)=>{
        const link=document.createElement('a');
        link.href=URL.createObjectURL(blob);
        link.download='qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
    .catch((error)=>{
        console.error("Error Generating QR code", error);

    })
  }

  return (
    <div className='app-container'>
      <h1>QR Code Generator</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} alt="QR Code" />}
      <label htmlFor="dataInput">Enter Link</label>
      <input
        type="text"
        value={qrData}
        id='dataInput'
        placeholder='Enter the Link'
        onChange={(e) => setQRData(e.target.value)}
      />
  
      <label htmlFor="sizeInput">Enter Image Size</label>
      <input
        type="text"
        value={size}
        id='sizeInput'
        placeholder='Enter Image Size'
        onChange={(e) => setSize(e.target.value)}
      />
      <button className='generate-btn' disabled={loading} onClick={generate}>Generate QR Code</button>
      <button className='download-btn' disabled={loading || !img} onClick={download}>Download QR Code</button>

    </div>
  );
};
