export const getTime = () => {
    let date = new Date();
    const year = date.getFullYear(); 
    const month = date.getMonth() + 1; 
    const day = date.getDate(); 
    const hour = date.getHours(); 
    const minutes = date.getMinutes(); 
    return `${day}.${month}.${year} ${hour}:${minutes}`
}