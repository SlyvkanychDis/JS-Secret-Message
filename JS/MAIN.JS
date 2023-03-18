function id(a){
    return document.getElementById(a);
}

function sel(a){
    return document.querySelector(a);
}


sel('.how').style.display = 'none';
sel('.no').style.display = 'none';
sel('.secret').style.display = 'block';

sel('.box').onmouseover = function(){
    sel('.how').style.display = 'block';
    sel('.box').style.background = 'red';
    sel('.secret').style.display = 'none';
};

sel('.box').onmousedown = function(){
    sel('.how').style.display = 'none';
    sel('.box').style.background = 'blue';
    sel('.secret').style.display = 'none';
    sel('.no').style.display = 'block';
};
sel('.box').onmouseup = function(){
    sel('.how').style.display = 'block';
    sel('.box').style.background = 'red';
    sel('.secret').style.display = 'none';
    sel('.no').style.display = 'none';
};

sel('.box').onmouseout = function(){
   
    sel('.secret').style.display = 'block';
    sel('.box').style.background = 'violet';
    sel('.how').style.display = 'none';
    sel('.no').style.display = 'none';
    
};

