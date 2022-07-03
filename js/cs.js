const head = document.getElementById('navbar');
const letterLIO = document.getElementById('letter');
const links = document.getElementById('links');
const myJob = document.getElementById('job');
const menu = document.getElementById('menu');
const linkOne = document.getElementById('one');
const linkTwo = document.getElementById('two');
const linkThree = document.getElementById('three');
const linkFour = document.getElementById('four');
const linkfive = document.getElementById('five');
const menuOne = document.getElementById('menu1');
const menuTwo = document.getElementById('menu2');
const porto = document.getElementById('Portfolio');
let linksArray = [linkOne,linkTwo,linkThree,linkFour,linkfive];
function menuOneClick() {
    menuOne.classList.toggle('hidden');
    skills.style.cssText='display:none'
    projects.style.cssText='display:none'
    contactus.style.cssText='display:none'
    about.style.cssText='display:none'
    menuTwo.classList.toggle('hidden');
    head.classList.toggle('mobile-menu');
    porto.style.cssText='display:none';
    menuTwo.style.cssText='position:fixed;top:20px;right:20px;'
    links.style.cssText='display:flex;flex-direction:column;position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);text-align:center'
    for(let i =0 ; i<linksArray.length;i++) {
        linksArray[i].style.cssText='margin-top:100px;'
    }
    
}
function menuTwoCLick(){
    menuOne.classList.toggle('hidden');
    menuTwo.classList.toggle('hidden');
    head.classList.toggle('mobile-menu');
    porto.style.cssText='display:block';
    links.style.cssText='display:none';
    skills.style.cssText='display:block'
    projects.style.cssText='display:block'
    contactus.style.cssText='display:block'
    about.style.cssText='display:block'
}
menuOne.addEventListener('click',menuOneClick)
menuTwo.addEventListener('click',menuTwoCLick);
menuOne.onclick=function(){
    for(let a =0 ; a<linksArray.length; a++) {
        linksArray[a].onclick=menuTwoCLick;
    }
}
window.onscroll = function(){
    if(this.scrollY > 200) {
        head.classList.add('scrolltop');
        letterLIO.style.cssText = "color:white;"
        links.onmouseover = function() {
            for(let  i =0 ; i<linksArray.length ; i++) {
                linksArray[i].style.cssText="color:white"
            }
        }
    } else {
        head.classList.remove('scrolltop');
        letterLIO.style.cssText = "color:crimson";
    }
}
