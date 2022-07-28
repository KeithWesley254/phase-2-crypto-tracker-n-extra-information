import React, { useEffect, useState } from "react";
import Coins from "./Coins";

function CryptoTracker(){
    const [coins, setCoins] = useState([])

    useEffect(()=>{
        //initial loading
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false')
            .then(r => r.json())
            .then(data => setCoins(data))
            

        //update after 120secs
        const myInterval = setInterval(() => {
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false')
            .then(r => r.json())
            .then(data => setCoins(data))
        }, 120000)

        return () => clearInterval(myInterval);
    }, []);
    
    console.log(coins)

    const allCoins = coins.map((coin) => {
        return (
            <div>
                <Coins key={coin.id} 
                coinName={coin.name}
                cryptoImg={coin.image}
                cryptoSymbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                mktCap={coin.market_cap}
                />
            </div>
        )
    })

    return(
        <div className="myTracker">
            <h1 className="mainH"><i>Top 150 Cryptocurrencies</i></h1>
            <h5 className="mainH5"><i>Refreshes every 2 mins</i></h5>
            {allCoins}
        </div>
    )
}

export default CryptoTracker;