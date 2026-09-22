let navber_container=document.querySelector(".navber-container")
navber_container.style.top=0;
window.onscroll=function(){
    if(scrollY>1){
        navber_container.style.paddingTop=0;
    }else{
        navber_container.style.paddingTop="22px";
    }
}

let sale=document.getElementById("SALE");
let EVO_SL=document.getElementById("EVO-SL");
if (sale) {
sale.addEventListener("click",function(e){
    e.preventDefault();
       sale.style.background="black";
      sale.style.color="white";
      EVO_SL.style.background="white";
      EVO_SL.style.color="black";
});
}
if(EVO_SL){
EVO_SL.addEventListener("click",function(e){
      e.preventDefault();
      EVO_SL.style.background="black";
      EVO_SL.style.color="white";
      sale.style.background="white";
      sale.style.color="black";
});
}
let image_choose=document.querySelectorAll(".image-choose")
for(let x=1;x<image_choose.length;x++){
EVO_SL.addEventListener("click",function(e){
     e.preventDefault();
       image_choose[x].src = "image/evo-" +x + ".jpg";
});
}

for(let x=1;x<image_choose.length;x++){
sale.addEventListener("click",function(e){
     e.preventDefault();
       image_choose[x].src = "image/choose-hero-" + x + ".jpg";
});
}
let image_product = document.querySelectorAll(".image-product")
let product_cart_container = document.querySelectorAll(".product-cart-container") 
let school = document.getElementById("school");
let school_gallery=document.querySelectorAll(".gallery")
let img_gallery=[
        "image/prodect-gallery-1.jpg",
    "image/prodect-gallery-2.jpg",
    "image/prodect-gallery-3.jpg",
    "image/prodect-gallery-4.jpg"

]
let img_gallery_1=[
    "image/gallery-2-1.jpg",
    "image/gallery-2-2.jpg",
    "image/gallery-2-3.jpg",
    "image/gallery-2-4.jpg",
]
let img_gallery_2=[
    "image/gallary-3-1.jpg",
    "image/gallary-3-2.jpg",
    "image/gallary-3-3.jpg",
    "image/gallary-3-4.jpg",
    "image/gallary-3-5.jpg",
]
let img_gallery_3=[
     "image/gallary-3-2.jpg",
    "image/gallary-3-3.jpg",
     "image/gallery-2-2.jpg",
    "image/gallery-2-3.jpg",
]
function showProducts(type) {

    for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {

            if (m == p) {

                product_cart_container[p].addEventListener("mouseenter", function() {

                    image_product[m].src = "image/prodect-school-1-" + (m + 1) + ".jpg";

                })

                product_cart_container[p].addEventListener("mouseleave", function() {

                    image_product[m].src = "image/prodect-school-" + (m + 1) + ".jpg";

                })

            }

        }

    }
    if(school_gallery[0]){
    for(let g=0;g<img_gallery.length;g++){
         let image = document.createElement("img");
 image.src = img_gallery[g]
    school_gallery[0].appendChild(image)    
        image.addEventListener("mouseenter", function(){

        image_product[0].src = image.src;

    })
}
    }
for(let p = 0; p < product_cart_container.length; p++){

    product_cart_container[0].addEventListener("mouseenter", function(){

        school_gallery[0].style.display = "flex";

    })

    product_cart_container[0].addEventListener("mouseleave", function(){

        school_gallery[0].style.display = "none";

    })
      product_cart_container[1].addEventListener("mouseenter", function(){

        school_gallery[1].style.display = "flex";

    })

    product_cart_container[1].addEventListener("mouseleave", function(){

        school_gallery[1].style.display = "none";

    })
     product_cart_container[2].addEventListener("mouseenter", function(){

        school_gallery[2].style.display = "flex";

    })

    product_cart_container[2].addEventListener("mouseleave", function(){

        school_gallery[2].style.display = "none";

    })
       product_cart_container[3].addEventListener("mouseenter", function(){

        school_gallery[3].style.display = "flex";

    })

    product_cart_container[3].addEventListener("mouseleave", function(){

        school_gallery[3].style.display = "none";

    })

}
if(school_gallery[1]){
for(let g = 0; g < img_gallery_1.length; g++){

    let image = document.createElement("img");

    image.src = img_gallery_1[g];

    school_gallery[1].appendChild(image);

    image.addEventListener("mouseenter", function(){

        image_product[1].src = image.src;

    })

}
}
if(school_gallery[2]){
for(let g = 0; g < img_gallery_1.length; g++){

    let image = document.createElement("img");

    image.src = img_gallery_2[g];

    school_gallery[2].appendChild(image);

    image.addEventListener("mouseenter", function(){

        image_product[2].src = image.src;

    })

}
}
if(school_gallery[3]){
for(let g = 0; g < img_gallery_1.length; g++){

    let image = document.createElement("img");

    image.src = img_gallery_3[g];

    school_gallery[3].appendChild(image);

    image.addEventListener("mouseenter", function(){

        image_product[3].src = image.src;

    })

}
}
}

