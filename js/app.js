const output = document.getElementById('output-screen')
function display(number){
    output.value += number
}
function Calculate(){
    try{
        output.value = eval(output.value)
    }
    catch(error){
        alert('bol decot kere kana')
    }
}

function Clear(){
    output.value = ''
}
function del (){
    output.value = output.value.slice(0, -1)
}