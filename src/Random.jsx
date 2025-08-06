import React from 'react';
import { QRCode } from 'qrcode.react';

export default function Random() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4"> Test </h1>
      <QRCode value="hello world" />
    </div>
  );
}
