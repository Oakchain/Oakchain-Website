import React from 'react'
import './index.css'
import Marquee from "react-fast-marquee";
import { useGetCryptoQuery } from '../../../client/Hook/crypto';
const CryptoUpdate = () => {
    const { crypto, isLoading, error } = useGetCryptoQuery()
    console.log(crypto)
    return (
        <>
            <div className='d-none oak-container-fluid oak-crypto_updates d-md-flex align-items-center justify-content-center'>
                {/* {
                    crypto.map(el =>
                        <div className='px-3'>
                            <p className='oak-crypto_key mb-0'>{el?.name}:
                                <span className='oak-crypto_value mb-0'>{` $${el?.priceUSD}`}</span> </p>

                        </div>
                    )
                } */}
                <Marquee>
                    {
                        crypto.map(el =>

                            <div className='pe-3'>
                                <p className='oak-crypto_key mb-0'>{el?.name}:
                                    <span className='oak-crypto_value mb-0 ps-1'>{` $${el?.priceUSD}`}</span> </p>

                            </div>
                        )
                    }
                </Marquee>
                {/* <div className='px-3'>
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
                </div> */}
            </div>

            <div className='d-block d-md-none px-0 oak-container-fluid pt-0 pb-3 py-md-3 oak-crypto_updates'>
                <Marquee>
                    {
                        crypto.map(el =>

                            <div className='pe-3'>
                                <p className='oak-crypto_key mb-0'>{el?.name}:
                                    <span className='oak-crypto_value mb-0 ps-1'>{` $${el?.priceUSD}`}</span> </p>

                            </div>
                        )
                    }
                </Marquee>
            </div>
        </>

    )
}

export default CryptoUpdate