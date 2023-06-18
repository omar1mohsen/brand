let statsbox = document.querySelectorAll(".stats-boxs .box .number")
let section = document.querySelector(".stats")
let started = false; // Function Started ? No


window.onscroll = function () {
    if(window.scrollY >= section.offsetTop - 100 ){
        if(!started){
        statsbox.forEach(stat => counter(stat))
        }
        started = true;
    }
}    



function counter (ele){
    let goal = ele.dataset.goal
    let count = setInterval(() => {
        ele.textContent++;
        if(ele.textContent == goal){
            clearInterval(count)
        }
    },2000 / goal);
}
