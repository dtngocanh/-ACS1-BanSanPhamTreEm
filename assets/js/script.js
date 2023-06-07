console.log('hello');


// 'use strict';

// // modal variables
// const modal = document.querySelector('[data-modal]');
// const modalCloseBtn = document.querySelector('[data-modal-close]');
// const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// // modal function
// const modalCloseFunc = function () { modal.classList.add('closed') }

// // modal eventListener
// modalCloseOverlay.addEventListener('click', modalCloseFunc);
// modalCloseBtn.addEventListener('click', modalCloseFunc);





// // notification toast variables
// const notificationToast = document.querySelector('[data-toast]');
// const toastCloseBtn = document.querySelector('[data-toast-close]');

// // notification toast eventListener
// toastCloseBtn.addEventListener('click', function () {
//   notificationToast.classList.add('closed');
// });





// // mobile menu variables
// const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
// const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
// const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
// const overlay = document.querySelector('[data-overlay]');

// for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

//   // mobile menu function
//   const mobileMenuCloseFunc = function () {
//     mobileMenu[i].classList.remove('active');
//     overlay.classList.remove('active');
//   }

//   mobileMenuOpenBtn[i].addEventListener('click', function () {
//     mobileMenu[i].classList.add('active');
//     overlay.classList.add('active');
//   });

//   mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
//   overlay.addEventListener('click', mobileMenuCloseFunc);

// }





// // accordion variables
// const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
// const accordion = document.querySelectorAll('[data-accordion]');

// for (let i = 0; i < accordionBtn.length; i++) {

//   accordionBtn[i].addEventListener('click', function () {

//     const clickedBtn = this.nextElementSibling.classList.contains('active');

//     for (let i = 0; i < accordion.length; i++) {

//       if (clickedBtn) break;

//       if (accordion[i].classList.contains('active')) {

//         accordion[i].classList.remove('active');
//         accordionBtn[i].classList.remove('active');

//       }

//     }

//     this.nextElementSibling.classList.toggle('active');
//     this.classList.toggle('active');

//   });

// }

// Create the list of products
//  Save the data

const products = [{
  image: './assets/images/san-pham-moi/balo-da-nang-cho-me-bim-sua-mau-hong.png" alt="Mens Winter Leathers Jackets',
  badge: '15%',
  title:'Balo đa năng cho mẹ bỉm sữa',
  price:'100000',
  priceOrigin:'300000'
},{
  image: './assets/images/san-pham-moi/bo-2-xe-hoat-hinh-dang-yeu-animo-cy302565-vang-nau.png" alt="Pure Garment Dyed Cotton Shirt',
  badge: 'sale',
  title:'Bộ 2 xe hoạt hình đáng yêu',
  price: '150000',
  priceOrigin:'200000'
},{
  image: './assets/images/san-pham-moi/bo-do-choi-dat-nan-lo-nuong-banh-pizza-play-doh-e4576.png',
  badge: 'sale',
  title:'Bộ đồ chơi đất nặn',
  price: '150000',
  priceOrigin:'200000'
},{
  image: './assets/images/san-pham-moi/dung-dich-giat-xa-q-ao-em-be-d-nee-xanh-3000ml.png',
  badge: 'new',
  title:'Dung dịch giặt xả',
  price: '150000',
  priceOrigin:'350000'
},
  {
    image: './assets/images/san-pham-moi/khung-long-ba-sung-lap-rap-kem-tua-vit-co-den-va-am-thanh-rfd407660.png',
    badge: 'new',
    title:'Khủng long bắn súng lắp ráp',
    price: '150000',
    priceOrigin:'350000'
  },
  {
    image: './assets/images/san-pham-moi/nuoc-giat-diu-nhe-khang-khuan-animo-huong-nang-xuan-3-2l-hong-phan.png',
    badge: 'new',
    title:'Khủng long bắn súng lắp ráp',
    price: '150000',
    priceOrigin:'350000'
  },{
    image: './assets/images/products/watch-1.jpg" alt="Smart watche Vital Plus',
    badge: 'new',
    title:'Đồng hồ thông minh',
    price: '150000',
    priceOrigin:'350000'
  },{
    image: './assets/images/san-pham-moi/set-chane-trang_f3eafa4057c54d389ce85793f7c69557_large.webp',
    badge: 'new',
    title:'Set bé gái',
    price: '150000',
    priceOrigin:'350000'
  },{
    image: './assets/images/san-pham-moi/set-croptop-rut-day-hong-1_dc19542725964a5399e514ede51e6212_large.webp',
    badge: 'new',
    title:'Set croptop rút dây',
    price: '150000',
    priceOrigin:'350000'
  },{
    image: './assets/images/san-pham-moi/set-loe-soc-be-gai-den_dc487d9fa29646188daf75425c481900_large.webp',
    badge: 'new',
    title:'set ống loe',
    price: '150000',
    priceOrigin:'350000'
  },{
    image: './assets/images/san-pham-moi/set-ny-ong-rong-hong_5f4227f322144877adba6e91114587a0_large.jpg',
    badge: 'new',
    title:'Quần ống rộng',
    price: '150000',
    priceOrigin:'350000'
},{
  image: './assets/images/san-pham-moi/shorts-1.jpg',
  badge: 'new',
  title:'Đồ bộ hồng',
  price: '150000',
  priceOrigin:'350000'
}

];

