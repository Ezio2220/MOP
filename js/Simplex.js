
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
    var NV = document.getElementById("nvar").value;
    var NR = document.getElementById("nres").value;
    var plano = document.getElementById("Stabla1");

    var contenido = " ";
    contenido+="<table class='table'><thead> <tr> "+
               "<th class='text-center mx-auto'>VS</th>";
    for(var i=0;i<NV;i++){
        contenido+="<th>X"+(i+1)+"</th>";
    }
    contenido+="<th class='text-center mx-auto'>tipo</th> <th class='text-center mx-auto'>Bi</th> </tr>"+
    "</thead> <tbody>";
    for(var j=0;j<NR;j++){
        contenido+="<tr><td class='text-center mx-auto'>R"+(j+1)+"</td>";
        for(var i=0;i<=NV;i++){
        if(i==NV){
            contenido+="<td> <select  id='t"+j+"'><option value='1' selected>≤</option>"+
            "<option value='2'>≥</option>"+
            "<option value='3'>=</option></select> </td>";
        }
        contenido+="<td> <input type='number' id='n"+j+"*"+i+"'> </td>";
        }
    }
    contenido+="</tbody> </table>";
    
    alert(contenido);
    contenido+="<input type='radio' name='option' id='min'>Minimizar"+
    "<input type='radio' name='option' id='max'> Maximizar <br>"
    +"  <center><button id='gen2' onclick='Generar2();' type='button' rel='tooltip' class='btn btn-info'> RESOLVER! </button> </center>"
    plano.innerHTML=contenido;
    
}