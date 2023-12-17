import CryptoCard from "../CryptoCard/CryptoCard";
import "./CryptoList.css";

export default function CryptoList({ crypto, page }) {
  return (
    <div className="crypto-list">
      {Object.keys(crypto).map((cryptoKey) => {
        const token = crypto[cryptoKey];
        if (token["qty" + page] !== 0) {
          return (
            <CryptoCard
              token={token}
              cryptoKey={cryptoKey}
              page={page}
              key={cryptoKey}
            />
          );
        }
      })}
    </div>
  );
}
