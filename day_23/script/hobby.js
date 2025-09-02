const btn = document.getElementsByTagName("button");
const hobby = document.getElementsByName("hobby");
const all = document.getElementById("all");
let flag = true;

// 多选框可以通过checked来判断是否被选中，true为选中，false为未选中

// 单击全选按钮
btn[0].addEventListener("click", function () {
    for (let i of hobby) {
        i.checked = true;
    }
    all.checked = true;
});

// 单击取消按钮 
btn[1].addEventListener("click", function () {
    for (let i of hobby) {
        i.checked = false;
    }
    all.checked = false;
});

//单击反选按钮
btn[2].addEventListener("click", function () {
    for (let i of hobby) {
        i.checked = !(i.checked)
    }

    let j = document.querySelectorAll("[name = hobby]:checked");
    //使复选框被选中时，其标签的伪类选择器 ":checked" 会生效，也就是创建了这个伪类选择器，可以通过这个伪类获取选中部分
    if(j.length === hobby.length) {
        all.checked = true;
    }
    else {
        all.checked = false;
    }

});

//单击提交按钮 
btn[3].addEventListener("click", function () {
    let arr = [];
    for (let i of hobby) {
        if (i.checked) {
            arr.push(i.value);
        }
    }
    if (arr[0] === undefined) {
        alert(`你的爱好不是这些`);
    }
    else {
        alert(`你的爱好是${arr}`);
    }

});

// 单击全选多选框
//change : 当一个复选框发生变化时，执行函数
all.addEventListener("change", function () {
    // console.log(this)
    for(let i of hobby) {
        i.checked = this.checked;
    }
   

    // if (!all.checked) {
    //     for (let i of hobby) {
    //         i.checked = false;
    //     }
    // }
    // else {
    //     for (let i of hobby) {
    //         i.checked = true;
    //     }
    // }
});

//四个多选控制一个多选框
// 应该什么时候去判断呢，就是当四个多选框有发生改变时，就应该去判断一下，该不该xuan

for(let i of hobby) {
    i.addEventListener("change",function() {
        // alert(123);
        let j = document.querySelectorAll("[name = hobby]:checked");
        if(j.length === hobby.length) {
            all.checked = true;
        }
        else {
            all.checked = false;
        }
    })
}
// all.addEventListener("change", ()=>{
//     console.log(this);//指向window
   
// });
