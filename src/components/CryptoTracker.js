import React, { useEffect, useState } from "react";
import Coins from "./Coins";

function CryptoTracker(){
    const[coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false')
        .then(r => r.json())
        .then(data => setCoins(data))
    }, []);

    function handleChange(e){
        setSearch(e.target.value)
    }

    const allCoins = coins.map((coin) => {
        return (
            <Coins key={coin.id} 
            coinName={coin.name}
            cryptoImg={coin.image}
            cryptoSymbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            mktCap={coin.market_cap}
            />
        )
    })

    return(
        <div className="myTracker">
            {allCoins}
        </div>
    )
}

export default CryptoTracker;