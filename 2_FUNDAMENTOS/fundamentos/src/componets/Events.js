const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('cliquei');
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
                        console.log('Não deveria existir')
                    }
                }} >aqui tbm</button>
            </div>
        </div>
    )
}

export default Events