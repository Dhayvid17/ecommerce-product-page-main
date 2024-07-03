const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

const index = document.querySelector(".index");
const items = document.querySelector(".no-items");
const quantity = document.querySelector(".quantity");
const actualPrice = document.querySelector(".actual-price");

const submit = document.querySelector(".submit");

const asideOne = document.querySelector(".aside-i");
const asideTwo = document.querySelector(".aside-ii");

let itemNo = true
let variable = 0;

minus.addEventListener("click", function () {
    if (variable > 0) {
        variable--;
    }
    updateValue();
});

plus.addEventListener("click", function () {
    variable += 1;
    if (itemNo === true) {
        items.style.visibility = 'visible';
        asideTwo.style.display = 'block'
    } else {
        items.style.visibility = 'hidden';
    }
    updateValue();
});

function handleSubmit() {
    if (variable <= 0) {
        asideOne.style.display = "block";
        asideTwo.style.display = 'none';
    } else {
        asideOne.style.display = "none";
        asideTwo.style.display = 'block';
    }
}

submit.addEventListener("click", handleSubmit);

function updateValue() {
    index.innerHTML = variable;
    items.innerHTML = variable;
    quantity.innerHTML = variable;
    actualPrice.innerHTML = variable * 125;
}


const largeImages = document.querySelectorAll(".bigger-image");
const smallImages = document.querySelectorAll(".thumbnail");
const container = document.querySelector(".overall");
const lightBoxImages = document.querySelectorAll('.light-box-image');
const lightBoxFlexs = document.querySelectorAll('.lightbox-flex');
const close = document.querySelector('.close');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
const block = document.querySelector("#display");

let i = 0;
function displayImage(index) {
    block.src = images[index];
}

prev.addEventListener("click", () => {
    if (i === 0) {
        i = images.length - 1;
    } else {
        i--;
    }
    displayImage(i);
});

next.addEventListener('click', () => {
    if (i === images.length - 1) {
        i = 0;
    } else {
        i++;
    }
    displayImage(i);
});

function toggleImage(element) {
    smallImages.forEach(Image => {
        Image.style.border = 'none';
        Image.style.opacity = '1';
    });
    element.style.border = '2px solid hsl(25, 100%, 55%)';
    element.style.opacity = '0.6';
}

smallImages.forEach(function (smallImage, index) {
    smallImage.addEventListener("click", function () {
        largeImages.forEach((largeImage) => {
            largeImage.style.display = 'none';
        });
        largeImages[index].style.display = 'block';
    });
});

largeImages.forEach(function (largeImage) {
    largeImage.addEventListener('click', function () {
        if (container.style.display === 'none') {
            container.style.display = 'block';
        } else {
            container.style.display = 'block';
        }
    });
});

for (let i = 1; i < lightBoxFlexs.length; i++) {
    lightBoxFlexs[i].style.border = 'none';
    lightBoxFlexs[i].style.opacity = '1';
}

function toggleFlex(element) {
    lightBoxFlexs.forEach(lightBoxFlex => {
        lightBoxFlex.style.border = 'none';
        lightBoxFlex.style.opacity = '1';
    });
    element.style.border = '2px solid hsl(26, 100%, 55%)';
    element.style.opacity = '0.4';
}

lightBoxFlexs.forEach((lightBoxFlex, index) => {
    lightBoxFlex.addEventListener("click", function () {
        lightBoxImages.forEach((lightBoxImage) => {
            lightBoxImage.style.display = 'none';
        });
        lightBoxImages[index].style.display = 'block';
    });
});

close.addEventListener("click", function () {
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
});



// MOBILE SCREEN FUNCTION

const mobileDisplay = document.querySelector("#image-1");
const mobileImages = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
const mobileNext = document.querySelector(".mobile-next");
const mobilePrev = document.querySelector(".mobile-prev");
const menus = document.querySelectorAll(".icon-menu, .icon-cancel");
const navBar = document.querySelector(".list-style");
const main = document.querySelector("main");

let interChange = 0;

function changeImage(index) {
    mobileDisplay.src = mobileImages[index];
}

