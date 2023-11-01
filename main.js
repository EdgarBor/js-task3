let person = ["anar", "vasif", "emil", "nurlan", "amil"];

let addName = prompt("Zehmet olmasa ad elave edin: ");

let index = person.indexOf(addName);

if (index !== -1) {
    alert(addName + " adi " + index + "-ci indeksde var");
} else {
    alert(addName + " bu ad mevcud deyil");
}