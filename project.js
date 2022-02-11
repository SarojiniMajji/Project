let invalidBorder = "2px solid red";
let validBorder = "2px solid green";
let fnameNode; let spanNode1;
let mobileNode; let spanNode2;
let emailNode; let spanNode3;
let passNode; let spanNode4; 
let confpassNode; let spanNode5;

$(document).ready(function(){
    fnameNode = $('#fname');
    spanNode1 = $('#error1');
    fnameNode.blur(()=>validate1());

    mobileNode = $('#mobile');
    spanNode2 = $('#error2');
    mobileNode.blur(()=>validate2());

    emailNode = $('#emailId');
    spanNode3 = $('#error3');
    emailNode.blur(()=>validate3());

    passNode = $('#pass1');
    spanNode4 = $('#error4');
    passNode.blur(()=>validate4());

    confpassNode = $('#pass2');
    spanNode5 = $('#error5');
    confpassNode.blur(()=>validate5());

    $('#rForm').submit(()=> formValidation());

    $("#showp").change(()=>{
        if($('#showp').prop('checked')){
            $("#pass1, #pass2").attr('type',"text");
        }
        else{
            $("#pass1, #pass2").attr('type',"password");
        }
    });
});

function validate1(){
    let firstName = fnameNode.val();
    spanNode1.text("");
    if(firstName===''){
        spanNode1.text("Required*");
        fnameNode.css({'border': invalidBorder});
        return false;
    }
    else{
        fnameNode.css({'border': validBorder});
        return true;
    }
}

function validate2(){
    let mobileNumber = mobileNode.val();
    spanNode2.text("");
    let regexp = new RegExp("^[0-9]{10}$");
    let result = regexp.test(mobileNumber); 
    if(mobileNumber===''){
        spanNode2.text("Required*");
        mobileNode.css({'border': invalidBorder});
        return false;
    }
    else if(result===false){
        spanNode2.text("Please enter valid mobile number");
        mobileNode.css({'border': invalidBorder});
        return false;
    }
    else{
        mobileNode.css({'border': validBorder});
        return true;
    }
}

function validate3(){
    let email = emailNode.val();
    spanNode3.text("");
    if(email===''){
        spanNode3.text("Required*");
        emailNode.css({'border': invalidBorder});
        return false;
    }
    else if(!email.includes('@') || email.substring(email.indexOf('@')+1)===''){
        spanNode3.text("Please put valid Email id");
        emailNode.css({'border': invalidBorder});
        return false;
    }
    else{
        emailNode.css({'border': validBorder});
        return true;
    }
}

function validate4(){
    let password = passNode.val();
    console.log(password);
    spanNode4.text("");
    let regexp = new RegExp("^[A-Za-z0-9!@#$%^&*]{5,12}$");
    let result = regexp.test(password); 
    if(password===''){
        spanNode4.text("Required*");
        passNode.css({'border': invalidBorder});
        return false;
    }
    else if(result===false){
        spanNode4.text("Password should contain atleast 5 to 12 charaters");
        passNode.css({'border': invalidBorder});
        return false;
    }
    else{
        passNode.css({'border': validBorder});
        return true;
    }
}

function validate5(){
    let confirmpassword = confpassNode.val();
    let password = passNode.val();
    console.log(password);
    spanNode5.text("");
    if(confirmpassword===''){
        spanNode5.text("Required*");
        confpassNode.css({'border': invalidBorder});
        return false;
    }
    else if(confirmpassword !== password){
        spanNode5.text("Confirm Password should be matched");
        confpassNode.css({'border': invalidBorder});
        return false;
    }
    else{
        confpassNode.css({'border': validBorder});
        return true;
    }
}

function formValidation(){
    let st1 = validate1();
    let st4 = validate2();
    let st5 = validate3();
    let st6 = validate4();
    let st7 = validate5();
    return (st1 && st2 && st3 && st4 && st5)
}