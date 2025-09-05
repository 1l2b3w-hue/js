const lt = document.getElementsByClassName("lt")[0];
const gt = document.getElementsByClassName("gt")[0];


lt.addEventListener("click",function(event) {
    clearTimeout(timer);
    event.preventDefault();
    const current = document.getElementsByClassName("current")[0];
    const prev = current.previousElementSibling || document.querySelector(".contain>ul>li:last-child");
    current.classList.remove("current");
    prev.classList.add("current");
});
gt.addEventListener("click",function(event) {
    clearTimeout(timer);
    event.preventDefault();
    const current = document.getElementsByClassName("current")[0];
    const next = current.nextElementSibling || document.querySelector(".contain>ul>li:first-child");
    current.classList.remove("current");
    next.classList.add("current");
});



let timer;
//自动播放
timer = setTimeout(function fn() {
    const current = document.getElementsByClassName("current")[0];
    const next = current.nextElementSibling || document.querySelector(".contain>ul>li:first-child");
    current.classList.remove("current");
    next.classList.add("current");
    setTimeout(fn, 3000);//不要取名为timer否则后面都停了
}, 3000);

