const btn  = document.querySelector('.click');
const rand = document.querySelector('.randNum');

btn.addEventListener('click',()=>{
    rand.textContent = 100000 + Math.floor(Math.random() * 900000);
});
