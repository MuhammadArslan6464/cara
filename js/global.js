
// Email Validaton
function myfun() {

    var emailCheck = document.getElementById("emailCheck").value;

    var Pattern = /^[A-Za-z\d._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,3}$/;

    if(Pattern.test(emailCheck)){
        document.getElementById("show").innerHTML = " Hurry Email ID is correct";
        return true;
    }
    else{
        document.getElementById("showmsg").innerHTML = " Sorry Email ID is not correct";
        return false;
    }

}