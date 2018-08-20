let menu = document.getElementsByClassName('menu__list');

for (let i = 0; i < menu.length; i++) {
    let a = menu[i];

    a.addEventListener("mouseover", function() {
        a.style.background = 'rgba( 255, 255, 255, 0.1)';
    });
    a.addEventListener("mouseout", function() {
        a.style.background = 'transparent';
    });
}

for (let e = 0; e < menu.length; e++) {
    let a = menu[e];
    a.addEventListener("click", function() {
        a.style.background = 'black';
    });
}

// let loremDiagram = document.getElementById('lorem_diagram').addEventListener('onclick', loremUp);
// function loremUp(){
//   document.getElementsByClass('first-rate').classList.toggle('up');
// }

const triggers = document.querySelectorAll('.menu > .drop');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(()=>this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger=>trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger=>trigger.addEventListener('mouseleave', handleLeave));

function tgl_div() {
  let span = document.querySelector('.rightblock > span');
  span.style.opacity = span.style.opacity == "1" ? "0" : "1";
}

const loremBtn = document.getElementById('lorem_diagram');
let loremDiagrams = document.querySelectorAll ('.first-rate');
const ipsumBtn = document.getElementById('ipsum_diagram');
let ipsumDiagrams = document.querySelectorAll ('.second-rate');


for (let x = 0; x < loremDiagrams.length; x++){
  loremBtn.addEventListener('click' , function (){
    loremDiagrams[x].classList.add('lorem_selected');
  });
}

for (let x = 0; x < ipsumDiagrams.length; x++){
  ipsumBtn.addEventListener('click' , function (){
    ipsumDiagrams[x].classList.add('ipsum_selected');
  });
}


const btnBlueBtn = document.getElementById('btn_bluebtn');
let loremPers = document.querySelectorAll ('.lorem_first_pers');
console.log(loremPers);

for (let x = 0; x <loremPers.length; x++){
  btnBlueBtn.addEventListener('click', function(){
    loremPers[x].classList.add('lorem_first_pers_selected');
  });
}

const btnGreyBtn = document.getElementById('btn_greybtn');
let ipsumPers = document.querySelectorAll ('.lorem_second_pers');
console.log(ipsumPers);

for (let x = 0; x <loremPers.length; x++){
  btnGreyBtn.addEventListener('click', function(){
    ipsumPers[x].classList.add('lorem_first_pers_selected');
  });
}