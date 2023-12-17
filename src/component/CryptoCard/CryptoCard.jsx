import React from "react";
import "./CryptoCard.css";
export default function CryptoCard({ token, cryptoKey, page }) {

  return (
    <div>
      <div className="crypto-card">
        <div className="crypto-card-header">
          <h3>{cryptoKey}</h3>
          <p>{token["qty" + page]} token</p>
        </div>
        <div className="crypto-card-body">
          <p>PU: {token.usd.toFixed(4)} $</p>
        </div>
      </div>
    </div>
  );
}
