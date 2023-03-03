export function getAnimal(animal) {
  if (animal === "cats") {
    return "I totally love cats!";
  } else if (animal === "dogs") {
    return "I like dogs!";
  } else if (animal === undefined) {
    return "I do not like animals at all!";
  }
  return `I like ${animal}`;
}
