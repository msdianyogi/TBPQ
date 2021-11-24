function chatSubmit(){
    var subject = document.getElementById("subject").value;
    var chatMessage = document.getElementById("chatmessage").value;
    if(subject != "" && chatMessage != ""){
        if(window.confirm("Do You Want to Send this Message : ")){
            window.alert("Subject : "+subject+"\nDescription : "+chatMessage);
            clearChatBox();
            document.getElementById("subject").removeAttribute('required');
        }
        else{
            clearChatBox();
            document.getElementById("subject").removeAttribute('required');
        }
            
    }
}

function loadRegisterForm(){
    registerForm = `<h1>Register</h1>
    <form action="#" class="loginForm" method="dialog">
        <table class="loginTable">
            <tr>
                <td colspan="2">
                    <label for="firstName">
                        Full Name
                    </label>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" autocomplete="off">
                    <span id="sfirstName"></span>
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" autocomplete="off">
                    <span id="slastName"></span>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="username">
                        User Name
                    </label>
                </td>
                <td>
                    <input type="text" name="username" id="username" placeholder="E.g. yogesh2144" autocomplete="off">
                    <span id="susername"></span>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="email">
                        Email Id
                    </label>
                </td>
                <td>
                    <input type="text" name="email" id="email" placeholder="E.g. abc@gmail.com" autocomplete="off">
                    <span id="semail"></span>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="phone">
                        Phone Number
                    </label>
                </td>
                <td>
                    <input type="text" name="phone" id="phone" placeholder="E.g. +91-7058763963" autocomplete="off">
                    <span id="sphone"></span>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="password">
                        Password
                    </label>
                </td>
                <td>
                    <input type="password" name="password" id="password" placeholder="Enter Password" autocomplete="off">
                    <span id="spassword"></span>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="confirmPassword">
                        Confirm Password
                    </label>
                </td>
                <td>
                    <input type="text" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" autocomplete="off">
                    <span id="scpassword"></span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <label for="gender">
                    </label>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <label for="gender">Gender</label>
                    <input type="radio" name="gender" id="gender">
                    <label for="gender">Male</label>
                    <input type="radio" name="gender" id="gender">
                    <label for="gender">Female</label>
                    <input type="radio" name="gender" id="gender">
                    <label for="gender">Other</label>
                    <span id="sgender"></span>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="state">
                        State
                    </label>
                </td>
                <td>
                    <select name="state" id="state">
                        <option value="Select State" selected disabled>Select State</option>
                        <option value="Maharashtra"> Maharashtra </option>
                        <option value="Telangana"> Telangana </option>
                        <option value="Karnataka"> Karnataka </option>
                        <option value="Delhi"> Delhi </option>
                        <option value="Uttarpradesh"> Uttar Pradesh </option>
                        <option value="Madhyapradesh"> Madhya Pradesh </option>
                    </select>
                    <span id="sstate"></span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" value="Clear" onclick="clearRegisterForm()">
                    <input type="submit" value="Register Here" onclick="validateRegistrationForm()">
                </td>
            </tr>
        </table>
        <label><a href="#login" style="text-decoration : none; color : white;" onclick="loginForm()">Already Have Account? Login Here..</a></label>
    </form>`
    document.getElementById("login").innerHTML = registerForm;
}
function loginForm(){
    loginFormData = `<h1>Login</h1>
    <form action="#" class="loginForm" method="dialog" >
        <table class="loginTable">
            <tr>
                <td>
                    <label for="lusername">
                        User Name
                    </label>
                </td>
            </tr>
            <tr>    
                <td>
                    <input type="text" name="lusername" id="lusername" placeholder="Enter Username" autocomplete="off">
                    <span id="susername"></span>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="lpassword">
                        Password
                    </label>
                </td>
            </tr>
            <tr> 
                <td>
                    <input type="password" name="lpassword" id="lpassword" placeholder="Enter Password" autocomplete="off">
                    <span id="spassword"></span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="Reset" onclick="clearLoginForm()">
                    <input type="submit" value="Login Here" onclick="validateLoginForm()">
                </td>
            </tr>
        </table>
        <label><a href="#login" style="text-decoration : none; color : white;" onclick="loadRegisterForm()">Don't Have Account? Register Here..</a></label>
    </form>`
    document.getElementById("login").innerHTML = loginFormData;

}
function loadChatForm(){
    form_data = `<h1>Chat with us</h1>
    <form class="form" action="#" method="dialog">
        <label for="chat">
            Enter the Subject
        </label>
        <input class="input" name="chat" id="subject" type="text" placeholder="Enter The Subject" autocomplete="off"
            maxlength="150" required" autocomplete="off">
        <br>
        <label for="chatmessage">
            Enter the Description
        </label>
        <textarea name="chatmessage" id="chatmessage" cols="60" rows="8" placeholder="Enter Description"
            maxlength="500" autocomplete="off"></textarea>
        <br>
        <input style="width: max-content;" type="button" value="Clear" onclick="clearChatBox()">
        <input style="width: max-content;" type="submit" value="Send Message">
    </form>`;
    document.getElementById("chat").innerHTML = form_data;
}
function clearChatBox(){
    document.getElementById("subject").value = "";
    document.getElementById("chatmessage").value = "";
}


