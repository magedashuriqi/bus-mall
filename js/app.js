'use strict';

BusMall.prototype.images=[];
var names=[];
var votesArray=[];

//-------
function BusMall(name,imgPath){
    this.name=name;
    this.imgPath=imgPath;
    this.votes =0;
    this.timesShown=0;
    BusMall.prototype.images.push(this);
    names.push(this.name);
    
    
   
}
//-----------
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
new BusMall('wine-glass','img/wine-glass.jpg');

//--------------
function randomIndex(){
    return Math.floor(Math.random()*(BusMall.prototype.images.length));
    
}
//----------------
var leftIndex;
var rightIndex;
var midIndex;
var maxAttempts=25;
var clickingCounter=0;
//-------------
var leftImage=document.getElementById('left-img');
 var rightImage=document.getElementById('right-img');
 var midImage=document.getElementById('mid-img');
 var catalogeResults=document.getElementById('cataloge results');
//---------------------
function selectImages (){
    leftIndex=randomIndex();
    do{
    rightIndex=randomIndex();
    midIndex=randomIndex();}
    while (leftIndex===rightIndex || leftIndex===midIndex || rightIndex===midIndex);

        leftImage.src=BusMall.prototype.images[leftIndex].imgPath;  
        BusMall.prototype.images[leftIndex].timesShown++;

        rightImage.src= BusMall.prototype.images[rightIndex].imgPath;
        BusMall.prototype.images[rightIndex].timesShown++;

        midImage.src=BusMall.prototype.images[midIndex].imgPath; 
        BusMall.prototype.images[midIndex].timesShown++;
}selectImages();

//----------------- 
var imgDiv=document.getElementById('img-div');
leftImage.addEventListener('click',userClick);
rightImage.addEventListener('click',userClick);
midImage.addEventListener('click',userClick);


var showButton=document.getElementById('show-results');
showButton.addEventListener('click',showResults)


var submitButton = document.getElementById('submit-form');
submitButton.addEventListener('submit',submitter)


function userClick(event){
    if (clickingCounter < maxAttempts) {
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
    }else{
       
       imgDiv.removeEventListener('click', userClick);
       showButton.disabled=false;

       for(var i=0; i < BusMall.prototype.images.length; i++ ){
        votesArray.push(BusMall.prototype.images[i].votes);
       }
       chart.config.data.datasets[0].data = votesArray;

    }
}
var resultList;
        function showResults(){
        for (let i = 0; i < BusMall.prototype.images.length; i++) {
           resultList =document.createElement('li');
           resultList.textContent=BusMall.prototype.images[i].name+' collect '+BusMall.prototype.images[i].votes+' votes and shown '+BusMall.prototype.images[i].timesShown+' times, and the percentage for it ='+((BusMall.prototype.images[i].votes/maxAttempts)*100)+' %';
           catalogeResults.appendChild(resultList);
        }
        
    }
    
   
function submitter(event){
event.preventDefault();
console.log(event);
maxAttempts=event.target.attempt.value;
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: names,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: votesArray,
        }]
    },

    // Configuration options go here
    options: {}
});
console.log(chart);
