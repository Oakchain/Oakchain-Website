import React from 'react'
import './index.css'

const CryptoUpdate = () => {
    return (
        <div className='d-none ak-container-fluid oak-crypto_updates d-flex align-items-center justify-content-center'>
            <div className='px-3'>
                <p className='oak-crypto_key mb-0'>Cryptos:
                    <span className='oak-crypto_value mb-0'> 24,029</span> </p>

            </div>
            <div className='px-3'>
                <p className='oak-crypto_key mb-0'> Market Cap:
                    <span className='oak-crypto_value mb-0'> $1,142,222,870,653</span>
                </p>
            </div>
            <div className='px-3'>
                <p className='oak-crypto_key mb-0'>24h Vol:
                    <span className='oak-crypto_value mb-0'> $31,500,694,981</span>
                </p>
            </div>
            <div className='px-3'>
                <p className='oak-crypto_key mb-0'>Dominance:
                    <span className='oak-crypto_value mb-0'> BTC: 46.9%</span>
                </p>
            </div>
            <div className='px-3'>
                <p className='oak-crypto_key mb-0'>ETH:
                    <span className='oak-crypto_value mb-0'> 19.4%</span>
                </p>
            </div>
            <div className='px-3'>
                <p className='oak-crypto_key mb-0'>ETH Gas:
                    <span className='oak-crypto_value mb-0'> 57 Gwei</span>
                </p>
            </div>
        </div>
    )
}

export default CryptoUpdate