mobilePrev.addEventListener("click", function () {
    if (interChange === 0) {
        //if we do not know the actual length.... ie  4 - the initial 1 displayed
        interChange = mobileImages.length - 1;
    } else {
        interChange--;
    }
    changeImage(interChange);
});

mobileNext.addEventListener("click", function () {
    //if we know the actual length
    if (interChange === 3) {
        interChange = 0;
    } else {
        interChange++;
    }
    changeImage(interChange);
});


menus.forEach(menu => {
    menu.addEventListener("click", function () {
        if (navBar.style.display === 'none') {
            navBar.style.display = "flex";
            main.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            navBar.style.display = 'none';
            main.style.backgroundColor = 'inherit';
        }
    });
});













// for (let i = 1; i < largeImages.length; i++) {
//     largeImages[i].style.display = 'none';
// }

// for (let i = 1; i < smallImages.length; i++) {
//     smallImages[i].style.border = 'none';
//     smallImages[i].style.opacity = '1';
// }


// const imageOne = document.querySelector(".image-ul-i");
// const imageTwo = document.querySelector(".image-ul-ii");
// const imageThree = document.querySelector(".image-ul-iii");
// const imageFour = document.querySelector(".image-ul-iv");

// const thumbnailOne = document.querySelector(".thumbnail-i");
// const thumbnailTwo = document.querySelector(".thumbnail-ii");
// const thumbnailThree = document.querySelector(".thumbnail-iii");
// const thumbnailFour = document.querySelector(".thumbnail-iv");


// thumbnailOne.addEventListener("click", function () {
//     thumbnailOne.style.border = '2px solid hsl(25, 100%, 55%)';
//     thumbnailTwo.style.border = 'none';
//     thumbnailThree.style.border = 'none';
//     thumbnailFour.style.border = 'none';
//     thumbnailOne.style.opacity = '0.6';
//     thumbnailTwo.style.opacity = '1';
//     thumbnailThree.style.opacity = '1';
//     thumbnailFour.style.opacity = '1';

//     if (imageOne.style.display === 'none') {
//         imageOne.style.display = 'block';
//         imageTwo.style.display = 'none';
//         imageThree.style.display = 'none';
//         imageFour.style.display = 'none';
//     }
// });

// thumbnailTwo.addEventListener("click", function () {
//     thumbnailTwo.style.border = '2px solid hsl(25, 100%, 55%)';
//     thumbnailOne.style.border = 'none';
//     thumbnailThree.style.border = 'none';
//     thumbnailFour.style.border = 'none';
//     thumbnailTwo.style.opacity = '0.6';
//     thumbnailOne.style.opacity = '1';
//     thumbnailThree.style.opacity = '1';
//     thumbnailFour.style.opacity = '1';

//     if (imageTwo.style.display === 'none') {
//         imageTwo.style.display = 'block';
//         imageOne.style.display = 'none';
//         imageThree.style.display = 'none';
//         imageFour.style.display = 'none';

//     } else {
//         imageTwo.style.display = 'block';
//         imageOne.style.display = 'none';
//         imageThree.style.display = 'none';
//         imageFour.style.display = 'none';
//     }
// });

// thumbnailThree.addEventListener("click", function () {
//     thumbnailThree.style.border = '2px solid hsl(25, 100%, 55%)';
//     thumbnailOne.style.border = 'none';
//     thumbnailTwo.style.border = 'none';
//     thumbnailFour.style.border = 'none';
//     thumbnailThree.style.opacity = '0.6';
//     thumbnailOne.style.opacity = '1';
//     thumbnailTwo.style.opacity = '1';
//     thumbnailFour.style.opacity = '1';

//     if (imageThree.style.display === 'none') {
//         imageThree.style.display = 'block';
//         imageOne.style.display = 'none';
//         imageTwo.style.display = 'none';
//         imageFour.style.display = 'none';
//     } else {
//         imageThree.style.display = 'block';
//         imageOne.style.display = 'none';
//         imageTwo.style.display = 'none';
//         imageFour.style.display = 'none';
//     }
// });

// thumbnailFour.addEventListener("click", function () {
//     thumbnailFour.style.border = '2px solid hsl(25, 100%, 55%)';
//     thumbnailOne.style.border = 'none'
//     thumbnailTwo.style.border = 'none'
//     thumbnailThree.style.border = 'none'
//     thumbnailFour.style.opacity = '0.6';
//     thumbnailOne.style.opacity = '1';
//     thumbnailTwo.style.opacity = '1';
//     thumbnailThree.style.opacity = '1';

