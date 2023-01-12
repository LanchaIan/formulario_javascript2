function funcion_reset() {
    if (confirm("¿Está seguro de que quiere reinicializar todos los" +
    " campos del formulario?")) {
    return true
    }
    else {
    return false
    }
    }
    
    function conseguir_input_radio() {
        let radios = document.getElementsByName('sexo');
        for (let radio of radios)
        {
            if (radio.checked) {
                return radio.value;
            }
        }
    }
    
    function conseguir_datos() {
        let persona = [];
        let apellidos = document.getElementById("apellidos").value;
        let nombre = document.getElementById("nombre").value;
        let sexo = conseguir_input_radio();
        let correo = document.getElementById("correo").value;
        persona.push(apellidos);
        persona.push(nombre);
        persona.push(sexo);
        persona.push(correo);
        let info = [];
        let mat_audiovi = document.getElementById("mat_audiovi");
        let textos_elec = document.getElementById("textos_elec");
        let libros = document.getElementById("libros");
        if (mat_audiovi.checked == true){  
            info.push("Material audiovisual");
          }  
          if (textos_elec.checked == true){  
            info.push("Textos electrónicos");   
          }  
          if (libros.checked == true){  
            info.push("Libros de texto"); 
          }  
        persona.push(info);
        let camino = document.getElementById("camino").value;
        persona.push(camino);
        return persona;
    }
    
    function conseguir_datos_resumidos(){
        let persona = conseguir_datos();
        return persona[0] + " " + persona[1] + " Correo electrínico: " + persona[3];
    }
    
    function añadir(){
        let persona = document.createElement('option');
        let datos = conseguir_datos_resumidos();
        persona.value = datos;
        persona.text = datos;
        let $select = document.querySelector("#personas");
        $select.appendChild(persona);
    }