const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKtten(name){
  kittens.unshift(name)
  return kittens
}