export default function DateFilter(array,step,max){
    let newarray = []
    let counter = 0
    for(let i = 0; i < 40; i++){
        if(i % step == 0) {
            newarray.push(array[i])
            counter++
            if(counter == max){
                return newarray
            }
        }
    }
    return newarray
}