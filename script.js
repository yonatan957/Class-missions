function filterAndSortEvenNumbers(list){
    return list.sort((a, b)=> a - b).filter(n => !(n%2))
}
function removeDuplicates(list){
    return [...new Set(list)]
}
function capitalizeFirstLetter(longString){
    let list = longString.split(" ")
}
capitalizeFirstLetter("dsfwefvd sgdd43wefv")
