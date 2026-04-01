function gradecalc(percent)
{
    switch(true)
    {
        case percent> 90:
            console.log("Grade A")
            break;
        case percent>=80 && percent <=90:
            console.log("Grade B")
            break;
        case percent>=70 && percent <=80:
            console.log("Grade C")
            break;
        case percent>=60 && percent <=70:
            console.log("Grade D")
            break;
        case percent>=50 && percent <=60:
            console.log("Grade E")
            break;
        default:
            console.log("Grade F")
            break;
    }
}

gradecalc(99)
gradecalc(77.5)
gradecalc(55)
gradecalc(45)