// generate html
let productsHTML ='';
products.forEach((product)=>{
  productsHTML +=`
  <div class="showcase">

  <div class="showcase-banner">

    <img src="${product.image}" alt="Mens Winter Leathers Jackets" width="300" class="product-img default">

    <p class="showcase-badge">${product.badge}</p>

    <div class="showcase-actions">

      <button class="btn-action js-add-to-heart" data-product-name="${product.title}>
      // <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="heart-circle-outline"></ion-icon>
      </button>

      <button class="btn-action">
        <ion-icon name="eye-outline"></ion-icon>
      </button>

      <button class="btn-action">
        <ion-icon name="repeat-outline"></ion-icon>
      </button>

      <button class="btn-action js-add-to-cart" data-product-name="${product.title}">
        <ion-icon name="bag-add-outline" ></ion-icon>
      </button>

    </div>

  </div>

  <div class="showcase-content">

    <a href="#">
      <h3 class="showcase-title">${product.title}</h3>
    </a>

    <div class="showcase-rating">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
    </div>

    <div class="price-box">
      <p class="price">${product.price}đ</p>
      <del>${product.priceOrigin}đ</del>
    </div>

  </div>

</div>
`
});
// console.log(productsHTML);
// //put in on web page
document.querySelector('.js-products-list').innerHTML = productsHTML;

const productsnew = [{
  images:'./assets/images/thoi_trang/ao-cay-dua-den-3_246dfae5fa444864a589b342b4311bbc_large.webp',
  title :'Áo cây dừa đen',
  category:'Thời trang',
  price:'150',
  listedprice:'300'

},
{
  images:'./assets/images/thoi_trang/ao-khoat-tho-vang_f2012223f3c04bb0a1ec1736f86b585b_large.webp',
  title :'Áo khoác thỏ vàng',
  category:'Thời trang',
  price:'200',
  listedprice:'400'

},{
  images:'./assets/images/thoi_trang/bo-dui-in-co-gai-nuoc-ngot-xanh_3b538790a74746acafd51ef94888a6a6_large.jpg',
  title :'Bộ đùi cô gái',
  category:'Thời trang',
  price:'100',
  listedprice:'300'

},{
  images:'./assets/images/Cham_soc_be/goi-dau-cho-be-so-sinh-lullaby-nh42b-1.jpg"',
  title :'Gội đầu cho bé',
  category:'Chăm sóc bé',
  price:'100',
  listedprice:'150'

}];

let productsnewHTML ='';
productsnew.forEach((p)=>{
  productsnewHTML +=`                
    <div class="showcase">

  <a href="#" class="showcase-img-box">
    <img src="./assets/images/thoi_trang/ao-cay-dua-den-3_246dfae5fa444864a589b342b4311bbc_large.webp" width="70" class="showcase-img">
  </a>

  <div class="showcase-content">

    <a href="#">
      <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
    </a>

    <a href="#" class="showcase-category">Clothes</a>

    <div class="price-box">
      <p class="price">$45.00</p>
      <del>$12.00</del>
    </div>

  </div>

</div>`

  
});
// console.log(productsnew1HTML);
document.querySelector('.js-productsnew1-list').innerHTML = productsnewHTML;

let productsnew2HTML ='';
productsnew.forEach((p)=>{
  productsnew2HTML +=`                
    <div class="showcase">

  <a href="#" class="showcase-img-box">
    <img src="./assets/images/thoi_trang/ao-cay-dua-den-3_246dfae5fa444864a589b342b4311bbc_large.webp" width="70" class="showcase-img">
  </a>

  <div class="showcase-content">

    <a href="#">
      <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
    </a>

    <a href="#" class="showcase-category">Clothes</a>

    <div class="price-box">
      <p class="price">$45.00</p>
      <del>$12.00</del>
    </div>

  </div>

</div>`

  
});
// console.log(productsnew2HTML);
document.querySelector('.js-productsnew2-list').innerHTML = productsnewHTML;

