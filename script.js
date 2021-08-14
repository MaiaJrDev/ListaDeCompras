    var ul = document.getElementById("minhaLista");
	var li;
	var itemId;
	var item ;
	//Função que adiciona os itens
	addItem	= function (){
		//verifica se o input foi preenchido
		if(document.getElementById("itemList").value != ""){

			item   = document.getElementById("itemList");
        //atribui a variavel os elementos filhos
			itemId = ul.childElementCount;
        //insere a li dentro da ul e o botão
			li 	   = criarItem(item.value,itemId);
			li.appendChild(criarBotao(itemId));
			ul.appendChild(li);
      
			item.value = "";
			item.focus();
		}else{
			//retorna um alerta se o campo estiver vazio
			alert('insira um Valor!');
		}

	}

	removerItem = function( itemId ){
        // remove o item conforme o indice
		for( i = 0 ; i < ul.children.length ; i++){

			if(ul.children[i].getAttribute("index") == itemId ){

				ul.children[i].remove();

			}
		}
	}
    //cria os itens na li com o atributo index e o valor (indice da ul)
	criarItem = function(itemValue, itemId){

		let li = document.createElement("li");

		li.setAttribute("index", itemId);

		li.appendChild(document.createTextNode(itemValue));

		return li;
	}
	
	//cria o botão para excluir conforme o indice
	criarBotao = function(itemId){
		let btn =  document.createElement("button");
		btn.setAttribute('class', 'boo');
		btn.setAttribute("onclick", "removerItem("+itemId+")"); 
		btn.innerHTML ="X"
		return btn;
	}



/**var compras = [];

  function list(){

    
  var a = document.getElementById('n').value;

  if(a == ''){
    alert('insira um valor');
  }
  
  compras.push(a +'<br />');
  document.getElementById('n').value = '';
  document.getElementById('n').focus();
  var compras2 = compras.join('');
  


  for(let i = 0; i <= compras.length; i++){
     
      document.getElementById('result').innerHTML = compras2;
      var novaDiv = document.createElement("div");
      var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
      novaDiv.appendChild(novaDiv);
    }
    
}

function excluir(){
  valor = ss;
  document.getElementById(valor).remove();
  


}

*/
/**function date(){
//Exibir a data na div
   var now = new Date();

   let dayName = new Array("Domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
   let mesName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "Julho", "agosto", "outubro", "novembro", "dezembro");

   let data = dayName[now.getDay()] +', ' +now.getDate() +' de ' +mesName[now.getMonth()] +' de ' +now.getFullYear();

  document.getElementById('date').innerHTML = data;

} 
*/
