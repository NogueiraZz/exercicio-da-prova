//Não está 100% certo mas ta no caminho
function exe1(){
    let post = []
    let titulo = []
    let descricao = []
    let curtida = []
    let usuario = []
    for(let i=0; i<=10;i++){
        usuario[i]= prompt(`Informe o usuario`)
    }
    for(let i=0; i<=10;i++){
        post[i]= prompt(`Informe o numero do post`)
    }
    for(let i=0; i<=10;i++){
        titulo[i]= prompt(`Informe o titulo do post`)
    }
    for(let i=0; i<=10;i++){
        descricao[i]= prompt(`Informe a descrição do post`)
    }
    for(let i=0; i<=10;i++){
        curtida[i]= Number(prompt(`informe o numero de curtidas do post ${[i]}`))
    }
    usuario.push(prompt(`o usuário é ${usuario}`))
    post.push(prompt(`o post é ${post}`))
    titulo.push(prompt(`o titulo é ${titulo}`))
    descricao.push(prompt(`a descrição é ${descrição}`))
    curtida.push(prompt(`o numero de curtidas é é ${curtida}`))
    }