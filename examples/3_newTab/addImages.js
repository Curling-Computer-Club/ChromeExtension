window.addEventListener('load', addImages)

  function addImages() {
// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
  context.drawImage(video, 0, 0, 320, 240);
});


var times = 0;
var intervalID = setInterval(function () {

    let winWidth = window.innerWidth;
  let winHeight = document.body.offsetHeight;
  let images = [
    `https://img.olympicchannel.com/images/image/private/t_s_w2440/t_s_16_9_g_auto/f_auto/primary/prq8nqkfvkrkxjhwh7mv.jpg`,
    `https://ca-times.brightspotcdn.com/dims4/default/3a05042/2147483647/strip/true/crop/3913x2608+0+0/resize/2000x1333!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F64%2F22%2F0b7ce37f497f9deb1968db20723e%2F910451-la-sp-winter-oly-ga-4570.jpg`,
    `https://media1.popsugar-assets.com/files/thumbor/VSmPxSxc09xD7rA8LpUZgqp197Q/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/02/11/099/n/44498184/tmp_zPrbW1_c83477415ac680ef_GettyImages-1369925440.jpg`,
    `https://www.engelberg.ch/fileadmin/_processed_/2/c/csm_Curling_1920x1080_8e152d47b5.jpg`,
    `https://thumbnails.cbc.ca/maven_legacy/thumbnails/304/134/CP166207307-1.jpg`,
    `https://www.curling-geneve.ch/wp-content/uploads/2021/01/juniors_365x240.jpg`,
    `https://img.apmcdn.org/fce2793f2923beaa5567c593b8e65dd1b4002714/square/797bcb-20180220-polo-daughter2.jpg`
  ]



    let i = 0;
    for (i = 0; i < 10; i++) {
    //create image
    var img = document.createElement("img");

    //get random numbers for each element
    randomTop = getRandomNumber(video.height +150, window.innerHeight);
    randomLeft = getRandomNumber(-img.width, winWidth);


    //update top and left position
    img.style.position = "absolute";
    img.style.zIndex = 10 + i;
    img.style.top = `${randomTop}px`;
    img.style.left = `${randomLeft}px`;
    img.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    img.style.width = `300px`;
    img.style.height = `auto`;
    img.src = images[Math.floor(Math.random() * images.length)];
    document.querySelector('body').appendChild(img);   
    }
    //stop updating
   if (++times === 30) {
       window.clearInterval(intervalID);
   }
}, 300);

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

}