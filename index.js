let tabla=[
    {nombre:'Luis Perez' ,cedula: '1129574282' ,direccion:'Calle 13 N°15 -25' ,correo_electronico: 'efe@gmail.com' ,telefono: '331123456790' ,ciudad: 'Barranquilla' ,departamento: 'Atlantico',codigopostal: '0451112'},
    {nombre:'Ronald Barraza' ,cedula: '143145675' ,direccion:'Calle 41 N°17C -185' ,correo_electronico: 'supervisor@gmail.com' ,telefono: '3216957814' ,ciudad: 'Medellin' ,departamento: 'Antioquia' ,codigopostal: '12345678'},
    {nombre:'Enrique Montes' ,cedula: '8755490' ,direccion:'Calle 38 N°78 -25' ,correo_electronico: 'otrapersona@gmail.com' ,telefono: '331414557' ,ciudad: 'Bogota' ,departamento: 'Cundinamarca' ,codigopostal: '987654321'}
]
let cuerpotabla = document.getElementById('tbody');
let a = 1;
const listar=()=>{
    let usuarios ="";
    for (let i = 0; i < tabla.length; i++){
        usuarios += `<tr><th scope="row">${i+1}</th><td>${tabla[i].nombre}</td><td>${tabla[i].cedula}</td><td>${tabla[i].direccion}</td><td>${tabla[i].correo_electronico}</td><td>${tabla[i].telefono}</td><td>
        ${tabla[i].ciudad}</td><td>${tabla[i].departamento}</td><td>${tabla[i].codigopostal}</td></tr>`;
    }
  cuerpotabla.innerHTML = usuarios;
}

const registrar=()=>{
    const nombre = document.getElementById('nombre').value ;
    const cedula = document.getElementById('cedula').value ;
    const direccion = document.getElementById('direccion').value ;
    const correo_electronico = document.getElementById('correo_electronico').value ;
    const telefono = document.getElementById('telefono').value ;
    const ciudad = document.getElementById('ciudad').value ;
    const departamento = document.getElementById('departamento').value ;
    const codigopostal = document.getElementById('codigopostal').value ;
    
    cuerpotabla.innerHTML += `<tr><th scope="row">${a}</th><td>${nombre}</td><td>${cedula}</td><td>${direccion}</td>
    <td>${correo_electronico}</td><td>${telefono}</td><td>${ciudad}</td><td>${departamento}</td><td>${codigopostal}</td></tr>`; 
    const nuevo = {nombre,cedula,direccion,correo_electronico,telefono,ciudad,departamento,codigopostal};
    tabla.push(nuevo);
    
}

