const container = document.querySelector(".container");
const inputNuevaTarea = document.querySelector('#nuevaTarea');
const botonAgregar = document.querySelector('#botonAgregar');

class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea);
    }
    crearDiv(nuevaTarea){
        const inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true;
        inputItem.classList.add(
            "item-input", "fs-6", "rounded-3", "text-white", 
            "bg-transparent", "border", "border-white", 
            "mt-2", "py-3", "px-3", "w-50"
        );
        inputItem.value = nuevaTarea;

        const divItem = document.createElement("div");
        divItem.classList.add("item");

        const botonEditar = document.createElement("button");
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
        botonEditar.classList.add(
            "mx-2", "boton-editar", "border-0", "text-white",
            "bg-primary", "py-2", "px-3", "fs-5", "rounded-3"
        );

        const botonRemover = document.createElement("button");
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
        botonRemover.classList.add(
            "border-0", "rounded-3", "text-white",
            "bg-danger", "border", "py-2", "px-3", "fs-5"
        );

        botonEditar.addEventListener("click", () => {
            inputItem.disabled = !inputItem.disabled;
            botonEditar.innerHTML = inputItem.disabled ? "<i class='fas fa-lock'></i>" : '<i class="fas fa-lock-open"></i>';
        })

        botonRemover.addEventListener("click", () =>{
            divItem.remove();
        })

        divItem.appendChild(inputItem);
        divItem.appendChild(botonEditar);
        divItem.appendChild(botonRemover);
        container.appendChild(divItem);

        //Efecto para la aparicion de tareas
        setTimeout(() => {
            divItem.classList.add("mostrar");
        }, 10);
    }
}

function chequearInput(){
    const valor = inputNuevaTarea.value.trim();

    if (valor !== '') {
        new Item(valor);          
        inputNuevaTarea.value = '';
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        botonAgregar.click();
    }
});

botonAgregar.addEventListener('click', chequearInput);

