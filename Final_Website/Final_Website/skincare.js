var skincareArr = JSON.parse(localStorage.getItem("skincareData"));
//console.log(skincareArr);

var productInfoArr = [];
var AddtocartArr = JSON.parse(localStorage.getItem("AddtocartData"))||[];

function displayData(skincareArr){
    document.getElementById("parent").innerHTML="";
   
skincareArr.map(function(ele,index){
     


    var innerbox = document.createElement("div");
    innerbox.setAttribute("id","innerbox")
    

    innerbox.addEventListener("click",function(){
        productInfo(ele)
    })

    var pseudodiv = document.createElement("div")
    innerbox.addEventListener("mouseover",()=>{
        pseudodiv.style.display="flex"

    })
    innerbox.addEventListener("mouseleave",()=>{
        pseudodiv.style.display="none"
    })
    
       
        pseudodiv.setAttribute("id","pseudodiv")
        
        var heart = document.createElement("div")
        
        var hearticon = document.createElement("img");
        hearticon.setAttribute("src","data:image/png;base64,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")
        hearticon.style.width="30px";
        hearticon.style.height="30px"

        heart.append(hearticon);
        var cart = document.createElement("div")
        cart.innerHTML="<h5>ADD TO CART</h5>";

        pseudodiv.append(heart,cart)

        pseudodiv.addEventListener("click",function(){
            Addtocartfunction(ele);
        })
        


    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("id","imgdiv")
    var img = document.createElement("img");
    img.setAttribute("src",ele.image_url);
    img.setAttribute("id","img")
    imgdiv.append(img)

    var name = document.createElement("h4");
    name.innerText=ele.name;

    var pricediv = document.createElement("div");
    pricediv.setAttribute("id","pricediv");

    var rs = document.createElement("p")
    rs.innerText="Rs."

    var price = document.createElement("p");
    price.innerText=ele.price;
    price.setAttribute("id","price")

    var stardiv = document.createElement("div")
    stardiv.setAttribute("id","stardiv")

    var star = document.createElement("img");
    star.setAttribute("src","https://in.sugarcosmetics.com/star_filled.png");
    star.setAttribute("id","star")

    var rating = document.createElement("p");
    rating.innerText=ele.rating;

   

    pricediv.append(rs,price)

    stardiv.append(star,rating)

    var innerinnerbox = document.createElement("div");
    innerinnerbox.append(imgdiv,name,pricediv,stardiv)

    
    innerbox.append(innerinnerbox,pseudodiv);
    document.getElementById("parent").append(innerbox)
})
}
displayData(skincareArr);


function sortItems(){
    var sorting = document.getElementById("sort").value;

    if(sorting=="h2l"){
        skincareArr.sort(function(a,b){
            return b.price-a.price
        })
        displayData(skincareArr);
    }
    if(sorting=="l2h"){
        skincareArr.sort(function(a,b){
            return a.price-b.price
        })
        displayData(skincareArr);
    }
    if(sorting=="Relevance"){
        displayData(skincareArr);
    }
}

function productInfo(ele){
    productInfoArr.push(ele);
    localStorage.setItem("productInfoData",JSON.stringify(productInfoArr));

    window.location.href="productInfo.html"
}


function Addtocartfunction(ele){
    AddtocartArr.push(ele);
    localStorage.setItem("AddtocartData",JSON.stringify(AddtocartArr))
    window.location.href="AddToCartPage.html"
   
}


