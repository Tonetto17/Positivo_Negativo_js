function verificar(){
    var numero = window.document.getElementById('txtn')
    var res = window.document.getElementById('res')

    if(numero.value.length==0){
        window.alert('Campo está vazio')
    }else{
        var n= Number(numero.value)
       if(n>0){
        res.innerHTML=('Seu número é positivo')
       } else if (n<0){
        res.innerHTML=('Seu número é negativo')
       }else{
        res.innerHTML=('Seu número é zero')
       }

    }
}