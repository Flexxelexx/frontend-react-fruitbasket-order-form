import React from 'react';
import './App.css';

import FruitField from "./components/Fruit";



function App() {

    return (
        <>

            <div id="outer-container">

                <div id="inner-container">

                    <h1>Fruitmand bezorgservice</h1>

                    <section className="fruit">


                        <FruitField
                            name={"🍓Aardbeien"}
                        />

                        <FruitField
                            name={"🍌Banaan"}
                        />

                        <FruitField
                            name={"🍏Appels"}
                        />

                        <FruitField
                            name={"🥝Kiwi's"}
                        />

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
                        <select id="bezorgFreq" name="bezorgfrequentie">

                            <option value="iedere week">Iedere week</option>
                            <option value="iedere week">Om de week</option>
                            <option value="iedere week">Iedere maand</option>

                        </select>

                        <div id="dagdeel">
                            <input id="overdag" name="radio" type="radio"/> Overdag
                            <input id="avond" name="radio" type="radio"/> 's Avonds
                        </div>

                        Opmerking
                        <textarea title="Opmerkingen" name="opmerkingen" id="" cols="30" rows="10">  </textarea>
                    </form>

                    <div id="akkoordCheck">
                        <input type="checkbox"/> Ik ga akkoord met de voorwaarden
                    </div>
                    <button type="submit">Verzend</button>

                </div>
            </div>
        </>
    );
}

export default App;
