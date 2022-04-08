let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let sueldoActualizado : number = 0;

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let sueldoIngresado = Number(prompt("Ingrese su Sueldo aqui"));
  if(sueldoIngresado <=15000){
    sueldoActualizado = sueldoIngresado*1.20;
    console.log("Su Sueldo Actualizado es :"+sueldoActualizado);
  }else{
      if(sueldoIngresado>15000 && sueldoIngresado<=20000){
        sueldoActualizado = sueldoIngresado*1.10;
        console.log("Su Sueldo Actualizado es :"+sueldoActualizado);
      }else{
        if(sueldoIngresado>20000 && sueldoIngresado<=25000){
          sueldoActualizado = sueldoIngresado*1.05;
          console.log("Su Sueldo Actualizado es:"+sueldoActualizado);
        }else{
          console.log("Su Sueldo no Recibe Bonificacion");
        }
  }
 
});
