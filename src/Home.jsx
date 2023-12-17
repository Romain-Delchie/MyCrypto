import { useEffect, useState, useContext } from "react";
import { CryptoContext } from "./context/CryptoContext";
import Axios from "axios";
import Temporary from "./Temporary";
import NavBar from "./component/NavBar/NavBar";
export default function Home() {
  const { crypto } = useContext(CryptoContext);
  const [cryptoTotalUSD, setCryptoTotalUSD] = useState(0);
  useEffect(() => {
    setCryptoTotalUSD(
      Object.values(crypto)
        .reduce((acc, cryptoItem) => {
          return acc + cryptoItem.totalUSD;
        }, 0)
        .toFixed(0)
    );
  }, [crypto]);
  if (!crypto || crypto.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <main>
      <NavBar />
      <h1>Suivi Crypto</h1>
      <h2>Valeur portefeuille actuelle</h2>
      <p>{cryptoTotalUSD} $</p>
      <Temporary allCrypto={crypto} page="totalUSD" />
    </main>
  );
}