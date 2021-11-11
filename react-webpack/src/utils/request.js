function concat(arr1, arr2) {
  return [...arr1, ...arr2]
}

function abc(C) { return C }

@abc
class Dog {
  run() { console.log('dog run')}
}

export { concat, Dog }