let productstrend1HTML ='';
productsnew.forEach((p)=>{
  productstrend1HTML +=`                
    <div class="showcase">

  <a href="#" class="showcase-img-box">
    <img src="./assets/images/thoi_trang/ao-cay-dua-den-3_246dfae5fa444864a589b342b4311bbc_large.webp" width="70" class="showcase-img">
  </a>

  <div class="showcase-content">

    <a href="#">
      <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
    </a>

    <a href="#" class="showcase-category">Clothes</a>

    <div class="price-box">
      <p class="price">$45.00</p>
      <del>$12.00</del>
    </div>

  </div>

</div>`

  
});
// console.log(productstrend1HTML);
document.querySelector('.js-productstrend1-list').innerHTML = productstrend1HTML;

let productstrend2HTML ='';
productsnew.forEach((p)=>{
  productstrend2HTML +=`                
    <div class="showcase">

  <a href="#" class="showcase-img-box">
    <img src="./assets/images/thoi_trang/ao-cay-dua-den-3_246dfae5fa444864a589b342b4311bbc_large.webp" width="70" class="showcase-img">
  </a>

  <div class="showcase-content">

    <a href="#">
      <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
    </a>

    <a href="#" class="showcase-category">Clothes</a>

    <div class="price-box">
      <p class="price">$45.00</p>
      <del>$12.00</del>
    </div>

  </div>

</div>`

  
});
// console.log(productstrend2HTML);
document.querySelector('.js-productstrend2-list').innerHTML = productstrend1HTML;

let productstop1HTML ='';
productsnew.forEach((p)=>{
  productstop1HTML +=`                
    <div class="showcase">

  <a href="#" class="showcase-img-box">
    <img src="./assets/images/thoi_trang/ao-cay-dua-den-3_246dfae5fa444864a589b342b4311bbc_large.webp" width="70" class="showcase-img">
  </a>

  <div class="showcase-content">

    <a href="#">
      <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
    </a>

    <a href="#" class="showcase-category">Clothes</a>

    <div class="price-box">
      <p class="price">$45.00</p>
      <del>$12.00</del>
    </div>

  </div>

</div>`

  
});
// console.log(productstrend2HTML);
document.querySelector('.js-productstop1-list').innerHTML = productstrend1HTML;

let productstop2HTML ='';
productsnew.forEach((p)=>{
  productstop2HTML +=`                
    <div class="showcase">

  <a href="#" class="showcase-img-box">
    <img src="./assets/images/thoi_trang/ao-cay-dua-den-3_246dfae5fa444864a589b342b4311bbc_large.webp" width="70" class="showcase-img">
  </a>

  <div class="showcase-content">

    <a href="#">
      <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
    </a>

    <a href="#" class="showcase-category">Clothes</a>

    <div class="price-box">
      <p class="price">$45.00</p>
      <del>$12.00</del>
    </div>

  </div>

</div>`

  
});
// console.log(productstop2HTML);
document.querySelector('.js-productstop2-list').innerHTML = productstop2HTML;
// ,{
//   images:'',
//   title :'',
//   category:'',
//   price:'',
//   listedprice:''

// },{
//   images:'',
//   title :'',
//   category:'',
//   price:'',
//   listedprice:''

// },{
//   images:'',
//   title :'',
//   category:'',
//   price:'',
//   listedprice:''

// },{
//   images:'',
//   title :'',
//   category:'',
//   price:'',
//   listedprice:''

// }
// ];


document.querySelectorAll('.js-add-to-cart').forEach((btn)=>{
  btn.addEventListener('click',() =>{
      // lấy tên sp từ button
      // .dataset: cung cấp cho chúng ta tất cả thuộc tính dữ liệu
      console.log('added product');
      console.log(btn.dataset);
    const productName = btn.dataset.productName;
    let matchingItem;
    cart.forEach((item) =>{
      if(productName === item.productName)
      {
          matchingItem = item;
      }
    });
    if(matchingItem){
      matchingItem.quantity +=1;
    }else{
      cart.push({
         productName: productName,
          quantity:1
        });
    }
    let cartQuantity = 0;
    cart.forEach((item)=>{
      cartQuantity +=item.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    console.log(cartQuantity);
    console.log(cart);
  });
});

document.querySelectorAll('.js-add-to-heart').forEach((btn)=>{
  btn.addEventListener('click',() =>{
      // lấy tên sp từ button
      // .dataset: cung cấp cho chúng ta tất cả thuộc tính dữ liệu
      console.log('added heart');
      console.log(btn.dataset);
    const productName = btn.dataset.productName;
    let matchingItem;
    heart.forEach((item) =>{
      if(productName === item.productName)
      {
          matchingItem = item;
      }
    });
    if(matchingItem){
      matchingItem.quantity +=1;
    }else{
      heart.push({
         productName: productName,
          quantity:1
        });
    }
    let heartQuantity = 0;
    heart.forEach((item)=>{
      heartQuantity +=item.quantity;
    });
    document.querySelector('.js-heart-quantity').innerHTML = heartQuantity;
    console.log(heartQuantity);
    console.log(heart);
  });
});