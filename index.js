// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

    //destructivelyAppendDriver(name)
function destructivelyAppendDriver(name){
    drivers.push(name)
}

    //destructivelyPrependDriver(name)
function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

    //destructivelyRemoveLastDriver()
function destructivelyRemoveLastDriver(name){
    drivers.pop(name)
}

    //destructivelyRemoveFirstDriver()
function destructivelyRemoveFirstDriver(name){
    drivers.shift(name)
}

    //appendDriver(name)
function appendDriver(name){
    return [...drivers, name]
}

    //prependDriver(name)
function prependDriver(name){
    return [name, ...drivers]
}

    //removeLastDriver()
function removeLastDriver(){
    return drivers.slice(0, drivers.length - 1)
}

    //removeFirstDriver()
function removeFirstDriver(){
    return drivers.slice(1)
}