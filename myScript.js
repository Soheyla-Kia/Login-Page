              function myFunction() {
                let arr= [{userName:"A@gmail.com",password:"123"},{userName:"B@gmail.com",password:"321"},{userName:"C@gmail.com",password:"456"},{userName:"D@gmail.com",password:"654"}];
                let find=false;
                for(i=0; i<arr.length;i++){
                  let res = arr[i];
                  let user= document.getElementById("email").value;
                  let pass= document.getElementById("pass").value;
                  if(res.userName==user && res.password==pass) {
                find=true;
                  }
              }
              if(find==true){
                  window.alert("welcome...");
              }else{
                  window.alert("please enter your password!");
              }
            }
