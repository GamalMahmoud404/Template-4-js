
// -----  Dark Mode

let darkIcon = document.querySelector("#dark-icon");
let tog1 = document.querySelector("#sp-h-tog");

sessionStorage.setItem("is_reloaded", true);
if (sessionStorage.getItem("is_reloaded")){
    if(localStorage.getItem("mode") == 'true'){
        document.body.classList.toggle("dark-thime");
        if(document.body.classList.contains("dark-thime")){
            darkIcon.src ="./imges/Dark_Thime/sun.png"
            tog1.className ="navbar-toggler-icon navbar-dark"
        }else{
            darkIcon.src ="./imges/Dark_Thime/moon.png"
            tog1.className ="navbar-toggler-icon navbar-light"
        }
    }
} 

darkIcon.onclick = function darkMode(){

    let x = document.body.classList.toggle("dark-thime");
    localStorage.setItem("mode",x)
    if(document.body.classList.contains("dark-thime")){
        darkIcon.src ="./imges/Dark_Thime/sun.png"
        tog1.className ="navbar-toggler-icon navbar-dark"
    }else{
        darkIcon.src ="./imges/Dark_Thime/moon.png"
        tog1.className ="navbar-toggler-icon navbar-light"
    }

    
}

//-------- Alert

function functionAlert(msg, myYes) {
    document.getElementById("fullAlert").style.display = ("block")

    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
        confirmBox.hide();
        document.getElementById("fullAlert").style.display = ("none")
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}


// ---------------------


let getAddedItem = JSON.parse(localStorage.getItem("addedItem"))

// function plusBtn(id){
//     ele=userProducts.find((x)=>{
//        return x.id==id
//     })
//     ele.count++;
//     localStorage.setItem('items',JSON.stringify(userProducts))
//     cartDraw()
// }


// function sumNume(id){
//     let spCount = document.querySelector(`#sp${id}`);
 
//     let k =  `#sp${id}`.text()
//     k++
//     spCount.innerHTML = k
    // let notEle = cont.filter(item => item.id !== id);

    // const obj = cont.find((item) => item.id === id);
    // if (obj) {
    // obj.count = ele.cont;
    // }

    // spCount.innerHTML = ele.count
//     console.log(k)
// }

// function subNume(){
//     let spCount = document.querySelector(`#sp${id}`);
//     let x = 1
//     x = x - 1
//     spCount.innerHTML = x
// }



// ----- Add to fevorit


let heartAll = []

for (i = 1; i <= products.length; i++) {
    heartAll = [ ...heartAll , "heart-fev"+i];
}

//------- Add function
let getAddedFevorit = JSON.parse(localStorage.getItem("addedFevorit"))
let FevAll =document.querySelector("#checkedProDrow2");
var addedFevorit =[]


if(localStorage.getItem("usersname") && getx == "true"){
    function fevoritItem (id){

        let pro = products.find((item) => item.id === id)
        
        addedFevorit = [...addedFevorit ,pro]
        localStorage.setItem("addedFevorit",JSON.stringify(addedFevorit))
            
    }

    heartAll.forEach(element => {
        let elem = document.querySelector(`#${element}`);
        let removeElem = document.querySelector(`#${"remove-"+element}`);
        elem.addEventListener("click", function(){
            elem.style.display = 'none'
            removeElem.style.display = 'block'
            
            let getheartStatus = JSON.parse(localStorage.getItem("heartStatus"))

            if(localStorage.getItem("heartStatus")){
                let x = [...getheartStatus]
                x = [...x , `${element}`]
                localStorage.setItem("heartStatus",JSON.stringify(x))
            }else{
                let x = []
                x = [`${element}`]
                localStorage.setItem("heartStatus",JSON.stringify(x))
            }
        })
    })

}else(
    heartAll.forEach(element => {
        let elem = document.querySelector(`#${element}`);
        elem.addEventListener("click", function(){
            window.location = ("login.html")
        })
    })
)

// ----------------------------

function checkheart(){
    if(localStorage.getItem("usersname") && getx == "true" && localStorage.getItem("btnStatus")){
        heartAll.map(element => {
            let elem = document.querySelector(`#${element}`);
            let elemRemove = document.querySelector(`#${"remove-"+element}`);
            let getbtnStatus = JSON.parse(localStorage.getItem("heartStatus"))

            getbtnStatus.map((item) => {
                if(item == element){
                    elem.style.display = 'none'
                    elemRemove.style.display = 'block'
                }
            })

        })
    }
}

clearTimeout(checkheart())

// ----- check fev remove & add in local Storage

function checkheartfev(){
    if(localStorage.getItem("usersname") && getx == "true" && localStorage.getItem("heartStatus")){
        heartAll.map(element => {
            let elemFev = document.querySelector(`#${element}`);
            let elemRemoveFev = document.querySelector(`#${"remove-"+element}`);
            let getheartStatus = JSON.parse(localStorage.getItem("heartStatus"))

            getheartStatus.map((item) => {
                if(item == element){
                    elemFev.style.display = 'none'
                    elemRemoveFev.style.display = 'block'
                }
            })

        })
    }
}

clearInterval(checkheartfev())


function checkheartfev2(){
    if(localStorage.getItem("usersname") && getx == "true" && localStorage.getItem("heartStatus")){
        heartAll.map(element => {
            let elemFev = document.querySelector(`#${element}`);
            let elemRemoveFev = document.querySelector(`#${"remove-"+element}`);
            let getheartStatus = JSON.parse(localStorage.getItem("heartStatus"))

            elemRemoveFev.addEventListener("click",function(){
                getheartStatus.map((item) => {
                    if(item == element){
                        elemFev.style.display = 'block'
                        elemRemoveFev.style.display = 'none'
                    }
                })
            })


        })
    }
}

clearInterval(checkheartfev2())







