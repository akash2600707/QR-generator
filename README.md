QR Code Generator and Scanner
This is a simple QR code generator and scanner web application built using Node.js and Express. It provides endpoints for generating QR codes from text and scanning QR codes from images.

Features
Generate QR Code: Access the /generateQR endpoint by providing a text query parameter to generate a QR code image.

Scan QR Code: Use the /scanQR endpoint with a POST request, providing the QR code image data, width, and height to extract information from the QR code.

Usage
Clone the repository:

bash
git clone https://github.com/your-username/qr-generator.git

Install dependencies:

bash
npm install

Run the application:

bash
npm start

Open your browser and navigate to http://localhost:3000 to access the QR code generator.

Endpoints
1. Generate QR Code
Endpoint: /generateQR
Method: GET
Query Parameter:
text (required): The text to be encoded into the QR code.
Response: Returns a data URL of the generated QR code image.
Example:
bash
curl http://localhost:3000/generateQR?text=Hello%20World

Dependencies
Express: Web application framework for Node.js.
qrcode: QR code generator.
jsqr: JavaScript QR code scanner.
Feel free to contribute and improve this QR code generator and scanner!
