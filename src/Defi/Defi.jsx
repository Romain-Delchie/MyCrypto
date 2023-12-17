import { useContext, useEffect, useState } from "react";
import { CryptoContext } from "../context/CryptoContext";
import NavBar from "../component/NavBar/NavBar";
import Temporary from "../Temporary";
import "./Defi.css";

export default function Defi() {
  const { crypto } = useContext(CryptoContext);
  const [cryptoTotalUSD, setCryptoTotalUSD] = useState("0");
  console.log(typeof cryptoTotalUSD);
  useEffect(() => {
    setCryptoTotalUSD(
      Object.values(crypto)
        .reduce((acc, cryptoItem) => {
          return acc + cryptoItem.totalUSDDefi;
        }, 0)
        .toFixed(0)
    );
  }, [crypto]);
  if (!cryptoTotalUSD || !crypto) {
    return <div>loading...</div>;
  } else {
    return (
      <main>
        <NavBar />
        <h1>Défi</h1>
        <div className="defi-container">
          <div className="defi-item">
            <h2>Mise initiale</h2>
            <p>2200 $</p>
          </div>
          <div className="defi-item">
            <h2>Valeur actuelle</h2>
            <p>{cryptoTotalUSD} $</p>
          </div>
          <div
            className={
              cryptoTotalUSD - 2200 < 0
                ? "defi-result defi-result-red"
                : "defi-result defi-result-green"
            }
          >
            <h2>Résultat</h2>
            <div className="result-item">
              {cryptoTotalUSD - 2200 < 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="defi-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="defi-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              )}

              <p>{cryptoTotalUSD - 2200} $</p>
            </div>
          </div>
        </div>
        <Temporary allCrypto={crypto} page="totalUSDDefi" />
      </main>
    );
  }
}
