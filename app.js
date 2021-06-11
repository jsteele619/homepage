
// D3 selecting buttons //

var tea = d3.select("#tea");

var coffee = d3.select("#coffee");

coffee.on("click", coffeeTime);

tea.on("click", teaTime);

// Functions replacing buttons with images //

function coffeeTime() {
   
    var element = document.createElement("img");
    element.src = "images/coffee.jpg";
    element.id = "coffee-id"

    var deletion = document.getElementById("welcome-delete")
    deletion.innerHTML = "";

    var button = document.getElementById("buttons");
    button.innerHTML = "";
    button.appendChild(element);

    var language = document.getElementById("language-delete")
    language.style.marginBottom = "20px"
    deletion.style.marginBottom = "20px";
    button.style.marginBottom = "20px";
}

function teaTime() {

    var element = document.createElement("img");
    element.src = "images/tea.jpg";
    element.id = "tea-id"

    var deletion = document.getElementById("welcome-delete")
    deletion.innerHTML = "";


    var button = document.getElementById("buttons");
    button.innerHTML = "";
    button.appendChild(element);

    var language = document.getElementById("language-delete")
    language.style.marginBottom = "20px"
    deletion.style.marginBottom = "20px";
    button.style.marginBottom = "20px";
    
}