const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


window.onload = checkLogin;//Check to see if user is logged in already

            function checkLogin(){
                if(sessionStorage.loggedInUsrEmail !== undefined){
                    //Extract details of logged in user
                    
					//Say welcome to logged in user
                    document.getElementById("FeedbackPara").innerHTML = sessionStorage.loggedInUser+
				 " logged in.";
                }
            }
            
			let cookies = document.cookie;


function login(){
	document.getElementById("FeedbackPara").innerHTML= "";
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let usrFound = false;
	for(let key of Object.keys(localStorage)){
		if(email == key){
			usrFound = true;
			let usr = JSON.parse(localStorage[key]);
			if(usr.password === password){
                sessionStorage.loggedInUser = email;
				console.log(email);
				let usrObj = JSON.parse(localStorage[email]);
				document.getElementById("FeedbackPara").innerHTML = usrObj.email + " logged in.";
				window.location.href="Quiz.php";
				
			}
			else{
				document.getElementById("FeedbackPara").innerHTML= "Incorrect password.";
			}
		}
	}
	if(!usrFound){
		document.getElementById("FeedbackPara").innerHTML= "User not found";
	}
}




