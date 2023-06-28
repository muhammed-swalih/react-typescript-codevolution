type StatusProps = {
    status : 'loading' | 'fetched' | 'error'
}

export const Status = (props : StatusProps ) => {
   
    let statusMessage = props.status;
    if(statusMessage === 'loading') { 
        statusMessage = 'loading'
    }else if(statusMessage === 'error'){
        statusMessage = 'error'
    }else if(statusMessage === 'fetched'){
        statusMessage = 'fetched'
    }
    return (
        <div>
            <h1>status - {statusMessage}</h1>
        </div>
    )
}