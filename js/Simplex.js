
function comp1(id1,id2,sujeto){
    var c1 = document.getElementById(id1).value;
    var c2 = document.getElementById(id2).value;
    var but = document.getElementById(sujeto);
    
  
    if(c1.toString().length && c2.toString().length>0){
        if(c1>1 && c2>1){
            
            but.disabled=false;
        }else{
            but.disabled=true;
        }
    }else{
        but.disabled=true;
    }

}
var nvariables;
function Generar(){
    var NV = document.getElementById("nvar").value;//se toma el numero de variables
    var NR = document.getElementById("nres").value;//se toma el numero de restricciones
    var plano = document.getElementById("Stabla1");//se toma el lugar donde se metera todo esto
//----------------------------------Dibuja el inicio de la tabla y el encabezados VS y cada una de las variables
    var contenido = " ";
    contenido+="<table class='table'><thead> <tr> "+
               "<th class='text-center mx-auto'>VS</th>";
    for(var i=0;i<NV;i++){//con este for se hace que se pongan todas las variables que se dijo que tendrian
        contenido+="<th>X"+(i+1)+"</th>";
    }
    //abajo se agrega la columna tipo donde ira que tipo de restriccion es mayor menor o igual y tambien la columna para el bi
    contenido+="<th class='text-center mx-auto'>tipo</th> <th class='text-center mx-auto'>Bi</th> </tr>"+
    "</thead> <tbody>";
    //se inicio arriba el cuerpo de la tabal y ahora aca abajo se ira iterando por cada restriccion existente
    for(var j=0;j<NR;j++){
        contenido+="<tr><td class='text-center mx-auto'>R"+(j+1)+"</td>";
        for(var i=0;i<=NV;i++){//y para cada restriccion se haran columnas por cada variable que se dijo que habria
        if(i==NV){//antes de llegar a poner el cuadrito para el bi se pondra el cuadrito para el tipo para que elija que tipo de restriccion sera
            contenido+="<td> <select  id='t"+j+"'><option value='1' selected>≤</option>"+
            "<option value='2'>≥</option>"+
            "<option value='3'>=</option></select> </td>";
        }
        contenido+="<td> <input type='number' id='n"+j+"*"+i+"'> </td>";//se va poniendo cada cuadrito su id es : n(numero de restriccion)-(columna)
        }
    }

    contenido+="<tr><td class='text-center mx-auto'>Z</td>";//agrega la fila de Z
    for(var i=0;i<=NV;i++){                    //agrega todas las x para Z
        if(i==NV){
            contenido+="<td> </td>";
        }
        contenido+="<td> <input type='number' id='Z"+i+"'> </td>"; 
    }
    contenido+="</tbody> </table>";
//-------------------------------------------------DIBUJA LAS OPCIONES DE MINIMZAR MAXIMIZAR y el boton resolver!----------------    
    alert(contenido);
    contenido+="<input type='radio' name='option' id='min'>Minimizar"+
    "<input type='radio' name='option' id='max'> Maximizar <br>"
    +"  <center><button id='gen2' onclick='Generar2();' type='button' rel='tooltip' class='btn btn-info'> RESOLVER! </button> </center>"
    plano.innerHTML=contenido;
    
}