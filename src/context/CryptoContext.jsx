import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Création du contexte
const CryptoContext = createContext();

// Création du fournisseur de contexte
const CryptoProvider = ({ children }) => {
  const [crypto, setCrypto] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setCrypto(response.data);
      } catch (error) {
        console.error("Error fetching crypto:", error);
      }
    };

    // Appel de la fonction pour récupérer les utilisateurs lors du montage
    fetchCrypto();
  }, []);
  useEffect(() => {
    if (crypto.length !== 0) {
      crypto.agoric.qty = 6765;
      crypto.integritee.qty = 270;
      crypto["drep-new"].qty = 0;
      crypto.zcash.qty = 199;
      crypto.airswap.qty = 0;
      crypto.apwine.qty = 0;
      crypto.fsn.qty = 1806;
      crypto.tether.qty = 0;
      crypto.interlay.qty = 7486;
      crypto.marlin.qty = 398851;
      crypto.modex.qty = 0;
      crypto["pocket-network"].qty = 144045;
      crypto.radix.qty = 102130;
      crypto.agoric.qtyDefi = 0;
      crypto.airswap.qtyDefi = 0;
      crypto.apwine.qtyDefi = 0;
      crypto.integritee.qtyDefi = 0;
      crypto.fsn.qtyDefi = 0;
      crypto.zcash.qtyDefi = 0;
      crypto["drep-new"].qtyDefi = 0;
      crypto.tether.qtyDefi = 0;
      crypto.interlay.qtyDefi = 14972;
      crypto.marlin.qtyDefi = 0;
      crypto.modex.qtyDefi = 0;
      crypto["pocket-network"].qtyDefi = 6000;
      crypto.radix.qtyDefi = 45992;
      Object.keys(crypto).forEach((cryptoKey) => {
        const token = crypto[cryptoKey];
        if (token.qty !== 0) {
          token.totalUSD = Number(token.qty * token.usd);
        } else {
          token.totalUSD = 0;
        }
        if (token.qtyDefi !== 0) {
          token.totalUSDDefi = token.qtyDefi * token.usd;
        } else {
          token.totalUSDDefi = 0;
        }
      });
    }
    if (crypto.length !== 0) {
      setIsDataLoaded(true);
    }
  }, [crypto]);
  return (
    <CryptoContext.Provider value={{ crypto }}>
      {isDataLoaded ? children : <div>Loading...</div>}
    </CryptoContext.Provider>
  );
};

export { CryptoProvider, CryptoContext };
