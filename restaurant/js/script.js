function Rectangle (a,b){
    this.area = a*b;
    this.perimeter = 2*(a+b);
}

var block = new Rectangle(3,5);
console.log(block.area)