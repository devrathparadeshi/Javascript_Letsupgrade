let marks=prompt("Enter Your Marks:")
document.write("Yours marks are "+marks);
if (marks>=80) {
    document.write("Grade : A"); 
    
} 
else if (marks<79 && marks>=65) {
    document.write(" Grade : B");
}
else if (marks<64 && marks>=45) {
    document.write(" Grade : C");
}
else if (marks<44 && marks>=35) {
    document.write(" Grade : D");   
}
else{
    document.write(" Grade: Fail");
}