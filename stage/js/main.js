/*
  Add Here Active Code Of Ul Navbar
*/


// Stop Propagation Of Cart Items Menu
let cartItemsList = document.querySelector(".cart-dropdown-menu");

cartItemsList.onclick = (e) => e.stopPropagation();


// Interacting With Products Function
(function interactingWithProducts() {

  let productCard = document.getElementsByClassName('product'),

      loveIcon = document.getElementsByClassName('love-icon');

  for (let i = 0; i < productCard.length, i < loveIcon.length; i += 1) {

    productCard[i].ondblclick = function () {

      if (this.classList.contains('loved')) {

        // Try With toggle()
        this.classList.remove('loved');

        loveIcon[i].style.color = "#000";

        /* 
          جرب تضيف الكلاس تبع الايقونة بال
          Add
          بدل ال
          SetAttribute
        */
        loveIcon[i].setAttribute('class', 'far fa-heart love-icon');

        /*
          Remove Loved Products To Local Storage
        */

      } else {

        this.classList.add('loved');

        loveIcon[i].style.color = "#f60000";

        loveIcon[i].setAttribute('class', 'fas fa-heart love-icon');

        /*
          Add Loved Products From Local Storage
        */

      }

    }

  }

})();

// اتعلم كيف تستعمل الفور ايتش لوب بدل الفور لوب العادية
// Use nice scroll & Sweet alert
// Read About How To Use Array After Loop On It (تفكيك عناصر الاراي) using forEach Loop
// How To Use Sass Variables In Js File
// How To getAtrribute And Slice It using Js


// Search Window
let searchIcon = document.querySelector('.search-icon'),

    searchWindow = document.querySelector('.search-window'),

    searchField = document.querySelector('.search-field'),
    
    closeButton = document.querySelector('.close-button');

searchIcon.onclick = function () {
  
  if (searchWindow.style.display = 'none') {

    searchWindow.style.display = 'block';

  } else {

    searchWindow.style.display = 'none';

  }

}

closeButton.onclick = function () {

  searchWindow.style.display = 'none';

}