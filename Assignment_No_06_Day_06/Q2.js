n = prompt("Enter the number")
document.write("<h1>Table of " + n + " is : <br></h1>")
for (let i = 1; i < 11; i++) {
    a = n * i;
    document.write(+n + " x " + i + " = " + a + "<br><br>");

}