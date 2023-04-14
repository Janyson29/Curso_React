const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('cliquei');
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Também posso renderizar isso</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent} >Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou!')} >clique aqui tbm</button>
                <button onClick={() => {
                    if(true) {
                        console.log('  Isso Não deveria existir')
                    }
                }} >aqui tbm</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events