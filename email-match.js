<script>
    function confirmEmail() {
        var email = document.getElementById("email").value
        var confemail = document.getElementById("confemail").value
        if(email != confemail) {
            alert('Email Not Matching!');
        }
    }
</script>
<body>
  <form action="contact.php" method="post" name="form1" id="form1">
   <input name="email" type="text" required="1" id="email"/>
   <input name="emailConfirm" type="text" id="confemail" onblur="confirmEmail()"/>
</form>
</body>
