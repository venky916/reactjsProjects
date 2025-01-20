import { useState } from 'react';
import QRCode from 'react-qr-code';
import './style.css';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState<string>('');
  const [input, setInput] = useState<string>('');
  function handleGenerateQRCode() {
    setQrCode(input);
    setInput('');
  }
  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
