function patetafase1 (){
    while(true){
      let resposta = prompt("digite sua resposta")
      if (resposta == 1) {
           window.location.assign('../paginas_html/pagPatetaPt2.html');
          
          break
      }
      else if (resposta == 2) { 
          window.location.assign('../paginas_html/pagPatetaPt3.html')
      break
      }
      else{alert("por favor, digite apenas 1 ou 2")
         donald()
          break
      }
  }
  }