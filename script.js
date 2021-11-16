
function WriteInCanvas(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 600);

    if(document.getElementById("username").value == "test"){
        ctx.font = "30px Arial";
        ctx.fillText("Welcome, " + document.getElementById("username").value, 40, 300);
        ctx.fillText(getLocation(), 150, 500);
    } else {
        ctx.font = "30px Arial";
        ctx.fillText("Wrong username. Try again", 10, 300);
    }
}
    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
                 "<br>Longitude: " + position.coords.longitude;
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
            break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
            break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
            break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
            break;
        }
    }
    
