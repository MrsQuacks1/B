var prediccion1="";
var prediccion2="";
var prediccion3="";
Webcam.set({
    width:350, height:350, image_format:"png", png_quality:95
})

Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });

}