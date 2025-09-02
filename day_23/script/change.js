//点击按钮切换图片
//获取图片
const img = document.getElementsByTagName("img")[0];
//获取按钮
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const p = document.getElementsByTagName("p")[0];



// 创建数组存放图片地址
const imgArr = [
    './image/轮播图1.jpg',
    './image/轮播图2.jpg',
    './image/轮播图3.jpg',
    './image/轮播图4.jpg',
    './image/轮播图5.jpg'
]
//创建一个变量来存放索引，动态实现转换
let i = 0;
p.innerText = `总共有${imgArr.length}张图片，现在是第${i+1}张图片`;

// 检查是否获取到元素节点 ：写一点测一点，好提前找错误
// alert(img);
// alert(prev);
// alert(next);

//处理点击下一张按钮切换图片，绑定单击按钮事件
next.addEventListener("click",function() {
    // alert("下一张");
    //切换图片可以通过修改img的src来进行切换
    i++;
    if(i > 4) {
        i = 0;
    }
    img.src =imgArr[i]; 
    p.innerText = `总共有${imgArr.length}张图片，现在是第${i+1}张图片`;

})


prev.addEventListener("click",function() {
    i--;
    if(i<0) {
        i =imgArr.length - 1;
    }
    img.src = imgArr[i];
    p.innerText = `总共有${imgArr.length}张图片，现在是第${i+1}张图片`;

})











//我的轮播图
// const gt = document.getElementsByClassName("gt")[0];
// const lt = document.getElementsByClassName("lt")[0];
// const ul = document.getElementsByTagName("ul")[0];
// let i = 0;
// gt.addEventListener("click", function() {
//     i++;
//     if(i === 5) {
//         i = 0;
//     }
//     ul.style.left = -1240*i + 'px';
   
// });
// lt.addEventListener("click",function() {
//     i--;
//     if(i < 0) {
//         i = 4;
//     }
//     ul.style.left = -1240*i + 'px';

// });
