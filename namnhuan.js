var year = parseInt(prompt('Enter a year'));
if ( year % 4 ==0) {
    if (year % 100 ==0){
        if (year % 400 ==0){
            alert(year + 'is a leap year');
        }else {
            alert(year +'is No a leap year');}
    }else {
        alert(year + 'is Not a leap year');
    }
}else {
    alert(year + 'is Not a leap year');}