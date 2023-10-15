export default function DayFilter(array){
    let newarray = []
    for(let i = 0; i < 40; i++){
        if(i % 8 == 0) newarray.push(array[i])
    }
    return newarray
}