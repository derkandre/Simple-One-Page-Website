function darkT() {
    var css = document.getElementById("css");
    var darkTheme = document.createAttribute("href");
    darkTheme.value = "css/dark.css";
    css.setAttributeNode(darkTheme);
}

function lightT() {
    var css = document.getElementById("css");
    var lightTheme = document.createAttribute("href");
    lightTheme.value = "css/main.css";
    css.setAttributeNode(lightTheme);
}