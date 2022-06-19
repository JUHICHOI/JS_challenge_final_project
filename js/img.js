let imgArr = new Array();

imgArr[0]= '/JS_challenge_final_project/img/coco2.jpg';
imgArr[1]= '/JS_challenge_final_project/img/ToyStory.jpg';
imgArr[2]= '/JS_challenge_final_project/img/Tweety.jpg';
imgArr[3]= '/JS_challenge_final_project/img/yesFavorite.png';
// console.log(imgArr);

const body = document.querySelector("body");
const colorBtn = document.getElementById("change_color");
// console.log(colorBtn);
colorBtn.addEventListener("click", getColor);


function getColor(){

    randomImg = Math.floor(Math.random()*(imgArr.length));
    // console.log(randomImg);
    body.style.background =  'url('+ imgArr[randomImg] + ')';
}
