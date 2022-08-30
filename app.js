let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let val = document.getElementById('value');
let tBtn = document.querySelector('.tBtn');
let body = document.querySelector('body');


btn.forEach((item) => {
    item.addEventListener('click', ()=>{
        let innerHtml = item.innerHTML;
        switch (innerHtml) {
            case '=':
                val.innerHTML=eval(val.innerHTML);
                break;
            case 'clear':
                val.innerHTML="";
                break;
           default:
                val.innerHTML += innerHtml;
                break;
        }
    })
})

tBtn.onclick =  function(){
    body.classList.toggle('dark');
}