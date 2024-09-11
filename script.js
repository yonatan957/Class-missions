function filterAndSortEvenNumbers(list){
    return list.sort((a, b)=> a - b).filter(n => !(n%2))
}
function removeDuplicates(list){
    let newList = []
    for (let num of list){
        if (!newList.includes(num)){
            newList.push(num)
        }
    }
    return newList
}
function capitalizeFirstLetter(longString){
    return longString
            .split(" ")
            .map(e => (e[e.length-1]==".") ? e[0].toUpperCase() + e.slice(1) : e)
            .join(" ")
}
function addTask(task){
    let listOfTasks = localStorage.getItem("tasks")
    listOfTasks = listOfTasks ? JSON.parse(listOfTasks): []
    listOfTasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(listOfTasks))
    console.log(listOfTasks)
}
function loadTasks(){
    return JSON.parse(localStorage.getItem("tasks"))
}
function removeTask(id){    
    let listOfTasks = JSON.parse(localStorage.getItem("tasks"))
    localStorage.setItem("tasks", JSON.stringify(listOfTasks.filter(t => t.id !== id)))
}