let man = [
    {
        image: "image/man-1.jpg",
        titlle: "Adidas Running Shoes",
        price: "EGP 1,850",
    },

    {
        image: "image/man-2.jpg",
        titlle: "Adidas Essentials T-Shirt",
        price: "EGP 750",
    },

    {
        image: "image/man-3.jpg",
        titlle: "Adidas Sports Jacket",
        price: "EGP 2,200",
    },

    {
        image: "image/man-4.jpg",
        titlle: "Adidas Training Pants",
        price: "EGP 1,150",
    },

    {
        image: "image/man-5.jpg",
        titlle: "Adidas Casual Sneakers",
        price: "EGP 1,950",
    },

    {
        image: "image/man-6.jpg",
        titlle: "Adidas Performance Hoodie",
        price: "EGP 1,650",
    },

    {
        image: "image/man-7.jpg",
        titlle: "Adidas Football Jersey",
        price: "EGP 1,300",
    },

    {
        image: "image/man-8.jpg",
        titlle: "Adidas Sport Shorts",
        price: "EGP 850",
    },

    {
        image: "image/man-10.jpg",
        titlle: "Adidas Classic Backpack",
        price: "EGP 1,100",
    },

    {
        image: "image/man-10.jpg",
        titlle: "Adidas Urban Sneakers",
        price: "EGP 2,350",
    },

    {
        image: "image/man-11.jpg",
        titlle: "Adidas Cotton T-Shirt",
        price: "EGP 650",
    },

    {
        image: "image/man-12.jpg",
        titlle: "Adidas Windbreaker Jacket",
        price: "EGP 2,450",
    },

    {
        image: "image/man-13.jpg",
        titlle: "Adidas Training Shoes",
        price: "EGP 1,750",
    },

    {
        image: "image/man-19.jpg",
        titlle: "Adidas Sports Polo",
        price: "EGP 950",
    },

    {
        image: "image/man-15.jpg",
        titlle: "Adidas Fleece Hoodie",
        price: "EGP 1,800",
    },

    {
        image: "image/man-16.jpg",
        titlle: "Adidas Running Shorts",
        price: "EGP 900",
    },

    {
        image: "image/man-17.jpg",
        titlle: "Adidas Lifestyle Shoes",
        price: "EGP 2,100",
    },

    {
        image: "image/man-18.jpg",
        titlle: "Adidas Track Pants",
        price: "EGP 1,250",
    },

    {
        image: "image/man-19.jpg",
        titlle: "Adidas Sports T-Shirt",
        price: "EGP 800",
    },

    {
        image: "image/man-20.jpg",
        titlle: "Adidas Premium Sneakers",
        price: "EGP 2,600",
    }
]
let women = [

    {
        image: "image/women-1.jpg",
        titlle: "Adidas Women's Running Shoes",
        price: "EGP 1,850"
    },

    {
        image: "image/women-2.jpg",
        titlle: "Adidas Women's Sports T-Shirt",
        price: "EGP 750"
    },

    {
        image: "image/women-3.jpg",
        titlle: "Adidas Women's Training Jacket",
        price: "EGP 2,200"
    },

    {
        image: "image/women-4.jpg",
        titlle: "Adidas Women's Training Pants",
        price: "EGP 1,150"
    },

    {
        image: "image/women-5.jpg",
        titlle: "Adidas Women's Casual Sneakers",
        price: "EGP 1,950"
    },

    {
        image: "image/women-6.jpg",
        titlle: "Adidas Women's Performance Hoodie",
        price: "EGP 1,650"
    },

    {
        image: "image/women-7.jpg",
        titlle: "Adidas Women's Football Jersey",
        price: "EGP 1,300"
    },

    {
        image: "image/women-8.jpg",
        titlle: "Adidas Women's Sport Shorts",
        price: "EGP 850"
    },

    {
        image: "image/women-9.jpg",
        titlle: "Adidas Women's Classic Backpack",
        price: "EGP 1,100"
    },

    {
        image: "image/women-10.jpg",
        titlle: "Adidas Women's Urban Sneakers",
        price: "EGP 2,350"
    },

    {
        image: "image/women-11.jpg",
        titlle: "Adidas Women's Cotton T-Shirt",
        price: "EGP 650"
    },

    {
        image: "image/women-12.jpg",
        titlle: "Adidas Women's Windbreaker",
        price: "EGP 2,450"
    },

    {
        image: "image/women-13.jpg",
        titlle: "Adidas Women's Training Shoes",
        price: "EGP 1,750"
    },

    {
        image: "image/women-14.jpg",
        titlle: "Adidas Women's Sports Polo",
        price: "EGP 950"
    },

    {
        image: "image/women-15.jpg",
        titlle: "Adidas Women's Fleece Hoodie",
        price: "EGP 1,800"
    },

    {
        image: "image/women-16.jpg",
        titlle: "Adidas Women's Running Shorts",
        price: "EGP 900"
    },

    {
        image: "image/women-17.jpg",
        titlle: "Adidas Women's Lifestyle Shoes",
        price: "EGP 2,100"
    },

    {
        image: "image/women-18.jpg",
        titlle: "Adidas Women's Track Pants",
        price: "EGP 1,250"
    },

    {
        image: "image/women-10.jpg",
        titlle: "Adidas Women's Sports T-Shirt",
        price: "EGP 800"
    },

    {
        image: "image/women-20.jpg",
        titlle: "Adidas Women's Premium Sneakers",
        price: "EGP 2,600"
    }

]
let kids = [

    {
        image: "image/kids-1.jpg",
        titlle: "Adidas Kids' Running Shoes",
        price: "EGP 1,850"
    },

    {
        image: "image/kids-2.jpg",
        titlle: "Adidas Kids' Sports T-Shirt",
        price: "EGP 750"
    },

    {
        image: "image/kids-3.jpg",
        titlle: "Adidas Kids' Training Jacket",
        price: "EGP 2,200"
    },

    {
        image: "image/kids-4.jpg",
        titlle: "Adidas Kids' Training Pants",
        price: "EGP 1,150"
    },

    {
        image: "image/kids-5.jpg",
        titlle: "Adidas Kids' Casual Sneakers",
        price: "EGP 1,950"
    },

    {
        image: "image/kids-6.jpg",
        titlle: "Adidas Kids' Performance Hoodie",
        price: "EGP 1,650"
    },

    {
        image: "image/kids-7.jpg",
        titlle: "Adidas Kids' Football Jersey",
        price: "EGP 1,300"
    },

    {
        image: "image/kids-8.jpg",
        titlle: "Adidas Kids' Sport Shorts",
        price: "EGP 850"
    },

    {
        image: "image/kids-9.jpg",
        titlle: "Adidas Kids' Classic Backpack",
        price: "EGP 1,100"
    },

    {
        image: "image/kids-10.jpg",
        titlle: "Adidas Kids' Urban Sneakers",
        price: "EGP 2,350"
    },

    {
        image: "image/kids-11.jpg",
        titlle: "Adidas Kids' Cotton T-Shirt",
        price: "EGP 650"
    },

    {
        image: "image/kids-12.jpg",
        titlle: "Adidas Kids' Windbreaker",
        price: "EGP 2,450"
    },

    {
        image: "image/kids-13.jpg",
        titlle: "Adidas Kids' Training Shoes",
        price: "EGP 1,750"
    },

    {
        image: "image/kids-14.jpg",
        titlle: "Adidas Kids' Sports Polo",
        price: "EGP 950"
    },

    {
        image: "image/kids-15.jpg",
        titlle: "Adidas Kids' Fleece Hoodie",
        price: "EGP 1,800"
    },

    {
        image: "image/kids-16.jpg",
        titlle: "Adidas Kids' Running Shorts",
        price: "EGP 900"
    },

    {
        image: "image/kids-17.jpg",
        titlle: "Adidas Kids' Lifestyle Shoes",
        price: "EGP 2,100"
    },

    {
        image: "image/kids-18.jpg",
        titlle: "Adidas Kids' Track Pants",
        price: "EGP 1,250"
    },

    {
        image: "image/kids-19.jpg",
        titlle: "Adidas Kids' Sports T-Shirt",
        price: "EGP 800"
    },

    {
        image: "image/kids-20.jpg",
        titlle: "Adidas Kids' Premium Sneakers",
        price: "EGP 2,600"
    }

]
let sport = [

    {
        image: "image/sport-1.jpg",
        titlle: "Adidas Sport Running Shoes",
        price: "EGP 1,850"
    },

    {
        image: "image/sport-2.jpg",
        titlle: "Adidas Sport Sports T-Shirt",
        price: "EGP 750"
    },

    {
        image: "image/sport-3.jpg",
        titlle: "Adidas Sport Training Jacket",
        price: "EGP 2,200"
    },

    {
        image: "image/sport-4.jpg",
        titlle: "Adidas Sport Training Pants",
        price: "EGP 1,150"
    },

    {
        image: "image/sport-5.jpg",
        titlle: "Adidas Sport Casual Sneakers",
        price: "EGP 1,950"
    },

    {
        image: "image/sport-6.jpg",
        titlle: "Adidas Sport Performance Hoodie",
        price: "EGP 1,650"
    },

    {
        image: "image/sport-7.jpg",
        titlle: "Adidas Sport Football Jersey",
        price: "EGP 1,300"
    },

    {
        image: "image/sport-8.jpg",
        titlle: "Adidas Sport Shorts",
        price: "EGP 850"
    },

    {
        image: "image/sport-9.jpg",
        titlle: "Adidas Sport Classic Backpack",
        price: "EGP 1,100"
    },

    {
        image: "image/sport-10.jpg",
        titlle: "Adidas Sport Urban Sneakers",
        price: "EGP 2,350"
    },

    {
        image: "image/sport-11.jpg",
        titlle: "Adidas Sport Cotton T-Shirt",
        price: "EGP 650"
    },

    {
        image: "image/sport-12.jpg",
        titlle: "Adidas Sport Windbreaker",
        price: "EGP 2,450"
    },

    {
        image: "image/sport-13.jpg",
        titlle: "Adidas Sport Training Shoes",
        price: "EGP 1,750"
    },

    {
        image: "image/sport-14.jpg",
        titlle: "Adidas Sport Sports Polo",
        price: "EGP 950"
    },

    {
        image: "image/sport-15.jpg",
        titlle: "Adidas Sport Fleece Hoodie",
        price: "EGP 1,800"
    },

    {
        image: "image/sport-16.jpg",
        titlle: "Adidas Sport Running Shorts",
        price: "EGP 900"
    },

    {
        image: "image/sport-17.jpg",
        titlle: "Adidas Sport Lifestyle Shoes",
        price: "EGP 2,100"
    },

    {
        image: "image/sport-18.jpg",
        titlle: "Adidas Sport Track Pants",
        price: "EGP 1,250"
    },

    {
        image: "image/sport-19.jpg",
        titlle: "Adidas Sport Sports T-Shirt",
        price: "EGP 800"
    },

    {
        image: "image/sport-20.jpg",
        titlle: "Adidas Sport Premium Sneakers",
        price: "EGP 2,600"
    }

]
let LIFESTYLE = [

    {
        image: "image/LIFESTYLE-1.jpg",
        titlle: "Adidas Lifestyle Sneakers",
        price: "EGP 2,150"
    },

    {
        image: "image/LIFESTYLE-2.jpg",
        titlle: "Adidas Lifestyle T-Shirt",
        price: "EGP 850"
    },

    {
        image: "image/LIFESTYLE-3.jpg",
        titlle: "Adidas Lifestyle Hoodie",
        price: "EGP 1,750"
    },

    {
        image: "image/LIFESTYLE-4.jpg",
        titlle: "Adidas Lifestyle Track Pants",
        price: "EGP 1,350"
    },

    {
        image: "image/LIFESTYLE-5.jpg",
        titlle: "Adidas Streetwear Shoes",
        price: "EGP 2,450"
    },

    {
        image: "image/LIFESTYLE-6.jpg",
        titlle: "Adidas Casual Jacket",
        price: "EGP 2,100"
    },

    {
        image: "image/LIFESTYLE-7.jpg",
        titlle: "Adidas Classic Sneakers",
        price: "EGP 1,950"
    },

    {
        image: "image/LIFESTYLE-8.jpg",
        titlle: "Adidas Lifestyle Shorts",
        price: "EGP 900"
    },

    {
        image: "image/LIFESTYLE-9.jpg",
        titlle: "Adidas Everyday Backpack",
        price: "EGP 1,250"
    },

    {
        image: "image/LIFESTYLE-10.jpg",
        titlle: "Adidas Urban Running Shoes",
        price: "EGP 2,350"
    },

    {
        image: "image/LIFESTYLE-11.jpg",
        titlle: "Adidas Essentials T-Shirt",
        price: "EGP 700"
    },

    {
        image: "image/LIFESTYLE-12.jpg",
        titlle: "Adidas Lightweight Windbreaker",
        price: "EGP 2,550"
    },

    {
        image: "image/LIFESTYLE-13.jpg",
        titlle: "Adidas Lifestyle Training Shoes",
        price: "EGP 1,850"
    },

    {
        image: "image/LIFESTYLE-14.jpg",
        titlle: "Adidas Casual Polo Shirt",
        price: "EGP 1,050"
    },

    {
        image: "image/LIFESTYLE-15.jpg",
        titlle: "Adidas Premium Fleece Hoodie",
        price: "EGP 1,900"
    },

    {
        image: "image/LIFESTYLE-16.jpg",
        titlle: "Adidas Casual Running Shorts",
        price: "EGP 950"
    },

    {
        image: "image/LIFESTYLE-17.jpg",
        titlle: "Adidas Lifestyle Court Shoes",
        price: "EGP 2,250"
    },

    {
        image: "image/LIFESTYLE-18.jpg",
        titlle: "Adidas Classic Track Pants",
        price: "EGP 1,400"
    },

    {
        image: "image/LIFESTYLE-19.jpg",
        titlle: "Adidas Graphic T-Shirt",
        price: "EGP 800"
    },

    {
        image: "image/LIFESTYLE-20.jpg",
        titlle: "Adidas Premium Lifestyle Shoes",
        price: "EGP 2,750"
    }

]
let shoses = [

    {
        image: "image/shoses-1.jpg",
        titlle: "Adidas Running Shoes",
        price: "EGP 2,320"
    },

    {
        image: "image/shoses-2.jpg",
        titlle: "Adidas Court Sneakers",
        price: "EGP 1,890"
    },

    {
        image: "image/shoses-3.jpg",
        titlle: "Adidas Street Shoes",
        price: "EGP 2,150"
    },

    {
        image: "image/shoses-4.jpg",
        titlle: "Adidas Daily Sneakers",
        price: "EGP 1,760"
    },

    {
        image: "image/shoses-5.jpg",
        titlle: "Adidas Samba Shoes",
        price: "EGP 2,780"
    },

    {
        image: "image/shoses-6.jpg",
        titlle: "Adidas Casual Shoes",
        price: "EGP 2,090"
    },

    {
        image: "image/shoses-7.jpg",
        titlle: "Adidas Gazelle Sneakers",
        price: "EGP 1,960"
    },

    {
        image: "image/shoses-8.jpg",
        titlle: "Adidas Basketball Shoes",
        price: "EGP 2,450"
    },

    {
        image: "image/shoses-9.jpg",
        titlle: "Adidas Classic Sneakers",
        price: "EGP 1,320"
    },

    {
        image: "image/shoses-10.jpg",
        titlle: "Adidas Ultraboost Shoes",
        price: "EGP 2,650"
    },

    {
        image: "image/shoses-11.jpg",
        titlle: "Adidas Everyday Shoes",
        price: "EGP 1,580"
    },

    {
        image: "image/shoses-12.jpg",
        titlle: "Adidas Sport Sneakers",
        price: "EGP 2,480"
    },

    {
        image: "image/shoses-13.jpg",
        titlle: "Adidas Training Shoes",
        price: "EGP 1,620"
    },

    {
        image: "image/shoses-14.jpg",
        titlle: "Adidas Court Shoes",
        price: "EGP 1,920"
    },

    {
        image: "image/shoses-15.jpg",
        titlle: "Adidas Premium Shoes",
        price: "EGP 2,350"
    },

    {
        image: "image/shoses-16.jpg",
        titlle: "Adidas Lifestyle Sneakers",
        price: "EGP 1,840"
    },

    {
        image: "image/shoses-17.jpg",
        titlle: "Adidas Running Sneakers",
        price: "EGP 2,240"
    },

    {
        image: "image/shoses-18.jpg",
        titlle: "Adidas Track Shoes",
        price: "EGP 1,690"
    },

    {
        image: "image/shoses-19.jpg",
        titlle: "Adidas Logo Sneakers",
        price: "EGP 2,050"
    },

    {
        image: "image/shoses-20.jpg",
        titlle: "Adidas Premium Sneakers",
        price: "EGP 2,690"
    }

]
let Clothing = [

    {
        image: "image/Clothing-1.jpg",
        titlle: "Adidas Essential T-Shirt",
        price: "EGP 720"
    },

    {
        image: "image/Clothing-2.jpg",
        titlle: "Adidas Sports Hoodie",
        price: "EGP 1,650"
    },

    {
        image: "image/Clothing-3.jpg",
        titlle: "Adidas Training Jacket",
        price: "EGP 2,250"
    },

    {
        image: "image/Clothing-4.jpg",
        titlle: "Adidas Classic Track Pants",
        price: "EGP 1,280"
    },

    {
        image: "image/Clothing-5.jpg",
        titlle: "Adidas Performance T-Shirt",
        price: "EGP 890"
    },

    {
        image: "image/Clothing-6.jpg",
        titlle: "Adidas Casual Hoodie",
        price: "EGP 1,850"
    },

    {
        image: "image/Clothing-7.jpg",
        titlle: "Adidas Training Pants",
        price: "EGP 1,350"
    },

    {
        image: "image/Clothing-8.jpg",
        titlle: "Adidas Sport Shorts",
        price: "EGP 780"
    },

    {
        image: "image/Clothing-9.jpg",
        titlle: "Adidas Windbreaker Jacket",
        price: "EGP 2,480"
    },

    {
        image: "image/Clothing-10.jpg",
        titlle: "Adidas Cotton T-Shirt",
        price: "EGP 650"
    },

    {
        image: "image/Clothing-11.jpg",
        titlle: "Adidas Fleece Sweatshirt",
        price: "EGP 1,550"
    },

    {
        image: "image/Clothing-12.jpg",
        titlle: "Adidas Running Shorts",
        price: "EGP 920"
    },

    {
        image: "image/Clothing-13.jpg",
        titlle: "Adidas Sports Polo",
        price: "EGP 1,100"
    },

    {
        image: "image/Clothing-14.jpg",
        titlle: "Adidas Premium Hoodie",
        price: "EGP 1,950"
    },

    {
        image: "image/Clothing-15.jpg",
        titlle: "Adidas Performance Jacket",
        price: "EGP 2,350"
    }

]
let Running = [

    {
        image: "image/Running-1.jpg",
        titlle: "Adidas Urban T-Shirt",
        price: "EGP 720"
    },

    {
        image: "image/Running-2.jpg",
        titlle: "Adidas Street Hoodie",
        price: "EGP 1,650"
    },

    {
        image: "image/Running-3.jpg",
        titlle: "Adidas Classic Jacket",
        price: "EGP 2,250"
    },

    {
        image: "image/Running-4.jpg",
        titlle: "Adidas Sport Pants",
        price: "EGP 1,280"
    },

    {
        image: "image/Running-5.jpg",
        titlle: "Adidas Daily T-Shirt",
        price: "EGP 890"
    },

    {
        image: "image/Running-6.jpg",
        titlle: "Adidas Comfort Hoodie",
        price: "EGP 1,850"
    },

    {
        image: "image/Running-7.jpg",
        titlle: "Adidas Active Pants",
        price: "EGP 1,350"
    },

    {
        image: "image/Running-8.jpg",
        titlle: "Adidas Summer Shorts",
        price: "EGP 780"
    },

    {
        image: "image/Running-9.jpg",
        titlle: "Adidas Outdoor Jacket",
        price: "EGP 2,480"
    },

    {
        image: "image/Running-10.jpg",
        titlle: "Adidas Cotton Tee",
        price: "EGP 650"
    },

    {
        image: "image/Running-11.jpg",
        titlle: "Adidas Winter Sweatshirt",
        price: "EGP 1,550"
    },

    {
        image: "image/Running-12.jpg",
        titlle: "Adidas Motion Shorts",
        price: "EGP 920"
    },

    {
        image: "image/Running-13.jpg",
        titlle: "Adidas Sport Polo",
        price: "EGP 1,100"
    },

    {
        image: "image/Running-14.jpg",
        titlle: "Adidas Premium Sweatshirt",
        price: "EGP 1,950"
    },

    {
        image: "image/Running-15.jpg",
        titlle: "Adidas Performance Coat",
        price: "EGP 2,350"
    },

    {
        image: "image/Running-16.jpg",
        titlle: "Adidas Training Tee",
        price: "EGP 850"
    },

    {
        image: "image/Running-17.jpg",
        titlle: "Adidas Active Sweatshirt",
        price: "EGP 1,450"
    },

    {
        image: "image/Running-18.jpg",
        titlle: "Adidas Everyday Hoodie",
        price: "EGP 1,750"
    }

]
let football = [

    {
        image: "image/football-1.jpg",
        titlle: "Adidas Football Jersey",
        price: "EGP 1,250"
    },

    {
        image: "image/football-2.jpg",
        titlle: "Adidas Football Boots",
        price: "EGP 2,850"
    },

    {
        image: "image/football-3.jpg",
        titlle: "Adidas Football Shorts",
        price: "EGP 890"
    },

    {
        image: "image/football-4.jpg",
        titlle: "Adidas Training Jersey",
        price: "EGP 1,450"
    },

    {
        image: "image/football-5.jpg",
        titlle: "Adidas Football T-Shirt",
        price: "EGP 750"
    },

    {
        image: "image/football-6.jpg",
        titlle: "Adidas Club Jersey",
        price: "EGP 1,850"
    },

    {
        image: "image/football-7.jpg",
        titlle: "Adidas Football Pants",
        price: "EGP 1,150"
    },

    {
        image: "image/football-8.jpg",
        titlle: "Adidas Football Socks",
        price: "EGP 420"
    },

    {
        image: "image/football-9.jpg",
        titlle: "Adidas Match Jersey",
        price: "EGP 1,650"
    },

    {
        image: "image/football-10.jpg",
        titlle: "Adidas Football Tracksuit",
        price: "EGP 2,350"
    },

    {
        image: "image/football-11.jpg",
        titlle: "Adidas Performance Jersey",
        price: "EGP 1,350"
    },

    {
        image: "image/football-12.jpg",
        titlle: "Adidas Football Gloves",
        price: "EGP 980"
    },

    {
        image: "image/football-13.jpg",
        titlle: "Adidas Training Shorts",
        price: "EGP 680"
    },

    {
        image: "image/football-14.jpg",
        titlle: "Adidas Football Hoodie",
        price: "EGP 1,750"
    },

    {
        image: "image/football-15.jpg",
        titlle: "Adidas Stadium Jacket",
        price: "EGP 2,150"
    },

    {
        image: "image/football-16.jpg",
        titlle: "Adidas Football Top",
        price: "EGP 1,100"
    },

    {
        image: "image/football-17.jpg",
        titlle: "Adidas Team Tracksuit",
        price: "EGP 2,650"
    },

    {
        image: "image/football-18.jpg",
        titlle: "Adidas Football Training Top",
        price: "EGP 1,550"
    },

    {
        image: "image/football-19.jpg",
        titlle: "Adidas Football Windbreaker",
        price: "EGP 2,450"
    },

    {
        image: "image/football-20.jpg",
        titlle: "Adidas Football Performance Kit",
        price: "EGP 2,950"
    }

]
let basket = [

    {
        image: "image/basket-1.jpg",
        titlle: "Adidas Basketball Jersey",
        price: "EGP 1,450"
    },

    {
        image: "image/basket-2.jpg",
        titlle: "Adidas Basketball Shoes",
        price: "EGP 2,750"
    },

    {
        image: "image/basket-3.jpg",
        titlle: "Adidas Basketball Shorts",
        price: "EGP 850"
    },

    {
        image: "image/basket-4.jpg",
        titlle: "Adidas Basketball T-Shirt",
        price: "EGP 1,150",
    },
    
    {
        image: "image/basket-5.jpg",
        titlle: "Adidas Basketball T-Shirt",
        price: "EGP 1,000"
    }

]
let link_prodect=document.querySelectorAll(".link-prodect")
function showcart(cart){
    for(let e=cart.length;e<20;e++){
link_prodect[e].style.display="none"
    }
    for(let z=0; z<cart.length;z++){
    let box=document.querySelector(".img"+z)
    let image_cart = box.querySelector(".image-product")
        image_cart.src = cart[z].image;
let cart_title=document.querySelectorAll(".title-product")[z]
let cart_prodect=document.querySelectorAll(".price-product")[z]
cart_title.innerHTML=cart[z].titlle
cart_prodect.innerHTML=cart[z].price    
    }
}
function Manhover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/man-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/man-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="Men's Collection";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.style.display="none";  
    }
    function womenhover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/women-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/women-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="women's Collection";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.style.display="none";  
    }
    function kidshover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/kids-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/kids-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="kid's Collection";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.style.display="none";  
    }
  function sporthover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/sport-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/sport-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="sport's Collection";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.style.display="none";  
    }
  function LIFESTYLEhover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/LIFESTYLE-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/LIFESTYLE-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="adidas ZNE Collection";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.innerHTML="Focus on what you're doing and not your clothes when you wear our ADIDAS Z.N.E. collection. Thoughtful details help you keep distractions at bay.";  
    }
      function shoseshover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/shoses-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/shoses-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="Shoes";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.innerHTML="Walk the walk in a pair of stylish sports shoes from adidas. Choose from a huge range of shoes and active footwear in a fantastic choice of colours and designs for men, women and children.";  
    }
          function Clothinghover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/Clothing-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/Clothing-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="Clothing For Men, Women & Kids";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.innerHTML="adidas clothing is worn by top athletes, because they love its stylish comfort, advanced sporting technologies and dependable durability. Find clothing that suits you, whether you're hitting the pitch or just ";  
    }
              function Runninghover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/Running-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/Running-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="Clothing For Men, Women & Kids";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.innerHTML="adidas clothing is worn by top athletes, because they love its stylish comfort, advanced sporting technologies and dependable durability. Find clothing that suits you, whether you're hitting the pitch or just ";  
    }
              function footballhover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/football-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/football-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="Football For Men, Women & Kids";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.innerHTML="adidas clothing is worn by top athletes, because they love its stylish comfort, advanced sporting technologies and dependable durability. Find clothing that suits you, whether you're hitting the pitch or just ";  
    }
               function baskethover(){
        for (let p = 0; p < product_cart_container.length; p++) {

        for (let m = 0; m < image_product.length; m++) {
            if(p==m){
                product_cart_container[p].addEventListener("mouseenter",function(){
                            image_product[m].src = "image/basket-1-" + (m + 1) + ".jpg";
                })
                     product_cart_container[p].addEventListener("mouseleave",function(){
                            image_product[m].src = "image/basket-" + (m + 1) + ".jpg";
                })
            }
}
        }
       let text_header=document.querySelector(".text-header");
       text_header.innerHTML="basket For Men, Women & Kids";
       let pargraph_product=document.querySelector(".pargraph-product");
       pargraph_product.innerHTML="adidas clothing is worn by top athletes, because they love its stylish comfort, advanced sporting technologies and dependable durability. Find clothing that suits you, whether you're hitting the pitch or just ";  
    } 
