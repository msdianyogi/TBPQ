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

function clearChatBox(){
    document.getElementById("subject").value = "";
    document.getElementById("chatmessage").value = "";
}

function searchBox(){
    if(document.getElementById("search").value !=""){
        window.find(document.getElementById("search").value);
    }
}