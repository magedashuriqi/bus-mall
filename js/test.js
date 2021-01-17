BusMall.prototype.images=[];
 var bag= new BusMall('Bag','img/bag.jpg');
 var banana= new BusMall('Banana','img/banana.jpg');
 var bathroom=new BusMall('bathroom','img/bathroom.jpg');
 var boots= new BusMall('boots','img/boots.jpg');
 var breakfast=new BusMall('breakfast','img/breakfast.jpg');
 var bubblegum= new BusMall('bubblegum','img/bubblegum.jpg');
 var chair=new BusMall('chair','img/chair.jpg');
 var cthulhu= new BusMall('cthulhu','img/cthulhu.jpg');
 var dogDuck=new BusMall('dog-duck','img/dog-duck.jpg');
 var dragon=new BusMall('dragon','img/dragon.jpg');
 var pen=new BusMall('pen','img/pen.jpg');
 var petSweep= new BusMall('pet-sweep','img/pet-sweep.jpg');
 var scissors=new BusMall('scissors','img/scissors.jpg');
 var shark= new BusMall('shark','img/shark.jpg');
 var sweep=new BusMall('sweep','img/sweep.png');
 var tauntaun=new BusMall('tauntaun','img/tauntaun.jpg');
 var unicorn=new BusMall('unicorn','img/unicorn.jpg');
 var usb=new BusMall('usb','img/usb.gif');
 var waterCan=new BusMall('water-can','img/water-can.jpg');
 var winGlass=new BusMall('wine-glass','img/win-glass.jpg');
renderImages();
console.log(BusMall.prototype.images);


if (leftIndex===rightIndex) {
    rightImage.src= BusMall.prototype.images[rightIndex].imgPath;
    leftImage.src=BusMall.prototype.images[leftIndex].imgpath;  
    midImage.src=BusMall.prototype.images[midIndex].imgPath; 
}else if (leftIndex===midIndex) {
    rightImage.src= BusMall.prototype.images[rightIndex].imgPath;
    leftImage.src=BusMall.prototype.images[leftIndex].imgpath;  
    midImage.src=BusMall.prototype.images[midIndex].imgPath; 
}else if (rightIndex===midIndex) {
    rightImage.src= BusMall.prototype.images[rightIndex].imgPath;
    leftImage.src=BusMall.prototype.images[leftIndex].imgpath;  
    midImage.src=BusMall.prototype.images[midIndex].imgPath; }