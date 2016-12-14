    function myForm(){
        var x = document.forms['form']['firstName'].value;
        var i = document.forms['form']['lastName'].value;
        var y = document.forms['form']['email'].value;

        var fn = document.getElementById('firstName');
        var ln = document.getElementById('lastName');
        var em = document.getElementById('email');

        var nameF = document.getElementById("nameF");
        var nameS = document.getElementById("nameS");
        var emailF = document.getElementById("emailF");

        if (x.length == 0){
            nameF.innerHTML='*данное поле обязательно для заполнения';
            nameF.style.color = 'red';
            fn.style.borderColor = 'red';
        }
        else{
            nameF.innerHTML='ok';
            nameF.style.color = 'blue';
            fn.style.borderColor = 'blue';
        }


        if (i.length == 0){
            nameS.innerHTML='*данное поле обязательно для заполнения';
            nameS.style.color = 'red';
            ln.style.borderColor = 'red';
        }
        else{
            nameS.innerHTML='ok';
            nameS.style.color = 'blue';
            ln.style.borderColor = 'blue';
        }


        if (y.length == 0){
            emailF.innerHTML='*данное поле обязательно для заполнения';
            emailF.style.color = 'red';
            em.style.borderColor = 'red';
            return false;
        }

        var at = y.indexOf("@");
        var dot = y.indexOf(".");
        if (at < 1 || dot < 1){
            emailF.innerHTML='*email введен не верно';
            emailF.style.color = 'red';
            em.style.borderColor = 'red';
            return false;
        }
        else{
            emailF.innerHTML='ok';
            emailF.style.color = 'blue';
            em.style.borderColor = 'blue';
        }
    }