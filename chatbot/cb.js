    function talk() {
    var user = document.getElementById("text").value;
    document.getElementById("text").value="";
    document.getElementById("msg_area").innerHTML+= "<br>"+user +"<br>"+"<br>";
    document.getElementById("send").value;
    document.getElementById("send").value="";
    if(user in know)
    {
    document.getElementById("msg_area").innerHTML +=know[user]+"<br>";
    }
    else
    {
    document.getElementById("msg_area").innerHTML +="I Am Sorry I Don't Understand...<br> ";
    }

    function scroll(){
        var scrollMsg = document.getElementById('msg_area');
        scrollMsg.scrollTop = scrollMsg.scrollHeight ;
    }
    scroll();
    }