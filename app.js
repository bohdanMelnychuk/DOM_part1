

var limitEmployee = 10;
var basaEmployee = [];
var salary = 1000;
var sumSalary = 0;


var Employee = {
	fName: "",
	lName: "",
	salary: 0,
	position: "",
	fullInfo:function(fName,lName,salary,position){
		this.firstNameMember = fName;
		this.lastNameMember = lName;
		this.salary = salary;
		this.position = position
		
	}
}



var add = document.getElementById('add');
 add.onclick = function(){
	document.getElementById('listRules').style = "display:block";
	add.style = "display:none";
}
var addEmployee = document.getElementById('newEmployee');
	addEmployee.onclick = function(){
		var firstNameMember = convertCase(document.getElementById('firstNameValue').value);
		var lastNameMember = convertCase(document.getElementById('lastNameValue').value);
		var salary = parseInt(document.getElementById('salaryValue').value, 10);
		var position = convertCase(document.getElementById('positionValue').value);
		 if(firstNameMember === "" || lastNameMember === "" || isNaN(salary) || position === ""){
			alert("This field must be all valid");
		}else{
		Employee.fullInfo(firstNameMember, lastNameMember, salary, position);
		basaEmployee.push(Employee);
		document.getElementById('up').innerHTML = basaEmployee.length;
		var employeeArray = basaEmployee[basaEmployee.length - 1];
		sumSalary += Employee.salary;
		salary = Math.floor((sumSalary / basaEmployee.length +1));
		document.getElementById('up-1').innerHTML = salary - 1;
			if(salary > 2000){
				alert("Our company don\'t have so much money. Your salary is very high");
				document.getElementById('up-1').style.backgroundColor = 'red';
				document.getElementById('listRules').style = "display:none";
				document.getElementById('add').style = "display:none";
				resetValue();
				document.getElementById('up').innerHTML = basaEmployee.length - 1;
				remElement();
				
			}
			if(basaEmployee.length > limitEmployee ){
				alert("Sorry but the maximum member is " + limitEmployee);
				document.getElementById('up').innerHTML = limitEmployee;
				document.getElementById('listRules').style = "display:none";
				document.getElementById('add').style = "display:none";
				remElement();
			}
		 }
		resetValue();
		
		var employeeListAdd = document.createElement('li');
		employeeListAdd.innerHTML = "<div class='firstName item'>"  + employeeArray.firstNameMember + "</div>" + "<div class='lastName item'>" + employeeArray.lastNameMember + "</div>" + "<div class='salary item'>" + employeeArray.salary + '$' + "</div>" + "<div class='position item'>" + employeeArray.position + "</div>";
		document.getElementById('employeeList').appendChild(employeeListAdd);
		document.getElementById('listRules').style = "display:none";
	    document.getElementById('add').style = "display:block";
	}   
	
	function convertCase(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	function resetValue(){
		document.getElementById('firstNameValue').value = null;
		document.getElementById('lastNameValue').value = null;
		document.getElementById('salaryValue').value = null;
		document.getElementById('positionValue').value = null;
	}
	function remElement(){
		var parant = document.getElementsByTagName('ul');
		var child = document.getElementsByTagName('li');
		parant.removeChild(child);
	}