document.getElementById('searchBtn').addEventListener('click', function func(){
    searchVal = document.getElementById('searchBar').value;
    displayGif(searchVal);
})

document.getElementById('searchBar').addEventListener('keyup', function func(e){
    if (e.which === 13){
        searchVal = document.getElementById('searchBar').value;
        displayGif(searchVal);
    }
})

function displayGif(searchVal){
    var content = document.getElementById('gif-body'); // Container to display gifs. It is a div.
    var api_key = 'E6taocnYOcC6urNtIOkBRWnUk8nCR7IM';
    var quote = searchVal;
    var url = 'https://api.giphy.com/v1/gifs/search?q=' + quote + '&api_key=' + api_key;
    
    console.log(url);


    // Using XMLHttpRequest

    // Sending HTTP request to the api.

    // var request = new XMLHttpRequest();
    // request.open('GET', url); // Initiating the request to the api.
    // request.send(); // Sending the HTTP request to the api.

    // // Working with the API response.

    // request.addEventListener('load', function onLoad(e){
    //     content.innerHTML = "";
    //     var response = JSON.parse(e.target.response);
    //     console.log(response.data[1].images.fixed_height.url);
        
    //     response.data.forEach(element => {
    //         var src = element.images.fixed_height.url;
    //         content.innerHTML += "<img src = \""+ src + "\" class=\" gif \"> <br>";
    //     });
    //     console.log(content.innerHTML);
    // })


    // Using Fetch
    console.log(content)
    fetch(url)
    .then(response=> response.json())
    .then(element=>{
        content.innerHTML = "";
        element.data.forEach((i)=>{
            let src = i.images.fixed_height.url;
            content.innerHTML += "<img src = \""+ src + "\" class=\" gif \"> <br>";
        })
    });



}
