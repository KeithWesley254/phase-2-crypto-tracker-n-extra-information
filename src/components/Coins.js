import React from "react";

function Coins({ coinName, cryptoImg, cryptoSymbol, price, volume, priceChange, mktCap }){
    return(
        <div className="coinContainer">
            <div className="coinRow">
                <div className="coin">
                    <img src={cryptoImg} alt="cryptoCurrency"/>
                    <h1>{coinName}</h1>
                    <p className="coinSymbol">{cryptoSymbol}</p>
                </div>
                <div className="coinInfo">
                    <p className="coinPrice">Price: ${price}</p>
                    <p className="coinVolume">Volume: ${volume.toLocaleString()}</p>
                    {priceChange < 0  
                    ? (
                        <p className="coinP Red">
                            {priceChange.toFixed(2)}%
                        </p>
                    )
                    :   <p className="coinP Green">
                        {priceChange.toFixed(2)}%
                        </p>
                    }
                    <p className="coinMktCap">
                        Mkt Cap: ${mktCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coins;