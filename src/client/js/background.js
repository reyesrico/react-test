function changeBackground(){
    var content = document.getElementById('content');    
    var colors = ["yellow", "red", "green", "black", "purple", "cyan"];
    var random = Math.round(Math.random() * (colors.length-1));

    content.className = `content-${colors[random]}`;
}