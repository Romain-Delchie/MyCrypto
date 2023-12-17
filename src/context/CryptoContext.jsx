import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import "dotenv/config";

// Création du contexte
const CryptoContext = createContext();

// Création du fournisseur de contexte
const CryptoProvider = ({ children }) => {
  const [crypto, setCrypto] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  console.log(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    // Fonction pour récupérer les utilisateurs depuis l'API
    const fetchCrypto = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_KEY);
        setCrypto(response.data);
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error fetching crypto:", error);
      }
    };

    // Appel de la fonction pour récupérer les utilisateurs lors du montage
    fetchCrypto();
  }, []);
  useEffect(() => {
    if (crypto.length !== 0) {
      crypto.agoric.qty = 0;
      crypto.airswap.qty = 58590;
      crypto.apwine.qty = 0;
      crypto.fsn.qty = 1806;
      crypto.tether.qty = 4192;
      crypto.interlay.qty = 7486;
      crypto.marlin.qty = 398851;
      crypto.modex.qty = 0;
      crypto["pocket-network"].qty = 47288;
      crypto.radix.qty = 138664;
      crypto.agoric.qtyDefi = 0;
      crypto.airswap.qtyDefi = 0;
      crypto.apwine.qtyDefi = 0;
      crypto.fsn.qtyDefi = 0;
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
  }, [crypto]);
  return (
    <CryptoContext.Provider value={{ crypto }}>
      {isDataLoaded ? children : <div>Loading...</div>}
    </CryptoContext.Provider>
  );
};

export { CryptoProvider, CryptoContext };
