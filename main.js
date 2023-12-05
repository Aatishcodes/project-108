// https://teachablemachine.withgoogle.com/models/BD049i3VV/



function startclassifier() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BD049i3VV/model.json', modelready)
}


function modelready() {
    classifier.classify(gotresult)

}


function gotresult(error, results) {
    console.log(results)
    soundname = results[0].label
    soundconfidence = results[0].confidence

    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("labelitem").style.color = "rgb("+ random_number_r + ","+ random_number_b + "," + random_number_g +")";
    document.getElementById("confidence").style.color = "rgb("+ random_number_g + ","+ random_number_r + "," + random_number_b +")";

    document.getElementById("labelitem").innerHTML = "I can hear " + soundname
    document.getElementById("confidence").innerHTML = "Accuracy " + (soundconfidence * 100).toFixed(2) + '%'



    if (soundname == "Background Noise") {
        document.getElementById("backgroundnoise").src = "background.png"
        document.getElementById("barking").src = ""
        document.getElementById("meow").src = ""
        document.getElementById("horse").src = ""
    }

    else if (soundname == "Barking") {
        document.getElementById("barking").src = "doggo.jpg"
        document.getElementById("backgroundnoise").src = ""
        document.getElementById("meow").src = ""
        document.getElementById("horse").src = ""
     
    }


    else if (soundname == "Meow") {
        document.getElementById("meow").src = "cat.jpg"
        document.getElementById("barking").src = ""
        document.getElementById("backgroundnoise").src = ""
        document.getElementById("horse").src = ""
    }

    else if (soundname == "Horse") {
        document.getElementById("horse").src = "horse.jpg"
        document.getElementById("meow").src = ""
        document.getElementById("barking").src = ""
        document.getElementById("backgroundnoise").src = ""
    }


}