// console.log(Toss-app);

let h1 = document.querySelector("#heading");
let h2 = document.querySelector("h2")
function tossbtn(index) {
    console.log(index);
    h1.innerHTML = index

    let x = Math.ceil(Math.random()*2)
    console.log(x);
   
    if  ( x === 1 ) {
        console.log("You win the Toss");
        h2.innerHTML = "you win the Toss"

    }else{
        console.log("loss");
        h2.innerHTML = "You Loss the Toss"
    }
    

}

 



























