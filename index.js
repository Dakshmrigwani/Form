function myfunction(){
  const message = document.getElementById("pol");
  message.innerHTML = "";
  let a = document.querySelector("input[name='fname']").value
  try{
    if (a == "") throw " empty";
    if (a.length <= 2) throw " not valid";
  }
    
  catch(err){
    message.innerHTML = "  *input is" + err;
    }
}
function myfunction1(){
  const message1 = document.getElementById("pol1")
  message1.innerHTML = "";
  let b = document.querySelector("input[name='femail']").value;
  try{
    if (b == "") throw " empty";
    if (b.length <= 10) throw " not valid";
  }
  catch(err1){
    message1.innerHTML = "  *input is" + err1;
  }
    
}
function myfunction2(){
  const message2 = document.getElementById("pol2")
  message2.innerHTML = "";
  let c = document.querySelector("input[name='fage']").value;
  try{
    if (c == "") throw " empty";
    if (c == 10) throw " not authorised";
    if (c >= 110) throw " not valid";
    if (c <= 0) throw "  not valid";
    
  }
  catch(err2){
    message2.innerHTML = "  *input is" + err2;
  }
    
}
function myfunction3(){
  const message3 = document.getElementById("pol3")
  message3.innerHTML = "";
  let d = document.querySelector("input[name='fphone']").value;
  try{
    if (d == "") throw " empty";
    if (d.length == 8) throw " not authorised";
    if (d.length == 9) throw " not authorised";
    if (d.length == 7) throw " not authorised";
    if (d.length == 6) throw " not authorised";
    if (d.length == 5) throw " not authorised";
    if (d.length == 4) throw " not authorised";
    if (d.length == 3) throw " not authorised";
    if (d.length == 2) throw " not authorised";
    if (d.length == 1) throw " not authorised";
    if (d.length == 0) throw " not authorised";
    if (d <= 11) throw " not valid";
  }
  catch(err3){
    message3.innerHTML = "  *input is" + err3;
  }
    
}
function myfunction4(){
  const message4 = document.getElementById("pol4")
  message4.innerHTML = "";
  let e = document.querySelector("input[name='fexp']").value;
  try{
    if (e == "") throw " empty";
    if (e >= 50) throw " not valid";
  }
  catch(err4){
    message4.innerHTML = "  *input is" + err4;
  }
    
}
