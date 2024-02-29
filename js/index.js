document.addEventListener("DOMContentLoaded",function () {
    const taskUser = document.getElementById("usuario");
    const taskSenha = document.getElementById("senha");
    const entrarTask = document.getElementById("btn2");
    
    entrarTask.addEventListener("click", function() {
        
        if(taskUser.value.trim() == "" || taskSenha.value.trim() == "" ){
            alert("Escreva algo");
    
        }else{
            if(taskUser.value.trim() == "admin" || taskSenha.value.trim() == "admin" ){
                alert("Proxima página");
                window.location.href = "pagina1.html";
            }
            else{
                alert("Usuário ou senha inválidos");
    
            }
    
        }
    });   
    });