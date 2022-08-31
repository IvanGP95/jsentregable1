const plan = (a,b,c) => a + b + c

const btnBasico = document.getElementById("btn1");
btnBasico.addEventListener("click", capturar);

function capturar(){
    function Registro(nombre,plan,parcialidades,total){
        this.nombre=nombre;
        this.plan=plan;
        this.parcialidades=parcialidades;
        this.total=total;
    }
    const precio = (a,b,c) => a + b + c
    let nombreCapturar = document.getElementById("nombre2").value;
    let parcialidadesCapturar = document.querySelector("#basico").value;
    let cuotas = parseInt(parcialidadesCapturar)
    let inscripcion = 300
    let mantenimientoAnual= 599
    let contratoAnual= 3588
    let precioFinal = ((plan(inscripcion,mantenimientoAnual,contratoAnual))/cuotas).toFixed(2)
    
    if (nombreCapturar === "" || 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Favor de ingresar tu nombre!'
          })
    } else if (parcialidadesCapturar === "-- Selecciona Tus Parcialidades --") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Favor de ingresar el metodo de pago!'
          })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Completado',
            text: 'Este usuario ha sido registrado!'
          })
        nuevoRegistro = new Registro(nombreCapturar,"Básico",parcialidadesCapturar,parseFloat(precioFinal));
        agregar();
    }


}

   let usuarios = [];



   const btnPremium = document.getElementById('btn2');
   btnPremium.addEventListener("click", capturar2);



   function capturar2(){
    function Registro(nombre,plan,parcialidades,total){
        this.nombre=nombre;
        this.plan=plan;
        this.parcialidades=parcialidades;
        this.total=total;
    }
    const precio = (a,b,c) => a + b + c
    let nombreCapturar = document.getElementById("nombre3").value;
    let parcialidadesCapturar = document.querySelector("#parcialidadesPremium").value;
    let cuotas = parseInt(parcialidadesCapturar)
    let inscripcion = 0
    let mantenimientoAnual= 599
    let contratoAnual= 5988
    let precioFinal = ((plan(inscripcion,mantenimientoAnual,contratoAnual))/cuotas).toFixed(2)
    
    if (nombreCapturar === "" || 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Favor de ingresar tu nombre!'
          })
    } else if (parcialidadesCapturar === "-- Selecciona Tus Parcialidades --") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Favor de ingresar el metodo de pago!'
          })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Completado',
            text: 'Este usuario ha sido registrado!'
          })
        nuevoRegistro = new Registro(nombreCapturar,"Premium",parcialidadesCapturar,parseFloat(precioFinal));
        agregar();
    }
}
   function agregar(){
    usuarios.push(nuevoRegistro);
    console.log(usuarios);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoRegistro.nombre+'</td><td>'+nuevoRegistro.plan+'</td><td>'+nuevoRegistro.parcialidades+'</td><td>$ '+nuevoRegistro.total+' MXN</td></tbody>';
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    let usuariosJS = JSON.parse(localStorage.getItem("usuarios"));
   }