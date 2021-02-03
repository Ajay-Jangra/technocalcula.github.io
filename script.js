// it get the history value and print that
function getHistory(){
    return document.getElementById("history-value").innerText;
} 
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
//printHistory("9*-8+6");
// it get the output value from user
function printOutput(num){
    //if the value is empty print num else getformate tthe number
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
//printOutput("99999");
//it make the comma saprated value 
 function getFormattedNumber(num){
     //for -ve sign apper
     if(num=="-"){
         return "";
     }
     var n=Number(num);
     var value =n.toLocaleString("en");
     return value;
 }
// printOutput("99999");
 //now to manipulate the output values we need to convert this comma separated
 //back to the orignal number
 function reverseNumberFormat(num){
     return Number(num.replace(/,/g,''));
 }
 //now get to the operations using operator class there is a list of operators so use for loop to access one by one
 var operator =document.getElementsByClassName("operator");
 for(var i=0;i<operator.length;i++){
     //let give a click event listener to each of them 
     operator[i].addEventListener('click',function(){
         //inside this function we give what action we need to perform when the user click on it 
         //alert("This operator clicked "+this.id);
         //after click on any operator a popop mssg comes and says which operator is clicked 
         if(this.id=="clear"){//history and output is clear 
             printHistory("");
             printOutput("");
         }
         else if(this.id=="backspace"){//backspace should not deal with the commas
             var output = reverseNumberFormat(getOutput()).toString();
             if(output){//if output has a value
                 output=output.substr(0,output.length-1);
                 printOutput(output);
             }
         }
         else{
             var output=getOutput();
             var history =getHistory();
             //to relace the operator
             if(output==""&&history!=""){
                 if(isNaN(history[history.length-1])){
                     history = history.substr(0,history,length-1);
                 }
             }
             if(output!=""||history!=""){
                 //icondition?true:false
                 output = output==""? output:reverseNumberFormat(output);
                 history =history+output;
                 if(this.id=="="){
                     var result=eval(history);
                     printOutput(result);
                     printHistory("");
                 }
                 else{
                     history=history+this.id;
                     printHistory(history);
                     printOutput("");
                 }
             }
         }
     });
 }
 
 // let do the same for numbersss
 var number = document.getElementsByClassName("number");
 for(var i=0;i<number.length;i++){
     number[i].addEventListener('click',function(){
       // alert("This button clicked "+this.id);
        var output = reverseNumberFormat(getOutput());
        //let check if the output is a number before we proceed
        if(output!=NaN){//let concatenate the id to the output and print it 
             output = output +this.id;
             printOutput(output);
        }
     });
 }
 //remove all the alerts to proceed the logic

 //now when the number that user clicked just gets concatenatedso first get the output
 // with commas removed using our rule number format line51
