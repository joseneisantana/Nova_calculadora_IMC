function formularioImc() {
    const formulario  = document.querySelector('.formulario');
    const resultado =document.querySelector('.resultado')
    const pessoa =[]
    

        function receberValores(evento){
            evento.preventDefault();

            const nome = formulario.querySelector('.input-text-1');
            const sobrenome = formulario.querySelector('.input-text-2');
            const peso = formulario.querySelector('.input-text-3');
            const altura = formulario.querySelector('.input-text-4'); 

            const imc = peso.value / (altura.value * altura.value);

            pessoa.push({
                nome:nome.value,
                sobrenome:sobrenome.value,
                peso:parseFloat(peso.value),
                altura:parseFloat(altura.value),
                imc:parseFloat(imc)

                
            });
            let ImcResultados ='';
            
            if(imc <= 18.5){
                ImcResultados ='ABAIXO DO PESO Você está na Capa do Batman titela Precisa !' 
                imcClass = 'abaixo-peso';
            }else if (imc >18.5 && imc <= 24.9 ){
                ImcResultados ='PESO NORMAL Meus parabéns'
                imcClass = 'peso-normal';

            }else if(imc >=25 && imc<= 29.9){
                ImcResultados =' SOBRE PESO, Chegou a hora queimar essa pochete !'
                imcClass = 'sobre-peso';

            }else if(imc >=30 && imc <=34.9){
            ImcResultados =' Nossa NOSSA OBESIDADE GRAU 1 VAMOS TREINAR ?'
            imcClass = 'obesidade-grau-1';


            }else if (imc >=35 && imc <= 39.9){
                 ImcResultados ='MINHAN NOSSA OBESIDADE GRAU 2 TOME UMA ATITUDE E VAMOS TREINAR !'
                 imcClass = 'obesidade-grau-2';
          } else {
            ImcResultados ='  OBSIDADE GRAU 3 CARA A COISA ESTA SERIA CASO DE VIDA OU MORTE  HORA DE MUDAR DE VIDA '

            imcClass = 'obesidade-grau-3';
          }


           
          resultado.innerHTML += `
          <div class="${imcClass}">
              <p>Nome: ${nome.value} ${sobrenome.value}</p>
              <p>Seu IMC: ${imc.toFixed(2)}</p>
              <p>Resultado diz: ${ImcResultados}</p>
          </div>`;
        }

        
        
            
          

        formulario.addEventListener('submit', receberValores);

}

formularioImc();