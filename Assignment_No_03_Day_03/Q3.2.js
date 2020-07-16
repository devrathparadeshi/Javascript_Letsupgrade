let marks=prompt("Enter Your Marks:")
document.write("Yours marks are "+marks);
switch (true){
    case  marks>=80:
        document.write("Grade : A");
        break;  
    case marks<79 && marks>=65:
        document.write(" Grade : B");
        break;
    case marks>64 && marks>=45:
        document.write(" Grade : C");
        break;
    case marks>44 && marks>=35:
        document.write(" Grade : D");
        break;
    case marks<35:
        document.write(" Grade : Fail");
        break;   
}