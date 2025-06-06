import './PrekiuKrepselis.css'
import simImage from './images/sim.png'
import memoryCard from './images/memory.jpg'
import telephone from './images/telephone.png'
import trashBin from './images/bx-trash.svg.png'

import { useState, useEffect } from 'react'

const PrekiuKrepselis = () => {
    const [countSim, setCountSim] = useState(1)
    const [countMob, setCountMob] = useState(1)
    const [countSD, setCountSD] = useState(2)

    const prices = {
        sim: 2.00,
        mob: 1200.00,
        sd: 35.00
    };

    const [orderPrice, setOrderPrice] = useState(1272.00);

    const [totalSimPrice, setTotalSimPrice] = useState(2.00)
    const [totalMobPrice, setTotalMobPrice] = useState(1200.00)
    const [totalSDPrice, setTotalSDPrice] = useState(70.00)

    const [showSim, setShowSim] = useState(true);
    const [showMob, setShowMob] = useState(true);
    const [showSD, setShowSD] = useState(true);

    function sumSim(amountSim) {
        setCountSim(currentCountSim => {
            const newCount = currentCountSim + amountSim;
            if (newCount < 0) {
                return 0;
            }
            return newCount;
        })
    }

    function sumMob(amountMob) {
        setCountMob(currentCountMob => {
            const newCount = currentCountMob + amountMob;
            if (newCount < 0) {
                return 0;
            }
            return newCount;
        })
    }

    function sumSD(amountSD) {
        setCountSD(currentCountSD => {
            const newCount = currentCountSD + amountSD;
            if (newCount < 0) {
                return 0;
            }
            return newCount;
        })
    }

    useEffect(() => {
        const order =
            prices.sim * countSim +
            prices.mob * countMob +
            prices.sd * countSD;

        setOrderPrice(order);
    }, [countSim, countMob, countSD]);

    useEffect(() => {
        const totalSim =
            prices.sim * countSim;

        setTotalSimPrice(totalSim);
    }, [countSim]);

    useEffect(() => {
        const totalMob =
            prices.mob * countMob;

        setTotalMobPrice(totalMob);
    }, [countMob]);

    useEffect(() => {
        const totalSD =
            prices.sd * countSD;

        setTotalSDPrice(totalSD);
    }, [countSD]);

    const handleDeleteSim = () => {
        setShowSim(false);
        setCountSim(0);
    };

    const handleDeleteMob = () => {
        setShowMob(false);
        setCountMob(0);
    };

    const handleDeleteSD = () => {
        setShowSD(false);
        setCountSD(0);
    };

    const resetCart = () => {
        setCountSim(1);
        setCountMob(1);
        setCountSD(2);

        setShowSim(true);
        setShowMob(true);
        setShowSD(true);
    };

    return (
        <>
            <div className='container'>

                <h1>Prekių krepšelis</h1>

                <div className='items-wrapper-block'>

                    <div className='items-wrapper-header'>
                        <p>Produktas</p>
                        <div className='items-wrapper-header-right'>
                            <p>vieneto kaina</p>
                            <p>Kiekis</p>
                            <p>bendra kaina</p>
                        </div>
                    </div>

                    <div className='items-wrapper-content'>
                        {showSim && (
                            <div className='item'>
                                <div className='item-part'>
                                    <img src={simImage} alt="sim" />
                                    <h2>Sim kortelė</h2>
                                </div>
                                <div className='count-part'>
                                    <p>2.00 €</p>
                                    <div className='btn'>
                                        <button className='btn-minus' onClick={() => sumSim(-1)}>-</button>
                                        <span>{countSim}</span>
                                        <button className='btn-plus' onClick={() => sumSim(1)}>+</button>
                                    </div>
                                    <p>{totalSimPrice.toFixed(2)} €</p>
                                </div>
                                <div className='image'>
                                    <img src={trashBin} alt="trash" onClick={handleDeleteSim} style={{ cursor: 'pointer' }} />
                                </div>
                            </div>
                        )}

                        {showMob && (

                            <div className='item'>
                                <div className='item-part'>
                                    <img src={telephone} alt="telephone" />
                                    <h2>Telefonas</h2>
                                </div>
                                <div className='count-part'>
                                    <p>1200.00 €</p>
                                    <div className='btn'>
                                        <button className='btn-minus' onClick={() => sumMob(-1)}>-</button>
                                        <span>{countMob}</span>
                                        <button className='btn-plus' onClick={() => sumMob(1)}>+</button>
                                    </div>
                                    <p>{totalMobPrice.toFixed(2)} €</p>
                                </div>
                                <div className='image'>
                                    <img src={trashBin} alt="trash" onClick={handleDeleteMob} style={{ cursor: 'pointer' }} />
                                </div>
                            </div>
                        )}

                        {showSD && (
                            <div className='item'>
                                <div className='item-part'>
                                    <img src={memoryCard} alt="memory" />
                                    <h2>SD kortelė (128 GB)</h2>
                                </div>
                                <div className='count-part'>
                                    <p>35.00 €</p>
                                    <div className='btn'>
                                        <button className='btn-minus' onClick={() => sumSD(-1)}>-</button>
                                        <span>{countSD}</span>
                                        <button className='btn-plus' onClick={() => sumSD(1)}>+</button>
                                    </div>
                                    <p>{totalSDPrice.toFixed(2)} €</p>
                                </div>
                                <div className='image'>
                                    <img src={trashBin} alt="trash" onClick={handleDeleteSD} style={{ cursor: 'pointer' }} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='items-wrapper-footer'>
                        <div className='btn'>
                            <button onClick={resetCart}>Atnaujinti</button>
                        </div>
                        <div className='price'>
                            <p>Užsakymo suma: <span>{orderPrice.toFixed(2)} €</span></p>
                        </div>
                    </div>
                </div>




            </div>

        </>
    )
}

export default PrekiuKrepselis