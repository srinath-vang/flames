var a = "bapple";
var b = "nople";
var c = a.split("");
var d = b.split("");
var e = [];

console.log(c);
console.log(d);

for(var i=0; i< c.length; i++){
    for(var j=0; j<d.length; j++){
        if(c[i] === d[j]){
            // console.log(c[i].length);
            e.push(c[i]);
        }
    }
}
console.log(e);
console.log(a.length);
console.log(b.length);
console.log(e.length);


var f = a.length;
var g = b.length;
var h = e.length;

var x = Math.abs(f-h);
var y = Math.abs(g-h);
console.log(x);
console.log(y);
var z = x + y;
console.log(z);
	
