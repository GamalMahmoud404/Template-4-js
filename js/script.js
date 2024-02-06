let links =document.querySelector("#links");
let infouser =document.querySelector("#info-of-user");
let user =document.querySelector("#user");
let logout =document.querySelector("#logout");

let getemail =localStorage.getItem("email")
let getuserfname =localStorage.getItem("userfname")

logout.addEventListener("click", function(){
    infouser.style.display ="none"
    links.style.display ="block"
    x = "false"
    localStorage.setItem("xchec",false)
})

let getx = localStorage.getItem("xchec")

if(getemail && getx == "true"){
    links.style.display ="none"
    infouser.style.display ="block"
    user.innerHTML = getuserfname
}


//-------  card drow ---------------------------------------

let AllProducts = document.querySelector("#allProducts");

let products = [
    {
        id:1,
        name: "Green chair",
        price: "20",
        category: "chair" ,
        imageUrl : "./imges/products/01.jpg",
        count : 1
    },
    {
        id:2,
        name: "Brown dresser",
        price: "60",
        category: "dresser" ,
        imageUrl : "./imges/products/11.jpg",
        count : 1
    },
    {
        id:3,
        name: "Olive dresser",
        price: "40",
        category: "dresser" ,
        imageUrl : "./imges/products/12.jpg",
        count : 1
    },
    {
        id:4,
        name: "black Gray chair",
        price: "15",
        category: "chair" ,
        imageUrl : "./imges/products/05.jpg",
        count : 1
    },
    {
        id:5,
        name: "Dark blue sofa",
        price: "40",
        category: "sofa" ,
        imageUrl : "./imges/products/08.jpg",
        count : 1
    },
    {
        id:6,
        name: "wood dresser",
        price: "65",
        category: "dresser" ,
        imageUrl : "./imges/products/14.jpg",
        count : 1
    },
    {
        id:7,
        name: "Blue chair",
        price: "25",
        category: "chair" ,
        imageUrl : "./imges/products/02.jpg",
        count : 1
    },
    {
        id:8,
        name: "Black sofa",
        price: "35",
        category: "sofa" ,
        imageUrl : "./imges/products/15.jpg",
        count : 1
    },
    {
        id:9,
        name: "Gray dresser",
        price: "70",
        category: "dresser" ,
        imageUrl : "./imges/products/13.jpg",
        count : 1
    },
    {
        id:10,
        name: "Blue chair",
        price: "20",
        category: "chair" ,
        imageUrl : "./imges/products/03.jpg",
        count : 1
    },
    {
        id:11,
        name: "Brown sofa",
        price: "50",
        category: "sofa" ,
        imageUrl : "./imges/products/07.jpg",
        count : 1
    },
    {
        id:12,
        name: "Green sofa",
        price: "45",
        category: "sofa" ,
        imageUrl : "./imges/products/16.jpg",
        count : 1
    },
    {
        id:13,
        name: "Blue office chair",
        price: "20",
        category: "chair" ,
        imageUrl : "./imges/products/04.jpg",
        count : 1
    },
    {
        id:14,
        name: "White dresser",
        price: "65",
        category: "dresser" ,
        imageUrl : "./imges/products/17.jpg",
        count : 1
    }  
]





function draw(){
    let d = products.map((item) => {
        return`
        <div class="shadow cart0-sec2">
        <div class="cart-sec2">
            <div class="img-sec2">
                <img src="${item.imageUrl}" alt="">
            </div>
            <div class="data-sec2">
                <p>product : ${item.name}</p>
                <p>price : ${item.price}</p>
                <p>Category : ${item.category}</p>
                <div>
                    <input type="button" class="btn-cart shadow" id="btn-cart-add${item.id}" onClick="addToCart(${item.id})" value="Add to cart">
                    <input type="button" class="btn-cart-remove btn-cart-remove2 shadow" id="remove-btn-cart-add${item.id}" onClick="removeFromCart(${item.id})" value="Remove from cart">
                    <i class="fas fa-heart icon-heart-st" id="heart-fev${item.id}" onClick="fevoritItem(${item.id})"></i>
                    <i class="fas fa-heart con-heart-st-rem" id="remove-heart-fev${item.id}" style ="display: none ;" onClick="removefevoritItem(${item.id})"></i>
                </div>
            </div>
        </div>
        </div>
        `
    })
    for (i = 0; i < d.length; i++) {
        var myobj = d[i];
        AllProducts.innerHTML += myobj;
    }
}
    
