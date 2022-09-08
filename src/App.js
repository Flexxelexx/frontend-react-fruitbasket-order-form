import React from 'react';
import './App.css';


function App() {

    const [banaanAmount, setBanaanAmount] = React.useState(0);
    const [aardbeiAmount, setAardbeiAmount] = React.useState(0);
    const [appelAmount, setAppelAmount] = React.useState(0);
    const [kiwiAmount, setKiwiAmount] = React.useState(0);

    // function onClickPlus() {
    //     setFruitAmount(fruitAmount+1)
    // }
    //
    // function onClickMin() {
    //     setFruitAmount(fruitAmount-1)
    // }

    function resetFruitAmount() {
        setBanaanAmount(0)
        setAardbeiAmount(0)
        setAppelAmount(0)
        setKiwiAmount(0)
    }

    return (
        <>

            <div id="outer-container">

                <div id="inner-container">

                    <h1>Fruitmand bezorgservice</h1>

                    <section className="fruit">

                                <h2>🍌 Bananen</h2>

                                        <button disabled={banaanAmount === 0} onClick={() => setBanaanAmount (banaanAmount-1)}>-</button>
                                        <input type='number' value={banaanAmount}/>
                                        <button onClick={() => setBanaanAmount (banaanAmount+1)}>+</button>

                                <h2>🍓 Aardbeien</h2>

                                        <button disabled={aardbeiAmount === 0} onClick={() => setAardbeiAmount (aardbeiAmount-1)}>-</button>
                                        <input type='number' value={aardbeiAmount}/>
                                        <button onClick={() => setAardbeiAmount (aardbeiAmount+1)}>+</button>

                                <h2>🍏 Appels</h2>

                                        <button disabled={appelAmount === 0} onClick={() => setAppelAmount (appelAmount-1)}>-</button>
                                        <input type='number' value={appelAmount}/>
                                        <button onClick={() => setAppelAmount (appelAmount+1)}>+</button>

                                <h2>🥝 Kiwi's</h2>

                                        <button disabled={kiwiAmount === 0} onClick={() => setKiwiAmount (kiwiAmount-1)}>-</button>
                                        <input type='number' value={kiwiAmount}/>
                                        <button onClick={() => setKiwiAmount (kiwiAmount+1)}>+</button>


                                    <button onClick={resetFruitAmount}> Reset </button>
                    </section>
                    
                    <form>

                        <label>Voornaam</label>
                        <input type="text"/>

                        <label>Achternaam</label>
                        <input type="text"/>

                        <label>Leeftijd</label>
                        <input type="number"/>

                        <label>Postcode</label>
                        <input type="text"/>


                        Bezorgfrequentie
                        <select name="bezorgfrequentie">

                            <option value="iedere week">Iedere week</option>
                            <option value="iedere week">Om de week</option>
                            <option value="iedere week">Iedere maand</option>

                        </select>

                        <input type="radio"/> Overdag
                        <input type="radio"/> 's Avonds


                        <textarea name="opmerkingen" id="" cols="30" rows="10"></textarea>

                        <input type="checkbox"/> Ik ga akkoord met de voorwaarden

                        <button type="submit">Verzend</button>
                    </form>


                </div>
            </div>
        </>
    );
}

export default App;
