const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKtten(name){

  kittens.push(name)
  
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.shift(name)
  
  return kittens
}

