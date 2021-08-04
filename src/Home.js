import { useState } from "react";

const Home = () => {

    const [bin,setBin] = useState('')
    const [dec,setDec] = useState('')

    //Verify if is a binary number
    const isBinary = (bin) => {
        for(var i=0; bin[i] === '0' || bin[i] === '1'; i++){}
        return i === bin.length
    }

    const updateDec = (bin) => {

        let decimal = 0;
        
        for(let i=bin.length-1,potencia=1 ;i>=0; i--,potencia*= 2){
            if (bin[i] === '1'){
                decimal += potencia;
            }
        }

        setDec(decimal)
    }

    const changeBin = (bin) => {
        if(isBinary(bin)){
            setBin(bin)
            updateDec(bin)
        }
    }

    const updateBin = (dec) => {
        
        if(dec === ''){
            setBin('')
            return;
        }
        else if(dec === '0'){
            setBin(0)
            return;
        }
        else if(dec === '1'){
            setBin(1)
            return;
        }

        let binary = '';
        let aux = '';
        let mod;

        do{
            mod = dec % 2;
            aux += mod;
            dec = parseInt(dec / 2);
        }while(dec > 1)
        
        aux += 1;

        for(let i = aux.length-1;i>=0;i--){
            binary += aux[i];
        }

        setBin(binary)
    }

    const changeDec = (dec) => {
        setDec(dec)
        updateBin(dec)
    }

    return (
        <div className="home">
            <form>
                <label>Binary:</label>
                <input
                autoFocus
                type='number'
                value={bin}
                onChange={(e) => 
                    changeBin(e.target.value)
                }
                />
                <label>Decimal:</label>
                <input
                type='number'
                value={dec}
                onChange={(e) => 
                    changeDec(e.target.value)
                }
                />
            </form>
        </div>
    );
}

export default Home;