$(function(){
    var login = {
        api: {

        },
        init: function(){
            login.isLoginRegist();
            login.toRegister();
        },
        isLoginRegist: function(){
            var isRegitser = getQueryString('register');
            if(isRegitser){
                $('.login_form').css('display', 'none');
                $('.register_form').css('display', 'block');
            }
        },
        toRegister: function(){
            $('.to_register').bind('click', function(){
                location.href = 'login.html?register=true';
            });
        },
        login: function(){
            $('#login_btn').bind('click', function(){
                
            });
        }

    };
    var register = {
        api: {

        },
        init: function(){
            register.toLogin();
        },
        toLogin: function(){
            $('.to_login').bind('click', function(){
                location.href = 'login.html';
            });
        }
    };
    login.init();
    register.init();
});