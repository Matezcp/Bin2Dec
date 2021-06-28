import { useState } from "react";

const Home = () => {

    const [bin,setBin] = useState('')
    const [dec,setDec] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        let decimal = 0;
        
        for(let i=bin.length-1,potencia=1 ;i>=0; i--,potencia*= 2){
            if (bin[i] == 1){
                decimal += potencia;
            }
        }

        setDec(decimal)
        

    }


    return (
        <div className="home">
            <form onSubmit={handleSubmit}>
                <label>Binary:</label>
                <input
                type='number'
                value={bin}
                onChange={(e) => setBin(e.target.value)}
                />
                <label>Decimal:</label>
                <input
                disabled
                type='number'
                value={dec}
                onChange={(e) => setDec(e.target.value)}
                />
                <button>Convert</button>
            </form>
        </div>
    );
}

export default Home;