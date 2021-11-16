
function WriteInCanvas(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 600);

    if(document.getElementById("username").value == "test"){
        ctx.font = "30px Arial";
        ctx.fillText("Welcome, " + document.getElementById("username").value, 40, 300);
        ctx.fillText(document.getElementById("username").value, 150, 500);
    } else {
        ctx.font = "30px Arial";
        ctx.fillText("Wrong username. Try again", 10, 300);
    }
}
    