//     if (imageFour.style.display === 'none') {
//         imageFour.style.display = 'block';
//         imageOne.style.display = 'none';
//         imageTwo.style.display = 'none';
//         imageThree.style.display = 'none';
//     } else {
//         imageFour.style.display = 'block';
//         imageOne.style.display = 'none';
//         imageTwo.style.display = 'none';
//         imageThree.style.display = 'none';
//     }
// });

// imageOne.addEventListener('click', function () {
//     if (container.style.display === 'none') {
//         container.style.display = 'block';
//     } else {
//         container.style.display = 'block';
//     }
// });

// const display = document.querySelectorAll(".zoom-image-i, .zoom-image-ii, .zoom-image-iii, .zoom-image-iv");
// const smallerOne = document.querySelector(".zoom-flex-i");
// const smallerTwo = document.querySelector(".zoom-flex-ii");
// const smallerThree = document.querySelector(".zoom-flex-iii");
// const smallerFour = document.querySelector(".zoom-flex-iv");

// const close = document.querySelector('.zoom-close');

// close.addEventListener(".click", function () {
//     if (container.style.display === 'none'){
//         container.style.display = 'none';
//     } else {
//         container.style.display = 'block';
//     }
// });

// smallerOne.addEventListener("click", function () {
//     smallerOne.style.border = '2px solid hsl(25, 100%, 55%)';
//     smallerTwo.style.border = 'none';
//     smallerThree.style.border = 'none';
//     smallerFour.style.border = 'none';

//     if (display[0].style.display === 'none') {
//         display[0].style.display = 'block';
//         display[1].style.display = 'none';
//         display[2].style.display = 'none';
//         display[3].style.display = 'none';
//     }
// });

// smallerTwo.addEventListener("click", function () {
//     smallerTwo.style.border = '2px solid hsl(25, 100%, 55%)';
//     smallerOne.style.border = 'none';
//     smallerThree.style.border = 'none';
//     smallerFour.style.border = 'none';

//     if (display[1].style.display === 'none') {
//         display[1].style.display = 'block';
//         display[0].style.display = 'none';
//         display[2].style.display = 'none';
//         display[3].style.display = 'none';
//     } else {
//         display[1].style.display = 'block';
//         display[0].style.display = 'none';
//         display[2].style.display = 'none';
//         display[3].style.display = 'none';
//     }
// });

// smallerThree.addEventListener("click", function () {
//     smallerThree.style.border = '2px solid hsl(25, 100%, 55%)';
//     smallerOne.style.border = 'none';
//     smallerTwo.style.border = 'none';
//     smallerFour.style.border = 'none';

//     if (display[2].style.display === 'none') {
//         display[2].style.display = 'block';
//         display[0].style.display = 'none';
//         display[1].style.display = 'none';
//         display[3].style.display = 'none';
//     } else {
//         display[2].style.display = 'block';
//         display[0].style.display = 'none';
//         display[1].style.display = 'none';
//         display[3].style.display = 'none';
//     }
// });

// smallerFour.addEventListener("click", function () {
//     smallerFour.style.border = '2px solid hsl(25, 100%, 55%)';
//     smallerOne.style.border = 'none';
//     smallerTwo.style.border = 'none';
//     smallerThree.style.border = 'none';

//     if (display[3].style.display === 'none') {
//         display[3].style.display = 'block';
//         display[0].style.display = 'none';
//         display[1].style.display = 'none';
//         display[2].style.display = 'none';
//     } else {
//         display[3].style.display = 'block';
//         display[0].style.display = 'none';
//         display[1].style.display = 'none';
//         display[2].style.display = 'none';
//     }
// });


// smallImages.forEach((smallImage) => {
//     smallImage.addEventListener('click', () => {
//         const target = smallImage.dataset.target;
//         largeImages.forEach((largeImage) => {
//             largeImage.style.display = 'none';
//         });
//         document.querySelector(`.image-ul-i:nth-child(${target})`).style.display = 'block';
//     });
// });



