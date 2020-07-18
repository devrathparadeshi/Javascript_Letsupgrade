shoppinglist=["Almonds","Soaps","Maggie","Groundnut","Cashewnut","Toothpaste"];
shoppingbasket=[];
shoppingbasket=shoppingbasket.concat(shoppinglist);
shoppingbasket.push("new-Kurkurae");
shoppingbasket.push("new-Pepsi");
shoppingbasket.push("new-oreo");
shoppingbasket.push("new-Dairy Milk");
console.log(shoppingbasket);
document.write("<h2> For Display purpose: </h2>")
for (let i = 0; i < shoppingbasket.length; i++) {
    document.write("<h3>"+(i+1) + shoppingbasket[i] +"</h3>");
}
