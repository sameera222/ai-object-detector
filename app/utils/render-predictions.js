// import {throttle} from "lodash";

export const renderPredictions = (predictions, ctx) =>{
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);

    const font = '16px sans-serif';
    ctx.font = font;
    ctx.textBaseline = 'top'

    predictions.forEach((predictions) =>{
    const [x,y,width,height] = predictions['bbox']
    
const isPerson = predictions.class == 'person';

//bounding box
ctx.strokeStyle = isPerson ? '#FF0000' : '#00FFFf';
ctx.lineWidth = 4;
ctx.strokeRect(x,y,width,height);

ctx.fillStyle = `rgb(255, 0,0, ${isPerson ? 0.2 : 0})`;
ctx.fillRect(x,y,width,height)


    // Draw the label background.
    ctx.fillStyle = isPerson ? "#FF0000" : "#00FFFF";
    const textWidth = ctx.measureText(predictions.class).width;
    const textHeight = parseInt(font, 10); // base 10
    ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

    ctx.fillStyle = "#000000";
    ctx.fillText(predictions.class, x, y);

    // if (isPerson) {
    //   playAudio();
    // }


})
};

// const playAudio = throttle(() => {
//     const audio = new Audio("/pols-aagyi-pols.mp3");
//     audio.play();
//   }, 2000);