import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const callCoinpaprikaAPI = () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  };
  useEffect(callCoinpaprikaAPI, []);
  return (
    <div>
      <h1>Coins</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
