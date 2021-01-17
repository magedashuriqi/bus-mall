'use strict';


var maxAttempts =25;
var clickingCounter =0;

//constructer:

function BusMall(name,imgPath){
    this.name=name;
    this.imgPath=imgPath;
    this.votes =0;
    this.timesShown=0;
    BusMall.prototype.images.push(this);
}
//----------------------------------
BusMall.prototype.images=[];
new BusMall('Bag','img/bag.jpg');
new BusMall('Banana','img/banana.jpg');
new BusMall('bathroom','img/bathroom.jpg');
new BusMall('boots','img/boots.jpg');
new BusMall('breakfast','img/breakfast.jpg');
new BusMall('bubblegum','img/bubblegum.jpg');
new BusMall('chair','img/chair.jpg');
new BusMall('cthulhu','img/cthulhu.jpg');
new BusMall('dog-duck','img/dog-duck.jpg');
new BusMall('dragon','img/dragon.jpg');
new BusMall('pen','img/pen.jpg');
new BusMall('pet-sweep','img/pet-sweep.jpg');
new BusMall('scissors','img/scissors.jpg');
new BusMall('shark','img/shark.jpg');
new BusMall('sweep','img/sweep.png');
new BusMall('tauntaun','img/tauntaun.jpg');
new BusMall('unicorn','img/unicorn.jpg');
new BusMall('usb','img/usb.gif');
new BusMall('water-can','img/water-can.jpg');
new BusMall('wine-glass','img/win-glass.jpg');
selectImages();
console.log(BusMall.prototype.images);
//-------------------------------------

// generate random number
function randomIndex(){
    return Math.floor(Math.random()*(images.length));
}

// to use the submit button to save the number of user attempts 
var submitButon = getElementById('submitButton');
submitButon.addEventListener('submit',submitter)

function submitter(event){
event.preventDefault();

var numOfAttempt=event.target.attempt.value;
console.log(event,numOfAttempt);
clickingCounter=numOfAttempt;
}
//-------------------------------------------
 var leftIndex;
 var rightIndex;
 var midIndex;

 function selectImages (){
    leftIndex=randomIndex();
    rightIndex=randomIndex();
    midIndex=randomIndex();
    while (leftIndex===rightIndex || leftIndex===midIndex || rightIndex===midIndex) {
        
            leftIndex=randomIndex();
            midIndex=randomIndex();
            rightIndex=randomIndex();  
    }
    
        images[leftIndex].timesShown++;
        images[rightIndex].timesShown++;
        images[midIndex].timesShown++;
    }
//-------------------------------------------------


leftImage.addEventListener('click',userClick);
rightImage.addEventListener('click',userClick);
midImage.addEventListener('click',userClick);



function userClick(event){
    if (clickingCounter <= maxAttempts) {
        if (event.target.id ==='left-img') {
            BusMall.prototype.images[leftIndex].votes++;
            clickingCounter++; 
        }else if (event.target.id==='right-img') {
            BusMall.prototype.images[rightIndex].votes++;
            clickingCounter++;  
        }else{
            BusMall.prototype.images[midIndex].votes++;
            clickingCounter++;
        }
            selectImages();
            renderImages();
    }else{
        var catalogeResults=document.getElementById('cataloge results')
        var resultList;
        for (let i = 0; i < BusMall.prototype.images.length; i++) {
           resultList =document.createElement('li');
           resultList.textContent=BusMall.prototype.images[i].name+'collect '+BusMall.prototype.images[i].votes+' votes'.votes+' and shown'+images[i].timesShown+' times';
           catalogeResults.appendChild(resultList);
            
        }
        
       leftImage.removeEventListener('click', userClick);
       rightImage.removeEventListener('click', userClick);
       midImage.removeEventListener('click', userClick);
    }
}

var rightImage,midImage,leftImage;
function renderImages(){
leftImage = document.getElementById('left-img');
midImage = document.getElementById('mid-img');
rightImage = document.getElementById('right-img');

    leftImage[leftIndex].setAttribute('src',imgPath)
    right[rightIndex].setAttribute('src',imgPath)
    midImage[midIndex].setAttribute('src',imgPath)

}






