calc=prompt("Press 1 for Addition.\nPress 2 for Substraction.\nPress 3 for Multiplication.\nPress 4 for Division.\nPress 5 for Square root.\nPress 6 for Percentage.\n");
switch (calc) {
    case "1":
        num1=Number(prompt("Enter the first number"));
        num2=Number(prompt("Enter the Second Number"));
        add= num1 + num2;
        document.write("Addition of two numbers " + num1 + " and " + num2 + " is : " +add);
        break;

    case "2":
        num1=Number(prompt("Enter the first number"));
        num2=Number(prompt("Enter the Second Number"));
        sub= num1 - num2;
        document.write("Substraction of two numbers " + num1 + " and " + num2 + " is : " +Sub);
        break;
    case "3":
            num1=Number(prompt("Enter the first number"));
            num2=Number(prompt("Enter the Second Number"));
            c= num1 * num2;
            document.write("Multiplication of two numbers " + num1 + " and " + num2 + " is : " +c);
            break;
    
    case "4":
            num1=Number(prompt("Enter the numerator number"));
            num2=Number(prompt("Enter the denominator Number"));
            c= num1 / num2;
            document.write("Division of two numbers " + num1 + " / " + num2 + " is : " +c);
            break;
            
    case "5":
            num1=Number(prompt("Enter the  number"));
            document.write("Squareroot of number " + num1 + " is : " +Math.sqrt(num1));
            break;
    case "6":
            num1=Number(prompt("Enter the  number"));
            num2=Number(prompt("Enter the percentage "));
            c= (num1/100)*num2;
            document.write("Percentage of  number " + num1 + " % " + num2 + " is : " +c);
            break;
    }


