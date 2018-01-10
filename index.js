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

function destructivelyRemoveLastKitten(kitens){
   kittens.pop()
   return kittens
  }

function destructivelyRemoveFirstKitten(kittens){
  kittens.shift()
   return kittens
}

function appendKitten(name){
  return kittens.slice(1)
}

function prependKitten(name){
  return kittens.slice(0, array.length-1)
}
