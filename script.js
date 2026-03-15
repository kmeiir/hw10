
// Задание 1
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
  { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
  { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
  { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
];
function calculateAveragePages(books) {
  let k=0;
  for (let i=0;i<books.length;i++) {
    k=k+books[i].numberOfPages;
  }
  let sr=k/books.length;
  return sr;
}

console.log(calculateAveragePages(books))


// Задание 2
function repeatString(stroka,n) {
  let result="";
  for (let i = 0; i < n; i++) {
    result=result+stroka;
  }
  return result;}
console.log(repeatString('hello', 3))

  //Задание 3
  function calculateAverage(mass) {
  let k=0;
  for (let i= 0;i<mass.length;i++) {
    k=k+mass[i];
  }
  let sr_mass=k/mass.length;
  return sr_mass;}
console.log(calculateAverage([10, 20, 30, 40, 50, 60]))

 //Задание 4
 function countEvenNumbers(mass2) {
  let shetyi=[];
  for(let i=0;i<mass2.length;i++) {
    if (mass2[i]%2===0) {
      shetyi.push(mass2[i]);
    }}
  return shetyi;}
  console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])) 