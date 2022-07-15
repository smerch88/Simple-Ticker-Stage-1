// window.addEventListener('DOMContentLoaded', () => {
//     const itemCoin = document.querySelector('.coin__item');
//     // const widthWindow = document.querySelector('.coin__inner').clientWidth;
//     const widthWindow = document.documentElement.clientWidth;
//     // const heightWindow = document.querySelector('.coin__inner').clientHeight;
//     const heightWindow = document.documentElement.clientHeight;
//     let vector = {
//         x: 1.5,
//         y: -2.5
//     }

//     function posit() {
//         let posY = Math.floor(Math.random() * heightWindow);
//         let posX = Math.floor(Math.random() * widthWindow);
//         return [posX, posY];
//     }

//     function anim() {
//         const {
//             left: x,
//             top: y
//         } = itemCoin.getBoundingClientRect();

//         if (x < 0) vector.x *= -1;
//         if (y < 0) vector.y *= -1;
//         if (x > widthWindow) vector.x *= -1;
//         if (y > heightWindow) vector.y *= -1;

//         itemCoin.style.left = x + vector.x + 'px';
//         itemCoin.style.top = y + vector.y + 'px';

//         console.log(x, y, vector)

//         requestAnimationFrame(anim)
//     }



//     // function anim(itemCoin) {
//     //     let pos = posit();
//     //     let p = 0;
//     //     posX = pos[0];
//     //     posY = pos[1];

//     //     function fra() {
//     //         posX++;
//     //         itemCoin.style.left = posX + 'px';

//     //         function fraNeg() {
//     //             posX--;
//     //             itemCoin.style.left = posX + 'px';
//     //         }
//     //         // posY++;
//     //         // itemCoin.style.top = posY + 'px';

//     //         if (posX < widthWindow) {
//     //             requestAnimationFrame(fra)
//     //         } else if (posX == widthWindow) {
//     //             requestAnimationFrame(fraNeg)
//     //         }


//     //     }
//     //     fra()
//     // }

//     // itemCoins.forEach(item => {
//     //     anim(item)

//     // });


//     // itemCoins.forEach(item => {
//     //     item.addEventListener('', () => anim(item));

//     // });

//     // function animation() {
//     //     let posY = Math.floor(Math.random() * widthWindow);
//     //     let posX = Math.floor(Math.random() * widthWindow);
//     //     // posX++;
//     //     // item.style.left = posX + 'px';
//     //     // if (posX > widthWindow) {
//     //     //     posX--;
//     //     //     item.style.left = posX + 'px';
//     //     //     requestAnimationFrame(animation)

//     //     // }
//     //     if (posX < widthWindow) {
//     //         posX++;
//     //         itemCoin.style.left = posX + 'px';
//     //         let id = setTimeOut(animation, 1)
//     //     }

//     //     // function anim(item) {

//     //     //     // item.style.left = Math.random() * widthWindow + 'px';
//     //     //     // item.style.top = Math.random() * widthWindow + 'px';
//     //     //     posX++;
//     //     //     item.style.left = posX + 'px'
//     //     //     if (posX < widthWindow) {

//     //     //         requestAnimationFrame(animation)
//     //     //     }

//     //     // }
//     // }

//     // animation()


// });