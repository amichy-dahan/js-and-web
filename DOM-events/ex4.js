addEventListener("DOMContentLoaded" , () =>{

   const btn = document.getElementById("btn");

   btn.addEventListener("click" ,() =>{

      
    validate();

   })
   function validate(){
       const inputName = document.getElementById("in1").value;
       if(!checkName(inputName)){
         addChild("need more then 2 char")
       }
       const salary = parseInt(document.getElementById("salary").value);
       if(!checkSalary(salary)){
         addChild("need salary betwen 10000 to 16000")
       }
       const date = document.getElementById("birthday").value;
       if (!checkDate(date)) {
         addChild("date is null")
       }
       const phone = document.getElementById("phone").value;
       if(!checkPhone(phone)){
       addChild("need phone length 10 ")
       }
  }
     
      function addChild (str){
         const add = document.getElementById("form");
         const newText = document.createElement("p")
          newText.textContent = str;
          add.appendChild(newText)
          
      }
  
      function checkName (name) {
         return name.length > 3
          
      }
      function checkSalary (salary) {
          return salary > 10000 && salary < 16000 ;
      
      }

      function checkDate (date) {
          return date !== ""
       
      }
       function checkPhone (phone) {
         return phone.length ===10
          
      }


})