num=prompt("Enter Number of Employees")
s=[];
function comision(i) {
    
    if (sales>0 && sales<=5000){
        console.log("The total commission earned by Employee :" +i + " is 2%" );
    }

    else if (sales>5001 && sales<=10000){
        console.log("The total commission earned by Employee :" +i + " is 5%" );
    }
    
    else if (sales>10001 && sales<=20000){
        console.log("The total commission earned by Employee :" +i + " is 7%" );
    }
    else 
    {
        console.log("The total commission earned Employee :" +i + " is 10%" );
    } 
    
}
for (let i = 1; i <= num; i++)
{
    sales=prompt("Enter the Sales of employee");
    s.push("Employee " +i+ ":" +sales)
    console.log(s)
    comision(i)
}
