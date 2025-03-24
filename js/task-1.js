function slugify(title) {
  let slugTitle = title.toLowerCase();
  slugTitle = slugTitle.split(" ").join("-");
  return slugTitle;

  //   while (slugTitle.includes(" ")) {
  //     slugTitle = slugTitle.replace(" ", "-");
  //     return slugTitle;
  //   }
}

const copyTitel1 = slugify("Arrays for beginners");
console.log(copyTitel1);
const copyTitel2 = slugify("English for developer");
console.log(copyTitel2);
const copyTitel3 = slugify("Ten secrets of JavaScript");
console.log(copyTitel3);
const copyTitel4 = slugify("How to become a JUNIOR developer in TWO WEEKS");
console.log(copyTitel4);
