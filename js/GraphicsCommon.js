
function drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng){
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
    canvasContext.restore();
}


function colorCircle(centerX,centerY, radius, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY, radius, 0,Math.PI*2, true);
    canvasContext.fill();
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

function colorText(showWords, textX,textY, fillColor, size){
    canvasContext.fillStyle = fillColor;
    canvasContext.font = size;
    canvasContext.textAlign = "center";
    canvasContext.fillText(showWords, textX,textY);
}
