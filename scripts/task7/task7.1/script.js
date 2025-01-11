const photo = document.getElementById("photo");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");

// ზომის ცვლილების ბიჯი (პიქსელებში)
const STEP = 20;

// მაქსიმალური და მინიმალური ზომები
const MAX_WIDTH = 600;
const MIN_WIDTH = 400;

function zoomIn(){
    const currentWidth = photo.offsetWidth;
    if(currentWidth + STEP <= MAX_WIDTH)
    {
        photo.style.width = currentWidth + STEP + 'px';
    }
}

function zoomOut(){
    currentWidth = photo.offsetWidth;
    if(currentWidth - STEP >= MIN_WIDTH)
        photo.style.width = currentWidth - STEP + 'px';
}

