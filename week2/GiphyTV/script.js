var container = document.querySelector("#container");

var url = "https://tv.giphy.com/v1/gifs/tv?api_key=CW27AW0nlp5u0&tag=giphytv"

renderGIF();
setInterval(function(){
    renderGIF();
}, 5000);


function renderGIF(){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function(e){
        var response = JSON.parse(e.target.response);
        container.innerHTML = "<img src=\""+ response.data.images.fixed_height.url+"\">"    
    });
}