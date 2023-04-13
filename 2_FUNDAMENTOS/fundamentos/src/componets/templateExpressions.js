const TemplateExpressions = () => {
    const name = 'Mateus'
    const data = {
        age: 22,
        job: 'programmer',
    }
    return (
        <div>
            <h1>
            Olá {name}, tudo bem?
            </h1>
            <p>What's you job?</p>
            <p>i'm {data.job}</p>
            <p>{4 + 4}</p>
            <p>i'm {data.age} years old</p>
            <p>{console.log('JSX REACT')}</p>
        </div>
    )

}

export default TemplateExpressions