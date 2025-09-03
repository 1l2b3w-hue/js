
// 获取所有的超链接
const link = document.links;

//直接封装函数，避免不断遍历创建函数影响性能
function del() {
    // alert(123);
    // console.log(this); //通过this来获取当前点击的超链接
    const tr =  this.parentElement.parentElement;

    const name = tr.firstElementChild;
    // console.log(name);

    //删除之前应该弹出提示是否删除
    confirm(`确定要删除" ${name.textContent} "这个员工吗？`) && tr.remove();

    return false;//取消了默认跳转行为
}


//绑定单击事件
for(let i = 0;i < link.length; i++) {
    // link[i].addEventListener("click",function() {
    //     alert(123);
    //     return false;
    //     // 这里有一个问题，对于这个超链接a，我们希望的是他完成一个删除功能就行，而不是让他可以跳转
            /* 
                解决 ：
                    XXX.XXX = function（）{} return false
                    直接在标签上更改 ： href = “javascript: ;”
            */
    //     /* 
    //         但是a链接跳转又是默认行为，如何解决呢？
    //         可以通过在响应事件的函数上加一个return false;来取消默认事件
    //         但是，只能实现在XXX.XXX = function（）{}上来实现这个功能,
    //         无法在addEventListener中实现
    //     */
    // })
    link[i].onclick = del; //不需要调用
}

/* 
    添加功能 ： 点击按钮添加信息
*/
const btn = document.getElementsByTagName("button")[0];

// 获取tbody
const tbody = document.getElementsByTagName("tbody")[0];
btn.onclick = function () {
    // alert(123);
    // 获取用户输入数据
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const allowance = document.getElementById("allowance").value;
    // 将获取的数据转换为DOM对象，易被xss注入攻击
    // tbody.insertAdjacentHTML(
    //     "beforeend",
    //     `<tr>
    //         <td>${name}</td><td>${email}</td><td>${allowance}</td><td><a href="javascript: ;">删除</a></td>
    //     </tr>`
    // )
    //这个新的DOM对象是新创建的，其中a并没有绑定上面的点击事件，所以无法删除
    //解决 ： 给新创建的超链接绑定新的事件,获取创建的新超链接
    
    // 创建一个元素来存放新建标签,这样js解释器会始终认为传的字符串，不会转换为html标签
    const tr = document.createElement("tr");
    const nameId = document.createElement("td");
    const emailId = document.createElement("td");
    const allowanceId = document.createElement("td");

    //读取内容
    nameId.textContent = name;
    emailId.textContent = email;
    allowanceId.textContent = allowance;

    tr.appendChild(nameId);
    tr.appendChild(emailId);
    tr.appendChild(allowanceId);
    tr.insertAdjacentHTML("beforeend",`<td><a href="javascript: ;">删除</a></td>`);
    console.log(tr);

    tbody.appendChild(tr);


    const newA = link[link.length -1 ];
    newA.onclick = del;

    return false;//取消表单提交时默认跳转（这里我没有表达，有没有都无所谓）
}






// const tr = document.getElementsByTagName("tr");



// //增加
// //定位信息
// const name1 =document.getElementById("name");
// const  email = document.getElementById("email");
// const allowance = document.getElementById("allowance");
// //定位按钮
// const btn = document.getElementsByTagName("button")[0];

// //这是垃圾
// // const newTr = document.createElement("tr");
// // const newTd1 = document.createElement("td");
// // const newTd2 = document.createElement("td");
// // const newTd3 = document.createElement("td");
// // const newTd4 = document.createElement("td");
// // newTd4.insertAdjacentHTML("afterbegin","<a href=\"#\">删除</a>")

// //当输入框发生改变后，进行记录信息
// // name1.addEventListener("change",function () {
// //     newTd1.textContent = name1.value;
// //     // console.log(newTd1.textContent);
// // });
// email.addEventListener("change",function() {
//     let reg = /^[a-z]{3}@[a-z]{3}$/;
    
//     if(!reg.exec(email.value)) {
//         alert("邮箱错误,请按照格式：三个小写字母 + @ 三个小写字母");
//         email.value = '';
//     }
    
//     // console.log(newTd2.textContent);
// });
// allowance.addEventListener("change", function() {
//     let reg = /^[1-9]\d{0,}$/;
    
//     if(!reg.exec(allowance.value)) {
//         alert("薪资错误，请重新输入数字");
//         allowance.value = '';
//     }
//     // newTd3.textContent = allowance.value;
//     // console.log(newTd3.textContent); 
// });

// const tbody = document.getElementsByTagName("tbody")[0];
// btn.addEventListener("click",function() {
   
//    if(name1.value != '' && email.value != '' && allowance.value != '') {
//         tbody.insertAdjacentHTML("beforeend",`<tr><td>${name1.value}</td><td>${email.value}</td><td>${allowance.value}</td><td><a href="#">删除</a></td></tr>`);
//         const A = document.querySelectorAll('a');
//         console.log(A);
//         A[A.length-1].addEventListener("click",function() {
//             // alert(123);
//             confirm("确定删除吗？") &&( this.parentElement.parentElement).remove();
//         })
//     }
//    else {
//         alert("当前信息输入不完整，请输入完整的用户信息")
//    }
   

// });
// let a = document.getElementsByTagName("a");
//    //遍历行然后定位删除进行员工信息删除功能
//    for(let i = 0;i < a.length;i++){
//     // console.log(tr[i]);
//     // console.log(a);
//     a[i].addEventListener("click" , function() {
//         // alert(123);
//         confirm("确定删除吗？") &&( a[i].parentElement.parentElement).remove();
//     })  
// };