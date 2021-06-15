
function handleAPIError(err: any, customErrorFunc: any){
    if (err.message.toLocaleLowerCase() == 'network error'){
        alert(
            'O backend ainda não foi iniciado. Por favor, aguarde alguns segundos.'
        )
    } else {
        customErrorFunc()
    }
}


export { handleAPIError }