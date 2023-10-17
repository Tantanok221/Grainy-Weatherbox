export default function mapData(arrayx,arrayy,step){
    let newarray = {}
    for(let i = 0; i < step ;i++){
        newarray[i] = {date: arrayx[i], values: arrayy[i]}
    }
    return newarray
}
// Abandoned for now