function searchBox(){
    if(document.getElementById("search").value !=""){
        window.find(document.getElementById("search").value);
    }
}

function clearLoginForm(){
    document.getElementById("lusername").value = "";
    document.getElementById("lpassword").value = "";
    
    document.getElementById("susername").innerHTML = "";
    document.getElementById("spassword").innerHTML = "";

}

function clearRegisterForm(){
    
    document.getElementById("sfirstName").innerHTML = "";
    document.getElementById("slastName").innerHTML = "";
    document.getElementById("susername").innerHTML = "";
    document.getElementById("spassword").innerHTML = "";
    document.getElementById("scpassword").innerHTML = "";
    document.getElementById("semail").innerHTML = "";
    document.getElementById("sphone").innerHTML = "";
    document.getElementById("sgender").innerHTML = "";
    document.getElementById("sstate").innerHTML = "";

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    var genderElements = document.getElementsByName("gender");
    for(var i=0;i<genderElements.length;i++){
        genderElements[i].checked = false;
    }
    stateSelected = document.getElementById("state");
    for (var i = 0; i < stateSelected.length; i++) {
        stateSelected[i].selected = stateSelected[i].defaultSelected;
    }
    

}

function validateLoginForm(){
    username = document.getElementById("lusername");
    password = document.getElementById("lpassword");

    usernameRegex = /^[\w]{6,20}$/;
    
    // Username Validation
    
    if(username.value == ""){
        document.getElementById("susername").innerHTML = "* Username Required";
    }
    else{
        if(usernameRegex.test(username.value)){
            document.getElementById("susername").innerHTML = "";
        }
        else{
            document.getElementById("susername").innerHTML = "* Username [6-20 Characters Long] Only Contains : Alphanumeric Characters";
        }
    }
    // Password Validation
    passwordRegex = / *[a-z]*[A-Z]*[\d]*[\W]/;

    if(password.value == ""){
        document.getElementById("spassword").innerHTML = "* Password Required ";
    }
    else{
        if(password.value.length > 5 && password.value.length < 20){
            if(passwordRegex.test(password.value)){
                document.getElementById("spassword").innerHTML = "";
            }    
            else{
                document.getElementById("spassword").innerHTML = "Must Conatin Atlest 1 [Uppercase, Lowercase, Special Character & Digit]]";
            }
        }
        else{
            document.getElementById("spassword").innerHTML = "Password Must [6-20 Charcters Long]";
        }
    }
}

