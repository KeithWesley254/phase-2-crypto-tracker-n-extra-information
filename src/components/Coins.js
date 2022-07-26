import React from "react";

function Coins({ coinName, cryptoImg, cryptoSymbol, price, volume }){
    return(
        <div className="coinContainer">
            <div className="coinRow">
                <div className="coin">
                    <img src={cryptoImg} alt="cryptoCurrency"/>
                    <h1>{coinName}</h1>
                    <p className="coinSymbol">{cryptoSymbol}</p>
                </div>
                <div>
                    <p className="coinPrice">${price}</p>
                    <p className="coinVolume">${volume.toLocaleString()}</p>

                </div>
            </div>
        </div>
    )
}

export default Coins;