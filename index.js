const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKtten(kittens, name){
  kittens.unshift(name)
  return kittens
}