draw()

// -----  Hidden div & rotate icon  ----------------------------

let hiddenDivA =document.querySelector("#h-a-none");
let hiddenDiv =document.querySelector(".header-a-d");
let allProductsIn =document.querySelector("#header-a-d-allPro");

hiddenDivA.onclick = function(){
    if(allProductsIn.innerHTML != ""){
        document.body.classList.toggle("swich-data");
    }
}

// ---------  Check & Add To Cart /// ---------------------------------------------------

let spanCartNum =document.querySelector("#h-a-none span");
let btnCart =document.querySelectorAll("#btn-cart-add");

let cont = JSON.parse(localStorage.getItem("addedItem"))
var addedItem =[]

//Check function
function relaodfn1(){
    allProductsIn.innerHTML = ""
    if(localStorage.getItem("addedItem")){
        
        addedItem = [...cont]
        let m = addedItem.map((item) => {
            return `
            <div class="header-a-d2">
                <p>${item.name}</p>
                <div>
                <i class="fas fa-minus redicon" onClick="subNume(${item.id})"></i>
                <span class="sp-num-of-pro" id="sp${item.id}">1</span>
                <i class="fas fa-plus greenicon" onClick="sumNume(${item.id})"></i>
                </div>
            </div>`
        })
        for (i = 0; i < m.length; i++) {
            let myobj1 = m[i];
            allProductsIn.innerHTML += myobj1;
        }
        let cartprolingth = document.querySelectorAll("#header-a-d-allPro div div");
        spanCartNum.innerHTML = cartprolingth.length
    }
}
clearTimeout(relaodfn1())

// ------- btn loop to get ids

let btnCartAll = []

for (i = 1; i <= products.length; i++) {
    btnCartAll = [ ...btnCartAll , "btn-cart-add"+i];
}

//------- Add function
if(localStorage.getItem("usersname") && getx == "true"){
    function addToCart (id){
        let pro = products.find((item) => item.id === id)
        
        addedItem = [...addedItem ,pro]
        localStorage.setItem("addedItem",JSON.stringify(addedItem))

            allProductsIn.innerHTML += `
            <div class="header-a-d2">
                <p>${pro.name}</p>
                <div>
                <i class="fas fa-minus redicon" onClick="subNume(${pro.id})"></i>
                <span class="sp-num-of-pro" id="sp${pro.id}">${pro.count}</span>
                <i class="fas fa-plus greenicon" onClick="sumNume(${pro.id})"></i>
                </div>
            </div>`
    
        let cartprolingth = document.querySelectorAll("#header-a-d-allPro div div");
        spanCartNum.innerHTML = cartprolingth.length

    }

    btnCartAll.forEach(element => {
        let elem = document.querySelector(`#${element}`);
        let elemRemove = document.querySelector(`#${"remove-"+element}`);
        
        elem.addEventListener("click", function(){
            elem.style.display = 'none'
            elemRemove.style.display = 'block'
            
            let getbtnStatus = JSON.parse(localStorage.getItem("btnStatus"))

            if(localStorage.getItem("btnStatus")){
                let x = [...getbtnStatus]
                x = [...x , `${element}`]
                localStorage.setItem("btnStatus",JSON.stringify(x))
            }else{
                let x = []
                x = [`${element}`]
                localStorage.setItem("btnStatus",JSON.stringify(x))
            }
        })
    })

}else(
    btnCartAll.forEach(element => {
        let elem = document.querySelector(`#${element}`);
        elem.addEventListener("click", function(){
            window.location = ("login.html")
        })
    })
)

// ----- checkBtn remove & add in local Storage

function checkBtnAR(){
    if(localStorage.getItem("usersname") && getx == "true" && localStorage.getItem("btnStatus")){
        btnCartAll.map(element => {
            let elem = document.querySelector(`#${element}`);
            let elemRemove = document.querySelector(`#${"remove-"+element}`);
            let getbtnStatus = JSON.parse(localStorage.getItem("btnStatus"))

            getbtnStatus.map((item) => {
                if(item == element){
                    elem.style.display = 'none'
                    elemRemove.style.display = 'block'
                }
            })

        })
    }
}

clearTimeout(checkBtnAR())

//------- Remove product from cart



