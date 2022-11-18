let grid = document.getElementById('grid');

function updateView(){
    let randomLength = Math.floor(Math.random() * (10 + 1));
    let cols = "";
    for(let i = 0; i < randomLength; i++){
        cols += "1fr ";
    }
    grid.style.gridTemplateColumns = cols;
};

setInterval(function(){
    updateView();
},3000);