var input = prompt("What month were you born in? (Pls write in lowercase.)")


var teksti = document.getElementById("date")

if(input === 'january' || input === 'february' || input === 'december') {
    teksti.innerHTML = "Born in Winter";
}
else if(input === 'march' || input === 'april' || input=== 'may') {
    teksti.innerHTML = "Born in Spring";
}
else if(input === 'june' || input === 'july' || input=== 'august') {
    teksti.innerHTML = "Born in Summer";
}
else if(input === 'september' || input === 'october' || input=== 'november') {
    teksti.innerHTML = "Born in Fall";
}
else {
    teksti.innerHTML = "Error"
}
