var m = 'in global'

console.log("Hello this is " + m)

var a = function() {
    var m = "not in global"

    console.log("another message but " + m)
    b()
}

function b() {
    console.log("b function variable " + m)
}
a()