
let inputstring = '';
let arrint = new Array();
let arrznak = new Array();
const calculstring = document.getElementById("calculate");
const buttons = document.querySelectorAll(".but");
const resultino = document.getElementById("resultino");

buttons.forEach((el) => {
    el.onclick = function () {
        if (el.innerHTML == "=") {
            // resultino.value = calculstring.value  ;
            resultino.value = eval(inputstring);
        }
        else if (el.innerHTML == "C") {
            inputstring = "";
            calculstring.value = '0';
            resultino.value = 0;
        }
        else if (el.innerHTML == "←") {
            if (inputstring.length <= 1) {
                inputstring = "";
                calculstring.value = "0";
            }
            else {
                inputstring = inputstring.slice(0, inputstring.length - 1);
                calculstring.value = inputstring;
            }

        }

        else {
            inputstring += `${el.innerHTML}`;
            calculstring.value = inputstring;
        }
    }
})

/* const a = 2;
let pipirka = (a == 1)? 1: 'other'; */

inputint = parseInt(inputstring);


// id1.onclick = function() {
//    inputint=+"1";
//    inputint = parseInt(inputstring)
/*  arrint.push(inputint);
 console.info (inputint);
 console.info (arrint)}; */
// }



function loadImages(i){
    i = i || 1;
    const img = new Image();    
    img.onload = function(){
    	document.body.appendChild(img);
        loadImages(++i);
    }
    img.src = 'http://127.0.0.1:5500/.vscode/photos/' +i + '.jpg';
}

/* loadImages(); */

const back =  document.querySelector('.arrowleft');
const img = document.querySelector('#img');
img.src = '/photos/' +1 + '.jpg';


function counter(j){
    img.src = '/photos/' +j + '.jpg'
          
    /* try {
        img.src = 'http://127.0.0.1:5500/.vscode/photos/' +j + '.jpg';
      
      } catch (err) {
        console.info(err);
      } */
}



/* let i = 2;

back.onclick = () => {
    i--;

    img.src = 'http://127.0.0.1:5500/.vscode/photos/' +i + '.jpg'
} */