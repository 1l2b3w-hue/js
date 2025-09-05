// //点击按钮切换图片
// //获取图片
// const img = document.getElementsByTagName("img")[0];
// //获取按钮
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");

// const p = document.getElementsByTagName("p")[0];



// // 创建数组存放图片地址
// const imgArr = [
//     './image/轮播图1.jpg',
//     './image/轮播图2.jpg',
//     './image/轮播图3.jpg',
//     './image/轮播图4.jpg',
//     './image/轮播图5.jpg'
// ]
// //创建一个变量来存放索引，动态实现转换
// let i = 0;
// p.innerText = `总共有${imgArr.length}张图片，现在是第${i+1}张图片`;

// // 检查是否获取到元素节点 ：写一点测一点，好提前找错误
// // alert(img);
// // alert(prev);
// // alert(next);
// function fn() {
//     i++;
//     if(i > 4) {
//         i = 0;
//     }
//     img.src =imgArr[i]; 
//     p.innerText = `总共有${imgArr.length}张图片，现在是第${i+1}张图片`;
// }

// //处理点击下一张按钮切换图片，绑定单击按钮事件
// next.addEventListener("click",function() {
//     clearTimeout(timer);
//     fn();

// }
//     // alert("下一张");
//     //切换图片可以通过修改img的src来进行切换


// )


// prev.addEventListener("click",function() {
//     clearTimeout(timer);//清除还存在的计时器
//     i--;
//     if(i<0) {
//         i =imgArr.length - 1;
//     }
//     img.src = imgArr[i];
//     p.innerText = `总共有${imgArr.length}张图片，现在是第${i+1}张图片`;

// })

// const auto = document.getElementById("auto");
// //点击自动播放，图片自动播放

// // 有一个问题，就是连续点击自动播放按钮后，会产生多个定时器，导致播放速度加快
// // 因此要增加一个定时器关闭功能，防止定时器过多导致播放速度加快
// let timer;
// auto.onclick = function fn2() {
//     clearTimeout(timer);
//     let j = 0;
//     timer = setTimeout(function fn3() {
//         fn();
//         j++;
//         if(j < 100) {
//             timer = setTimeout(fn3,3000); //是函数传入，并非调用。
//         }
//     },1000)
// }












// 我的轮播图
const gt = document.getElementsByClassName("gt")[0];
const lt = document.getElementsByClassName("lt")[0];
const ul = document.getElementsByTagName("ul")[0];
let i = 0;
gt.addEventListener("click",function fn3() {
    clearTimeout(timer);
    fn();
});
lt.addEventListener("click",function() {
    clearTimeout(timer);
    i--;
    if(i < 0) {
        i = 4;
    }
    ul.style.left = -1240 *i + 'px';

});
function fn() {
    i++;
    if(i === 5) {
        i = 0;
    }
    ul.style.left = -1240 *i + 'px';
};
let timer ;
timer = setTimeout(function fn2() {
    fn();
    setTimeout(fn2,3000);
},3000);
