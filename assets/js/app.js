var coloredWatches = document.getElementsByClassName('coloredWatches');
var colorChangeButton = document.getElementsByClassName('colorChangeButton');

for (var i = 0; i < colorChangeButton.length; i++) {
  colorChangeButton[i].addEventListener('click',(e)=>{
    stopInter();
    colorChangeBGautoFun(e);
    for (var i = 0; i < coloredWatches.length; i++) {
      coloredWatches[i].style.opacity = '0';
    };
    coloredWatches[e.currentTarget.dataset.colorpick].style.opacity = '1';
    console.log(e.currentTarget.dataset.colorpick);
  })
}


var iterWatch = 0;
var intVar;
function startInter() {
  intVar =
  setInterval(function () {
    for (var i = 0; i < coloredWatches.length; i++) {
      coloredWatches[i].style.opacity = '0';
    };
    coloredWatches[iterWatch % 4].style.opacity = '1';
    colorChangeBGautoFun();
    iterWatch++;
  }, 2000);
}

var myStopIter;
function stopInter() {
  clearInterval(intVar);
  clearTimeout(myStopIter);
  myStopIter =
  setTimeout(function () {
    startInter();
  }, 1500);
}

startInter();


// colorChangeBG
var colorChangeBG = document.getElementsByClassName('colorChangeBG');

function colorChangeBGautoFun(e) {
  for (var i = 0; i < colorChangeBG.length; i++) {
    colorChangeButton[i].style.transform = 'scale(1)';
    colorChangeButton[i].style.border = '0px solid gray';
  }
  if (e) {
    e.target.style.border = '1px solid gray';
    e.target.style.transform = 'scale(1.2)';
    console.log(e.target);
    return 0;
  }
  colorChangeButton[iterWatch % 4].style.transform = 'scale(1.2)';
  colorChangeButton[iterWatch % 4].style.border = '1px solid gray';

}
