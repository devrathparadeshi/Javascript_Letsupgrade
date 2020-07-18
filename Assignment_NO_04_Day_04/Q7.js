num=Number(prompt("Enter the Number"));
        for (let i=1;i<=num;i++){
            var x = false;
            for(let j=2;j<i;j++){
            if (i%j===0 && i!==j){
            x=true;

        }
    }
    if (x===false){
    document.write( +i+ "<br>")
    }

}
     