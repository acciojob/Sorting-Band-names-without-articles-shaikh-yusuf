let regexp = /\bthe\b|\ban\b|\ba\b/gi


let arr = [
  "The Virupaksha Temple", // "Virupaksha Temple"
  "a Victoria Memorial", //"Victoria Memorial"
  "an Tajmahal", // "Tajmahal"
];


let articleLessArray = [];


for (let i = 0; i < arr.length; i++) {
  let articleLessItem = arr[i].replace(regexp, "").trim();
  articleLessItem = articleLessItem.replace(/  /g, " "); // remove two spaces with a single space
  articleLessArray.push(articleLessItem);
 
}

console.log(articleLessArray.sort());