function filterAndSortEvenNumbers(list){
    return list.sort((a, b)=> a - b).filter(n => !(n%2))
}
function removeDuplicates(list){
}
function capitalizeFirstLetter(longString){
    return longString
            .split(" ")
            .map(e => (e[e.length-1]==".") ? e[0].toUpperCase() + e.slice(1) : e)
            .join(" ")
}
console.log(capitalizeFirstLetter(" fweff. rewgafsdd. sdfewf grfger"))