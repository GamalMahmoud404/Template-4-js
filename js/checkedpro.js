
let checkedProDrow =document.querySelector("#checkedProDrow")
let getAddedItem = JSON.parse(localStorage.getItem("addedItem"))

if(localStorage.getItem("addedItem")){
    function draw(){
        let d = getAddedItem.map((item) => {
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
                        <div>
                        <i class="fas fa-minus redicon" onClick="subNume(${item.id})"></i>
                        <span class="sp-num-of-pro" id="sp${item.id}">${item.count}</span>
                        <i class="fas fa-plus greenicon" onClick="sumNume(${item.id})"></i>
                        </div>
                        <input type="button" class="btn-cart-remove shadow" id="remove-btn-cart-add${item.id}" onClick="removeFromCart(${item.id})" value="Remove from cart">
                    </div>
                </div>
            </div>
            </div>
            `
        })
        for (i = 0; i < d.length; i++) {
            let myobj = d[i];
            checkedProDrow.innerHTML += myobj;
        }
    }

    draw()
}

//------- Remove product from cart

function removeFromCart(id){
    let getbtnStatus = JSON.parse(localStorage.getItem("btnStatus"))
    getAddedItem = getAddedItem.filter(item => item.id !== id);
    getbtnStatus = getbtnStatus.filter(item => item !== "btn-cart-add"+id);
    localStorage.setItem("addedItem",JSON.stringify(getAddedItem))
    localStorage.setItem("btnStatus",JSON.stringify(getbtnStatus))
    
    if(localStorage.getItem("addedItem")){
        function draw2(){
            checkedProDrow.innerHTML = "";
            let d = getAddedItem.map((item) => {
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
                            <div>
                                <i class="fas fa-minus redicon" onClick="subNume(${item.id})"></i>
                                <span class="sp-num-of-pro" id="sp${item.id}">${item.count}</span>
                                <i class="fas fa-plus greenicon" onClick="sumNume(${item.id})"></i>
                            </div>
                            <input type="button" class="btn-cart-remove shadow" id="remove-btn-cart-add${item.id}" onClick="removeFromCart(${item.id})" value="Remove from cart">
                        </div>
                    </div>
                </div>
                </div>
                `
            })
            for (i = 0; i < d.length; i++) {
                let myobj = d[i];
                checkedProDrow.innerHTML += myobj;
            }
        }
    
        draw2()
    }
}

//---------- Fervorit 



let checkedProDrow2 =document.querySelector("#checkedProDrow2")
let getAddedFevorit = JSON.parse(localStorage.getItem("addedFevorit"))

if(localStorage.getItem("addedFevorit")){
    function drawfev(){
        let d = getAddedFevorit.map((item) => {
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
                    <i class="fas fa-heart icon-heart-st" id="heart-fev${item.id}" onClick="fevoritItem(${item.id})"></i>
                    <i class="fas fa-heart con-heart-st-rem" id="remove-heart-fev${item.id}" style ="display: none ;" onClick="removefevoritItem(${item.id})"></i>
                    </div>
                </div>
            </div>
            </div>
            `
        })
        for (i = 0; i < d.length; i++) {
            let myobj = d[i];
            checkedProDrow2.innerHTML += myobj;
        }

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

    drawfev()
}

//------- Remove fevotit

function removefevoritItem(id){
    let getheartStatus = JSON.parse(localStorage.getItem("heartStatus"))
    getAddedFevorit = getAddedFevorit.filter(item => item.id !== id);
    getheartStatus = getheartStatus.filter(item => item !== "btn-cart-add"+id);
    localStorage.setItem("addedFevorit",JSON.stringify(getAddedFevorit))
    localStorage.setItem("heartStatus",JSON.stringify(getheartStatus))
    
    if(localStorage.getItem("addedItem")){
        function drawfev2(){
            checkedProDrow.innerHTML = "";
            let d = getAddedFevorit.map((item) => {
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
                        <i class="fas fa-heart icon-heart-st" id="heart-fev${item.id}" onClick="fevoritItem(${item.id})"></i>
                        <i class="fas fa-heart con-heart-st-rem" id="remove-heart-fev${item.id}" style ="display: none ;" onClick="removefevoritItem(${item.id})"></i>
                        </div>
                    </div>
                </div>
                </div>
                `
            })
            for (i = 0; i < d.length; i++) {
                let myobj = d[i];
                checkedProDrow2.innerHTML += myobj;
            }
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
    
        drawfev2()
    }
}





    
