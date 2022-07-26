import React, { useEffect, useState } from "react";
import Coins from "./Coins";

function CryptoTracker(){
    const[coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false')
        .then(r => r.json())
        .then(data => setCoins(data))
        .catch(err => alert('Something Went Wrong'))
    }, []);

    function handleChange(e){
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => {
        coin.name.toLowerCase().includes(search.toLowerCase())
    })

    console.log(coins)

    return(
        <div className="myTracker">
            <div className="mySearch">
                <h1 className="someMsg">Search for a currency...</h1>
                <form>
                    <input onChange={handleChange} type="text" placeholder="Search" className="coinInput"/>
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coins key={coin.id}/>
                )
            })}
        </div>
    )
}

export default CryptoTracker