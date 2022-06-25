let myRequest = new XMLHttpRequest();
let movies = [];
myRequest.open("GET", "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2OIARvfT6j9kM50RUqn1ZbfvsYwx3ufUPmcCQPWDNOmxPeyXnyfFrca-A");
myRequest.send();

myRequest.addEventListener('readystatechange' ,function(){

    if(myRequest.readyState == 4 && myRequest.status == 200){

       
        movies = JSON.parse(myRequest.response);
        displayData()
        // ٍconsole.log(movies.results[0]);
    }
})


function displayData() {

    let dataFromApi = ``;

    for(let i = 0;i < movies.results.length; i++) {

        console.log(myRequest.response);
        dataFromApi += `<div class="col-md-4 py-2">
        <div class="item">
            <img src="https://image.tmdb.org/t/p/w500${movies.results[i].backdrop_path}" class="w-100" alt="">
        </div>
        </div>`
    }


    document.getElementById('myData').innerHTML = dataFromApi;
}



const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
  
    if (validateEmail(email)) {
      $result.text(email + ' is valid :)');
      $result.css('color', 'green');
    } else {
      $result.text(email + ' is not valid :(');
      $result.css('color', 'red');
    }
    return false;
  }
  
  $('#email').on('input', validate);