function removeFromCart(id){
    let getAddedItem = JSON.parse(localStorage.getItem("addedItem"))
    let getbtnStatus = JSON.parse(localStorage.getItem("btnStatus"))
    getAddedItem = getAddedItem.filter(item => item.id !== id);
    getbtnStatus = getbtnStatus.filter(item => item !== "btn-cart-add"+id);
    localStorage.setItem("addedItem",JSON.stringify(getAddedItem))
    localStorage.setItem("btnStatus",JSON.stringify(getbtnStatus))

    let elem = document.querySelector(`#${"btn-cart-add"+id}`);
    let elemRemove = document.querySelector(`#${"remove-btn-cart-add"+id}`);

    elem.style.display = 'block'
    elemRemove.style.display = 'none'

    // relaodfn1()

    function reloadfn(){
        if(localStorage.getItem("addedItem")){
            allProductsIn.innerHTML = ""
            let m = getAddedItem.map((item) => {
                return `
                <div class="header-a-d2">
                    <p>${item.name}</p>
                    <div>
                    <i class="fas fa-minus redicon" onClick="subNume(${item.id})"></i>
                    <span class="sp-num-of-pro" id="sp${item.id}">1</span>
                    <i class="fas fa-plus greenicon" onClick="sumNume(${item.id})"></i>
                    </div>
                </div>`
            })
            for (i = 0; i < m.length; i++) {
                let myobj1 = m[i];
                allProductsIn.innerHTML += myobj1;
            }
            let cartprolingth = document.querySelectorAll("#header-a-d-allPro div div");
            spanCartNum.innerHTML = cartprolingth.length
        }
    }
    reloadfn()
}

// ------  Search  ---------------------------------------------

const search=document.querySelector('#sec1Search')
const select1=document.querySelector('.select1')
const select2=document.querySelector('.select2')

  search.addEventListener('keyup',()=>{
    AllProducts.innerHTML=''

    if(search.value){
            if(select1.value=='checked'){
                for(let i =0;i<products.length;i++){
                    let myobj1 = products[i];
                    let xi = myobj1.name
                    if(xi.toLowerCase().includes(search.value)){
                        AllProducts.innerHTML+=`
                        <div class="shadow cart0-sec2">
                        <div class="cart-sec2">
                            <div class="img-sec2">
                                <img src="${myobj1.imageUrl}" alt="">
                            </div>
                            <div class="data-sec2">
                                <p>product : ${myobj1.name}</p>
                                <p>price : ${myobj1.price}</p>
                                <p>Category : ${myobj1.category}</p>
                                <div>
                                    <input type="button" class="btn-cart shadow" id="btn-cart-add${myobj1.id}" onClick="addToCart(${myobj1.id})" value="Add to cart">
                                    <input type="button" class="btn-cart-remove btn-cart-remove2 shadow" id="remove-btn-cart-add${myobj1.id}" onClick="removeFromCart(${myobj1.id})" value="Remove from cart">
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        </div>
                        `
                    }
                }
            }
            else{
                for(let i =1;i<products.length;i++){
                    let myobj1 = products[i];
                    let xi = myobj1.category
                    if(xi.toLowerCase().includes(search.value)){
                        row.innerHTML+=`
                        <div class="card col-lg-4 col-md-6 col-sm-12 mt-1 mb-1" style="width: 18rem;">
                            <img src="${product[i].img}" class="card-img-top" alt="product-1">
                                <div class="card-body">
                                    <h5 class="card-title">Product : ${product[i].name}</h5>
                                    <h5 class="card-text">Price :  ${product[i].price}</h5>
                                    <h5>Category : ${product[i].category}</h5>
                                        <div class="d-flex" style="justify-content: space-between;"> 
                                            <button class="btn btn-primary" id="${product[i].id}" onclick='addItems(this.id)'>Add to cart</button>
                                            <button class="btn btn-danger" id="${product[i].id}0000" onclick='removeItems(this.id)'>Remove from cart</button>
                                            <a href="#" style="margin-left: auto; display: inline-block;" ><i class="fas fa-heart" style="font-size: 1.5rem;" id="${product[i].id}00000" onclick='addFavourite(this.id)'></i></a>
                                        </div> 
                                </div>
                        </div> <!-- End of card -->
                        `
                    }
                }
            }
    }else{
        draw()
    }

})
 

 






