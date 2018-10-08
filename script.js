// Write all your Javascript here!



// let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



function initialize() {
    $.ajax({
        url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
        success: function (data) {
            console.log(data);
            changeLanguage(data);
        },
    });
}


function changeToUrdu() {
    $.ajax({
        url: ` https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
        success: function (data) {
            console.log(data);
            changeLanguage(data);
        },
    });
}

function changeToChinese() {
    $.ajax({
        url: ` https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
        success: function (data) {
            console.log(data);
            changeLanguage(data);

        },
    });
}

function changeLanguage(data) {
    // for navbar
    let headerEl = document.querySelector('.sub-navbar');

    headerEl.innerHTML +=
    //navbar-1-start
    `<div class="sub-navbar">
    <ul class="nav justify-content-end">
      <li class="logo-name">
        <img class="logo" src="images/logo.png">
        <p>Tech Karo</p>
      </li>
      <li class="nav-item" onclick="initialize()">
        <a class="nav-link" href="#">
          <img class="flags" src="images/en-flag.png"> </a>
      </li>
      <li class="nav-item" onclick="changeUrdu()">
        <a class="nav-link" href="#">
          <img class="flags" src="images/ur-flag.png"> </a>
      </li>
      <li class="nav-item" onclick="changeChinese()">
        <a class="nav-link" href="#">
          <img class="flags" src="images/zh-flag.png"> </a>
      </li>
    </ul>
    <div`;
 //navbar-1-end

let articleEl = document.querySelector('.about-article');


`<div class="card">
<img class="card-img-top" src="${index.imageURL}" alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">${data.info.heading}</h5>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${data.info.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
}


