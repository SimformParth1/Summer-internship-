function Area() {
    var firstside = 5;

    var secondside = 6;

    var thirdside = 7;

    console.log(typeof(firstside));
    var s = (firstside + secondside + thirdside) / 2;

    var area = Math.sqrt(s * ((s - firstside) *
        (s - secondside) * (s - thirdside)));

    document.getElementById(
        "display").innerHTML = area;
}