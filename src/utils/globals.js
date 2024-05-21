function transformarData(dataString){
    const data = new Date(dataString)

    const dia = data.getDay().toString().padStart(2, "0")
    const mes = data.getMonth().toString().padStart(2, "0")
    const ano = data.getFullYear().toString()

    return `${dia}/${mes}/${ano}`
}

export default transformarData