function validateRegistrationForm(){
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;

    NameRegex = /^[A-Za-z]{2,19}$/;
    
    // First Name Validation
    
    if(firstName == ""){
        document.getElementById("sfirstName").innerHTML = "* Required";
    }
    else{
        if(NameRegex.test(firstName)){
            document.getElementById("sfirstName").innerHTML = "";
        }
        else{
            document.getElementById("sfirstName").innerHTML = "* First Name Must [2-19 Characters Long] ";
        }
    }

    // Last Name Validation
    
    if(lastName == ""){
        document.getElementById("slastName").innerHTML = "* Required";
    }
    else{
        if(NameRegex.test(lastName)){
            document.getElementById("slastName").innerHTML = "";
        }
        else{
            document.getElementById("slastName").innerHTML = "* Last Name Must [2-19 Characters Long] ";
        }
    }

    // Username Validation
    usernameRegex = /^[\w]{6,20}$/;
    
    if(username == ""){
        document.getElementById("susername").innerHTML = "* Username Required";
    }
    else{
        if(usernameRegex.test(username)){
            document.getElementById("susername").innerHTML = "";
        }
        else{
            document.getElementById("susername").innerHTML = "* Username [6-20 Characters Long] Only Contains : Alphanumeric Characters";
        }
    }

    // Password Validation
    passwordRegex = / *[a-z]*[A-Z]*[\d]*[\W]/;

    if(password == ""){
        document.getElementById("spassword").innerHTML = "* Password Required ";
    }
    else{
        if(password.length > 5 && password.length < 20){
            if(passwordRegex.test(password)){
                document.getElementById("spassword").innerHTML = "";
            }    
            else{
                document.getElementById("spassword").innerHTML = "Must Conatin Atlest 1 [Uppercase, Lowercase, Special Character & Digit]]";
            }
        }
        else{
            document.getElementById("spassword").innerHTML = "Password Must [6-20 Charcters Long]";
        }
    }

    // Confirm Password Validation
    if(confirmPassword == ""){
        document.getElementById("scpassword").innerHTML = "* Confirm Password Required ";
    }
    else{
        if(password == confirmPassword){
            document.getElementById("scpassword").innerHTML = "";
        }
        else{
            document.getElementById("scpassword").innerHTML = "* Password & Confirm Password Not Matched ";
        }
    }

    // Email Validation 

    emailRegex = /^[A-Za-z0-9._]*[@](gmail|yahoo|rediffmail|hotmail){1}[.](com|in|co.in|edu|edu.in){1}$/;
    if(email == ""){
        document.getElementById("semail").innerHTML = "* Email Required ";
    }
    else{
        if(emailRegex.test(email)){
            document.getElementById("semail").innerHTML = "";
        }    
        else{
            document.getElementById("semail").innerHTML = "* Email should be like abc@gmail.com";
        }
    }   
    
    // Phone Validation 

    phoneRegex = /[+]{0,1}[9]{0,1}[1]{0,1}[-]{0,1}[6-9]{1}[0-9]{9}/;
    if(phone == ""){
        document.getElementById("sphone").innerHTML = "* Phone Required ";
    }
    else{
        if(phoneRegex.test(phone)){
            document.getElementById("sphone").innerHTML = "";
        }    
        else{
            document.getElementById("sphone").innerHTML = "* Phone Number should be like +91-9876543210";
        }
    }
    // Gender Validation
    
    genderElements = document.getElementsByName("gender");
    gcount = 0
    for(var i=0;i<genderElements.length;i++){
        if(genderElements[i].checked == true){
            gcount+=1
        }
    }
    if(gcount == 0){
        document.getElementById("sgender").innerHTML = "* Gender Required";
    }
    else{
        document.getElementById("sgender").innerHTML = "";
    }
    
    
    // State Validation
    
    selectElements = document.getElementsByName("state");
    scount = 0
    for(var i=0;i<selectElements.length;i++){
        if(selectElements[i].selectedIndex != ""){
            scount+=1
        }
    }
    if(scount == 0){
        document.getElementById("sstate").innerHTML = "* State Required";
    }
    else{
        document.getElementById("sstate").innerHTML = "";
    }
}