let category = new URLSearchParams(window.location.search).get("category");
if(category=="man"){
    showcart(man);
    Manhover();
}else if(category=="women"){
showcart(women)
womenhover();
}else if(category=="kids"){
   showcart(kids);
kidshover(); 
}else if(category=="sport"){
 showcart(sport);
sporthover(); 
}else if(category=="LIFESTYLE"){
   showcart(LIFESTYLE);
LIFESTYLEhover(); 
}else if(category=="shoses"){
      showcart(shoses);
shoseshover(); 
}else if(category=="Clothing"){
       showcart(Clothing);
Clothinghover();  
}else if(category=="Running"){
showcart(Running)
Runninghover(); 
}else if(category=="football"){
    showcart(football)
    footballhover(); 
}
else if(category=="basket"){
    showcart(basket)
    baskethover(); 
}
else{
    if(category=="school"){
        showProducts();
    }
}
let productLinks = document.querySelectorAll(".link-prodect");

for(let i = 0; i < productLinks.length; i++){

    let image = productLinks[i].querySelector(".image-product");

    if(image){

        image.dataset.original = image.getAttribute("src");

    }

    productLinks[i].onclick = function(){

        let wishlist = JSON.parse(sessionStorage.getItem("wishlist"));

        if(wishlist == null){

            wishlist = [];

        }

        let image = productLinks[i].querySelector(".image-product");

        let title = productLinks[i].querySelector(".title-product");

        let price = productLinks[i].querySelector(".price-product");

        let originalImage = image.dataset.original;

        if(originalImage.startsWith("image/")){

            originalImage = originalImage;

        }else{

            originalImage = "image/" + originalImage.split("/").pop();

        }

        let found = false;

        for(let x = 0; x < wishlist.length; x++){

            if(wishlist[x].title == title.innerHTML){

                wishlist[x].quantity++;

                found = true;

                break;

            }

        }

        if(found == false){

            wishlist.push({

                image: originalImage,

                title: title.innerHTML,

                price: price.innerHTML,

                quantity: 1

            });

        }

        sessionStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

    }

}


