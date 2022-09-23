import {useState} from "react";


function FruitField({name}) {

    const [fruitAmount, setFruitAmount] = useState(0);


    function resetFruitAmount() {
        setFruitAmount(0)
    }

    return (
        <>
            <div id="fruitField">
                <h2>

                    {name}
                    <button disabled={fruitAmount === 0}
                            onClick={() => setFruitAmount(fruitAmount - 1)}>-
                    </button>
                    <input type='number' value={fruitAmount}/>
                    <button onClick={() => setFruitAmount(fruitAmount + 1)}>+</button>

                </h2>

            </div>

            <button id="resetButton" className="resetButton" onClick={resetFruitAmount}> Reset</button>
        </>
    )
}

export default FruitField;
