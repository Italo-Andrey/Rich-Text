//elementos
const elements = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.selector')
//events 
elements.forEach(element =>{
    element.addEventListener('click', ()=>{
        let command = element.dataset['element'];
        if( command == 'createLink' || command == 'insertImage'){
            let url = prompt('Digite o link aqui:', 'http://')
            
            document.execCommand(command, false, url);
            element.style.backgroundColor = "#e0e2e2";
        }
        else {
            document.execCommand(command, false, null);
            element.style.backgroundColor = "#e0e2e2";
        }
  
    });
});

function option(command, value){
        document.execCommand(command, false,value);
    
}