var box = document.getElementById('display');

function toDisplay(x){
    box.value+=x;
    if (x==='c'){
        box.value='';
    }
}