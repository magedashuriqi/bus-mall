praseItems();
for (let i = 0; i < BusMall.prototype.images.length; i++) {
    resultList = document.createElement('li');
    resultList.textContent = BusMall.prototype.images[i].name + ' collect ' + BusMall.prototype.images[i].votes + ' votes and shown ' + BusMall.prototype.images[i].timesShown + ' times, and the percentage for it =' + ((BusMall.prototype.images[i].votes / maxAttempts) * 100) + ' %';
    catalogeResults.appendChild(resultList);
}


function setItems(){
    var product=BusMall.prototype.images;
    var stringProduct = JSON.stringify(product);
    localStorage.setItem('product',stringProduct);}
    setItems();
    
    function praseItems(){
    var itemsPrase =JSON.parse(localStorage.getItem('product'));
    if (itemsPrase) {
        BusMall.prototype.images=itemsPrase;
    }
    console.log(localStorage);
    }