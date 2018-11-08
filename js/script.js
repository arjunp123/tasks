function read()
  {
    var name = document.getElementById("getname").value;
    console.log(name)
    var pass = document.getElementById("getpass").value;
   if(pass>=1234)
   {
       alert("SUCCESSFULL")
       console.log("SUCCESSFULL")
   }
   else
   {
       alert("WRONG PASSWORD")
       console.log("WRONG PASSWORD")
   }
  }
