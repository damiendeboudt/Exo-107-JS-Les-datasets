// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

let age = p1.dataset.age;
p1.dataset.age = (parseInt(p1.dataset.age) + 10).toString()
p1.innerText += p1.dataset.age

let length = p2.dataset.ville.length;
p2.innerText += "| la longueur est de " + length;

let table = p3.dataset.hobbies.split("|");
for (let hobby of table) {
    p3.innerHTML += "<br> I like " + hobby.trim();
}

let bool = p4.dataset.booleen
bool = bool.toLowerCase() === "true"
if (bool) {
    p4.innerHTML += ": la valeur est true"
}
else {
    p4.innerHTML += ": la valeur est false"
}



// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

