# QR Code Generator

This is a simple QR Code Generator built with React. The application allows users to input a link and specify the size of the QR code image, which can then be generated and downloaded.

## Features

- Generate QR codes based on user input.
- Specify the size of the QR code image.
- Download the generated QR code as a PNG file.

## Demo

[https://qr-code-generator-k7ln.onrender.com/]


4. **File Structure:**
  
qr-code-generator/
│
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── qr.css
│   ├── App.js
│   ├── index.js
│   └── components/
│       └── QRCODE.js
└── package.json


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/qrcode-generator.git
   cd qrcode-generator
   
2. **Install dependencies:**   

   ```bash
   npm install

3. **Start the development server:**
    ```bash
    npm start



## Usage

1. Enter the link you want to encode in the **"Enter Link"** input field.
2. Enter the desired image size (e.g., `150` for a 150x150 image) in the **"Enter Image Size"** input field.
3. Click the **"Generate QR Code"** button to generate the QR code.
4. Once the QR code is generated, click the **"Download QR Code"** button to save the image.

## Technologies Used

- React
- HTML
- CSS
- QR Code API ([https://goqr.me/api/](https://goqr.me/api/))



