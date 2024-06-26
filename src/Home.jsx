import { useEffect, useState, useContext } from "react";
import { CryptoContext } from "./context/CryptoContext";
import Chart from "./component/Chart/Chart";
import NavBar from "./component/NavBar/NavBar";
import CryptoList from "./component/CryptoList/CryptoList";
export default function Home() {
  const { crypto } = useContext(CryptoContext);
  const [cryptoTotalUSD, setCryptoTotalUSD] = useState(0);
  useEffect(() => {
    setCryptoTotalUSD(
      Object.values(crypto).reduce((acc, cryptoItem) => {
        const totalUSD = parseFloat(cryptoItem.totalUSD);
        console.log("Total USD for", cryptoItem.name, ":", totalUSD);
        return acc + totalUSD;
      }, 0)
    );
  }, [crypto]);
  console.log(cryptoTotalUSD);
  if (!crypto || crypto.length === 0 || !cryptoTotalUSD) {
    return <div>loading...</div>;
  }

  return (
    <main>
      <NavBar />
      <h1>Suivi Crypto</h1>
      <h2>Valeur portefeuille actuelle</h2>
      <p className="parap-home">{cryptoTotalUSD.toFixed(0)} $</p>
      <Chart allCrypto={crypto} page="totalUSD" />
      <CryptoList crypto={crypto} page="" total={cryptoTotalUSD} />
      <p className="tati">
        Tatiana : 3860 pokt x {crypto["pocket-network"].usd} $ ={" "}
        {(crypto["pocket-network"].usd * 3860).toFixed(2)} $
      </p>
    </main>
  );
}
