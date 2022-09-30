let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
const chk = document.getElementById('chk');

function addTarefa(){
    // pegar o valor digitado no input
    let valorInput = input.value;
    //senão for vazio, nem nulo, nem indefinido
    if(valorInput !== "" && (valorInput!== null) && (valorInput!==undefined)){

        ++contador;
        
        let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-btn">
            <button onclick="deletar(${contador})" class="deletetask"> <i class="mdi mdi-delete"></i> Delete</button>
        </div>
    </div>`;

    //adicionar outro item no main
    main.innerHTML += novoItem;

    //zerar os campos
    input.value = "";
    input.focus();
    };
};

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log("classe");
    

    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");   
    }
    console.log("classe");
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
};


//função de evento para adicionar usando a tecla enter
input.addEventListener("keyup", function(event){
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    };
});


    chk.addEventListener('change', () =>{
        
        document.body.classList.toggle('white');
     
   

    });
