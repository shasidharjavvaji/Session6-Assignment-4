var employeeArray = [
{name:"Shasidhar",
		age:30,
		Salary:500000,
		Address : {
             city:"Vijayawada",
             state:"Andhra pradesh",
             pincode:520010
			 }
},      
{name:"Kartheek",
		age:28,
		Salary:450000,
		Address : {
             city:"Vijayawada",
             state:"Andhra pradesh",
             pincode:520010
			 }
},
{name:"Yesaswini",
		age:23,
		Salary:60000,
		Address : {
             city:"Vijayawada",
             state:"Andhra pradesh",
             pincode:520010
			 }
},
{name:"Chaturya",
		age:24,
		Salary:70000,
		Address : {
             city:"Vijayawada",
             state:"Andhra pradesh",
             pincode:520010
			 }
},
{name:"Kavya",
		age:27,
		Salary:400000,
		Address : {
             city:"Vijayawada",
             state:"Andhra pradesh",
             pincode:520010
			 }
}	


];
for (var i=0; i<5; i++){
console.log("Name:"+employeeArray[i].name+"\nAge:"+employeeArray[i].age+"\nSalary:"+employeeArray[i].Salary+"\nCity:"+employeeArray[i].Address.city+"\nstate:"+employeeArray[i].Address.state+"\npincode:"+employeeArray[i].Address.pincode);
}