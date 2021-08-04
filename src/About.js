const About = () => {

    return (
        <div className="about">
            <h2>How to convert Binary to Decimal</h2>
            <p>The decimal number is equal to the sum of each digit of the binary number times their power of 2.</p>
            <span>Example:</span>
            <p id='example'>11001 = 1⋅2<sup>4</sup> + 1⋅2<sup>3</sup> + 0⋅2<sup>2</sup> + 0⋅2<sup>1</sup> + 1⋅2<sup>0</sup> = 25</p>
            <h2>How to convert Decimal to Binary</h2>
            <p>The binary number is equal to the remainders of consecutives divisions of the decimal number by 2 until the quotient is equal to 1.</p>
            <span>Example:</span>
            <p id='example'></p>
        </div>  
    );
}

export default About;