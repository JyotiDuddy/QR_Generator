import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QrCode() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState(undefined);
  function generatorHandler() {
    setQr(text);
  }
  return (
    <div>
      <h1>QrCode</h1>
      <div className="container">
        <input
          placeholder="Enter your URL"
          type="url"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={generatorHandler}>Generator</button>
      </div>
      <p> {qr && <QRCodeCanvas size={200} />}</p>
    </div>
  );
}
export default QrCode;
