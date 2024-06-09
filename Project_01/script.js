const buttons = document.querySelectorAll(".buttons")
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target.id);
        const color = e.target.id;
        switch(color){
            case 'red':
                document.body.style.backgroundColor='red';
                break;
            case 'yellow':
                document.body.style.backgroundColor='yellow';
                break;
            case 'grey':
                document.body.style.backgroundColor='grey';
                break;
            case 'white':
                document.body.style.backgroundColor='white';
                break;
        }
        
    })
})