var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

function add1(element) {
    var count = element.getAttribute('count')
    var amount = document.getElementById(count)
    if(count == "count1") {
        counter1++
        amount.innerText = counter1 +" like(s)" 
    }
    if(count == "count2") {
        counter2++
        amount.innerText = counter2 +" like(s)" 
}
    if(count == "count3") {
        counter3++
        amount.innerText = counter3 +" like(s)" 
}
}


