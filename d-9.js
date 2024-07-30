//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function number(m,n) { 
    if (m>n) return m
else if (m<n)  return n
else return 0
} number(7,3)
console.log (number(3,3))
//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

function totalnamber(a,b) { 
    return totalnamber=a+b}
console.log (totalnamber (10,20))

//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

const name ="lika ";
const surename="tsariashvili";
const myname=name.concat(surename);
{console.log (myname)}


//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

const firstname="lily ";
const lastname="fifia";
const combinderString=firstname.concat(lastname);
{console.log (combinderString)}

//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)

function element (n){
    let y=1;
    for (let i =1; i<=n; i++){
        {y=y*i}
    }
    return y;
}
let n=5;
let m = element(n);
console.log(m);

//Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
let student = {
    firstName:"Lika",
    lastName: "Tsariashvili",
    age: 30,
    scores: [4,7,5,3,2],
    fullname() {
        console.log (this.firstName +" "+this.lastName)}}
student.fullname()    
//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

function score  (a,b,c,d,e)
{return a+b+c+d+e}
console.log (score (4,7,5,3,2))
//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი

{console.log (student.firstName, student.age)}
