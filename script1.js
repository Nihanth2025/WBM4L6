function base() {
    var base = Number(document.getElementById("number").value);
    var square = Number(base*base);
    document.getElementById("result").innerHTML=square;
}