

var maxAttempts =25;
//----------------------------------


selectImages();
console.log(BusMall.prototype.images);
//-------------------------------------

// generate random number
function randomIndex(){
    return Math.floor(Math.random()*(BusMall.prototype.images.length));
    
}
//--------------------------------
function selectImages (){
    leftIndex=randomIndex();
    do{
    rightIndex=randomIndex();
    midIndex=randomIndex();}
    while (leftIndex===rightIndex || leftIndex===midIndex || rightIndex===midIndex) ;
        leftImage.src=BusMall.prototype.images[leftIndex].imgpath;  
        BusMall.prototype.images[leftIndex].timesShown++;
        rightImage.src= BusMall.prototype.images[rightIndex].imgPath;
        BusMall.prototype.images[rightIndex].timesShown++;
        midImage.src=BusMall.prototype.images[midIndex].imgPath; 
        BusMall.prototype.images[midIndex].timesShown++;
    
}
//---------------------------------

// to use the submit button to save the number of user attempts  
var submitButon = getElementById('submitButton');
submitButon.addEventListener('submit',submitter)

function submitter(event){
event.preventDefault();

var numOfAttempt=event.target.attempt.value;
console.log(event,numOfAttempt);
maxAttempts=numOfAttempt;
}
//-------------------------------------------
 var leftIndex=document.getElementById('left-img');
 var rightIndex=document.getElementById('right-img');
 var midIndex=document.getElementById('mid-img');
 var imgDiv=document.getElementById('img-div');
 var catalogeResults=document.getElementById('cataloge results');




 
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
            renderImages();
            selectImages();
    }else{
       
        var resultList;
        for (let i = 0; i < BusMall.prototype.images.length; i++) {
           resultList =document.createElement('li');
           resultList.textContent=BusMall.prototype.images[i].name+'collect '+BusMall.prototype.images[i].votes+' votes'.votes+' and shown'+BusMall.prototype.images[i].timesShown+' times';
           catalogeResults.appendChild(resultList);
            
        }
        
       leftImage.removeEventListener('click', userClick);
       rightImage.removeEventListener('click', userClick);
       midImage.removeEventListener('click', userClick);
    }
}

var rightImage,midImage,leftImage;
/*
function renderImages(){
    var imgDiv = document.getElementById('img-div');
    leftImage=document.createElement('img');
    leftImage.src=BusMall.prototype.images[leftIndex].imgPath
    rightImage=document.createElement('img')
   midImage=document.createElement('img')


}*/






