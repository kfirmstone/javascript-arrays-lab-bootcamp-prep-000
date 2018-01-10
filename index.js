const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){

  kittens.push(name)
  
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  
  return kittens
}

function destructivelyRemoveLastKitten(kittens){
   kittens.pop()
   return kittens
  }

function destructivelyRemoveFirstKitten(kittens){
  kittens.shift()
   return kittens
}

function removeFirstKitten(kittens){
  return kittens.slice(1)
}

function removeLastKitten(kittens){
  return kittens.slice(0, kittens.length-1)
}

