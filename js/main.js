function darkT() {
    var css = document.getElementById("css");
    var darkTheme = document.createAttribute("href");
    var btny = document.getElementById("btnx");
    var btnz = document.createAttribute("onclick");

    darkTheme.value = "css/dark.css";
    css.setAttributeNode(darkTheme);

    btnz.value = "lightT()";
    btny.setAttributeNode(btnz);
    btny.innerHTML = "Light Theme"; 
}

function lightT() {
    var css = document.getElementById("css");
    var lightTheme = document.createAttribute("href");
    var btny = document.getElementById("btnx");
    var btnz = document.createAttribute("onclick");

    lightTheme.value = "css/main.css";
    css.setAttributeNode(lightTheme);

    btnz.value = "darkT()";
    btny.setAttributeNode(btnz);
    btny.innerHTML = "Dark Theme"; 
}
