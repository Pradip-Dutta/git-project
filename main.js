let openbtn= document.querySelector('.btn');
let closebtn =document.querySelector('.modal-btn');
let modal = document.querySelector('.modal-box');

openbtn.addEventListener('click', function(){
    let modal = document.querySelector('.modal-box');
    if(modal.style.display === 'none'){
        modal.style.display = 'block';
    }else{
        modal.style.display = 'none';
    }
});

closebtn.addEventListener('click', function(){
    modal.style.display = 'none';
});