export const isArrayEmpty = (arr) => {
    if(arr !== undefined && arr !== null && arr.length > 0)
    return false
    else return true
}


export const dumpLogs = (message) =>{
    console.log(message);
    // Logger
}


// export {isArrayEmpty,dumpLogs}