document.addEventListener("DOMContentLoaded",function () {
    const taskUser = document.getElementById("taskUser");
    const taskSenha = document.getElementById("taskSenha");
    const entrarTask = document.getElementById("entrarTask");
        
    entrarTask.addEventListener("click", function() {
            
            
            
        if(taskUser.value.trim() == "" || taskSenha.value.trim() == "" ){
                alert("Escreva algo");
        
        }else if(taskUser.value.trim() == "admin" && taskSenha.value.trim() == "admin" ){
                    alert("Proxima página");
                    window.location.href = "pages/pagina1.html";
            }
            else{
                    alert("Usuário ou senha inválidos");
        
        }
     });
}); 