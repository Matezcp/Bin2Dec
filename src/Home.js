import { useState } from "react";

const Home = () => {

    const [bin,setBin] = useState('')
    const [dec,setDec] = useState('')

    //Verify if is a binary number
    const isBinary = () => {
        for(var i=0; bin[i] === '0' || bin[i] === '1'; i++){}
        return i === bin.length
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isBinary()){
            let decimal = 0;
        
            for(let i=bin.length-1,potencia=1 ;i>=0; i--,potencia*= 2){
                if (bin[i] === '1'){
                    decimal += potencia;
                }
            }

            setDec(decimal)
        }
        else{
            setDec('Not a Binary Number')
        }

    }


    return (
        <div className="home">
            <form onSubmit={handleSubmit}>
                <label>Binary:</label>
                <input
                autoFocus
                type='number'
                value={bin}
                onChange={(e) => setBin(e.target.value)}
                />
                <label>Decimal:</label>
                <input
                disabled
                type='text'
                value={dec}
                onChange={(e) => setDec(e.target.value)}
                />
                <button>Convert</button>
            </form>
        </div>
    );
}

export default Home;