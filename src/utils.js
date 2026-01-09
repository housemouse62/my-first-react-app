export function getImageURL(person, size = "s") {
  return "https://i.imgur.com/" + person.imageID + size + ".jpg";
}
