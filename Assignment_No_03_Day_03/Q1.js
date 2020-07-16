function even() {
    let num= prompt("Enter the number:");
    console.log("The number is "+num);
    if (num%2==0) {
        console.log("Number enter is " +num+ " and is Even");
        document.write("<h1>Number enter is" +num+ "and is Even</h1>");
    }
    else
    {
        console.log("Number enter is " +num+ " and is Odd");
        document.write("<h1>Number enter is" +num+ "and is Odd</h1>");
    }
    
}
even();