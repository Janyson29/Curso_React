const Challenge = () => {
    const num1 = 10;
    const num2 = 20;  
    const soma = num1 + num2;
    return (
        <div>
            <h1>O primeiro número é: {num1}</h1>
            <h1>o segundo número é: {num2}</h1>
            <h1>a soma de {num1} + {num2} é: </h1>
            <button onClick={() => console.log(soma)} >clique aqui</button>
        </div>
    )
 }

export default Challenge;