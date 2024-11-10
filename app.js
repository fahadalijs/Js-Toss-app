let max=2;
let min=1;

let paragraph = document.querySelector(".para");
let tossImg = document.querySelector("img");


function toss(recieve){
    
    let randomNum = Math.round(Math.random() + max - min);
    console.log(randomNum);

    if(randomNum==1){

        tossImg.src =
        "assets/heads.png";

    }else{
        tossImg.src = "assets/tails.png";

    }


    if((recieve=='HEADS' && randomNum==1 ) || (recieve=='TAILS' && randomNum==2)){
        paragraph.innerHTML = `Congratulations! 🎉 you won the toss.<br><button  type="button" onclick="tossAgain()" class="btn btn-danger bttn">TOSS AGAIN</button>`;
    }else{
        paragraph.innerHTML = `Sorry , You lose the toss <br><button  type="button" onclick="tossAgain()" class="btn btn-danger bttn">TOSS AGAIN</button>`;
    }

    


}


function tossAgain() {
  paragraph.innerHTML = "";
  tossImg.src = "";
}









