import React from "react";
import "./CryptoCard.css";
export default function CryptoCard({ token, cryptoKey, page, total }) {
  return (
    <div>
      <div className="crypto-card">
        <div className="crypto-card-header">
          <h3>
            {cryptoKey} -{" "}
            {((token["totalUSD" + page] * 100) / total).toFixed(0)} %
          </h3>
          <p>{token["qty" + page]} token</p>
        </div>
        <div className="crypto-card-body">
          <p>PU: {token.usd.toFixed(4)} $</p>
        </div>
      </div>
    </div>
  );
}
