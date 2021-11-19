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
                    <input type="button" value="Clear" onclick="clearRegisterForm()">
                    <input type="submit" value="Register Here">
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
    document.getElementById("sfirstName").innerHTML = "";
    document.getElementById("slastName").value = "";
    document.getElementById("susername").value = "";
    document.getElementById("spassword").value = "";
    document.getElementById("scpassword").value = "";
    document.getElementById("semail").value = "";
    document.getElementById("sphone").value = "";
    document.getElementById("sgender").value = "";
    document.getElementById("sstate").value = "";

}

function validateLoginForm(){
    username = document.getElementById("lusername");
    password = document.getElementById("lpassword");

    if(username.value == "" && password.value == ""){
        if(username.value == ""){
            document.getElementById("susername").innerHTML = "* Required";
        }
        if(password.value ==""){
            document.getElementById("spassword").innerHTML = "* Required";
        }
    }
}