let wishlistItems = document.getElementById("wishlistItems");

let wishlistTitle = document.getElementById("wishlistTitle");

let wishlistText = document.getElementById("wishlistText");


function showWishlist(){

    if(!wishlistItems){

        return;

    }

    let wishlist = JSON.parse(sessionStorage.getItem("wishlist"));

    if(wishlist == null){

        wishlist = [];

    }

    wishlistItems.innerHTML = "";


    if(wishlist.length == 0){

        wishlistTitle.innerHTML = "YOUR WISHLIST IS EMPTY";

        wishlistText.style.display = "block";

        return;

    }


    wishlistTitle.innerHTML = "YOUR WISHLIST";

    wishlistText.style.display = "none";


    for(let i = 0; i < wishlist.length; i++){

        let product = document.createElement("div");

        product.className = "wishlist-product";


        product.innerHTML = `

            <div class="wishlist-image">

                <img src="${wishlist[i].image}" alt="">

            </div>

            <div class="wishlist-info">

                <h3>${wishlist[i].title}</h3>

                <p>${wishlist[i].price}</p>

                <p>Quantity: ${wishlist[i].quantity}</p>

                <a href="YOUR-VODAFONE-CASH-LINK" class="vodafone-cash">

                    Vodafone Cash

                </a>

                <button class="delete-wishlist">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;


        wishlistItems.appendChild(product);


        let deleteButton =
        product.querySelector(".delete-wishlist");


        deleteButton.onclick = function(){

            wishlist.splice(i, 1);

            sessionStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );

            showWishlist();

        }

    }

}


showWishlist();