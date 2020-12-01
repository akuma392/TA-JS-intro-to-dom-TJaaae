let ul = document.querySelector("ul");

// // books.forEach((arr) => {
// //     let li = document.createElement("li");
// //     let img = document.createElement("img");
// //     img.src = arr.image;
// //     img.width = "100";
// //     let h3 = document.createElement("h3");
// //     h3.innerText = arr.title;
// //     h3.setAttribute("style", "margin:10px 0;");
// //     let p = document.createElement("p");
// //     p.innerText = `Author: ${arr.author}`;
// //     let a = document.createElement("a");
// //     a.href = arr.website;
// //     let btn = document.createElement("button");
// //     btn.innerText = "Buy Now";
// //     btn.style.backgroundColor = "#377e80";
// //     a.append(btn);
// //     li.append(img, h3, p, a);
// //     ul.append(li);
// //   });

let everyone = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

everyone.forEach((elm) => {
  let li = document.createElement("li");
  li.classList.add("box");
  let img = document.createElement("img");
  img.classList.add("card");
  img.src = elm.image;
  let h2 = document.createElement("h2");
  h2.innerText = elm.name;
  h2.classList.add("card");
  let p = document.createElement("p");
  p.innerText = elm.description;
  let a = document.createElement("a");
  a.href = elm.wikiLink;
  let btn = document.createElement("button");
  btn.innerText = "Learn More!";
  a.append(btn);

  li.append(img, h2, p, a);
  ul.append(li);
});
