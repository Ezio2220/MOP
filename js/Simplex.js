
function comp1(id1,id2,sujeto){
    var c1 = document.getElementById(id1).value;
    var c2 = document.getElementById(id2).value;
 //   var but = document.getElementById(sujeto);
    
  
    if(c1.toString().length && c2.toString().length>0){
        if(c1>1 && c2>1){
            
            //but.disabled=false;
            Generar();
        }else{
            document.getElementById("Stabla1").innerHTML=" ";
           // but.disabled=true;
        }
    }else{
        document.getElementById("Stabla1").innerHTML=" ";
        //but.disabled=true;
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
        contenido+="<td> <input onchange='comp2("+NV+","+NR+",1, \"gen2\");' type='number' id='n"+j+"*"+i+"'> </td>";//se va poniendo cada cuadrito su id es : n(numero de restriccion)-(columna)
        }
    }

    contenido+="<tr><td class='text-center mx-auto'>Z</td>";//agrega la fila de Z
    for(var i=0;i<=NV;i++){                    //agrega todas las x para Z
        if(i==NV){
            contenido+="<td> </td>";
        }
        contenido+="<td> <input onchange='comp2("+NV+",1,0, \"gen2\");' type='number' id='Z"+i+"'> </td>"; 
    }
    contenido+="</tbody> </table>";
//-------------------------------------------------DIBUJA LAS OPCIONES DE MINIMZAR MAXIMIZAR y el boton resolver!----------------    
    //alert(contenido); esto muestra lo que manda
    contenido+="<input type='radio' name='option' id='min'>Minimizar"+
    "<input type='radio' name='option' id='max'> Maximizar <br>"
    +"  <center><button id='gen2' onclick='Generar2("+NV+","+NR+");' type='button' rel='tooltip' class='btn btn-info'> RESOLVER! </button> </center> <br>"
    plano.innerHTML=contenido;
    document.getElementById("Z"+NV).value = 0;
    document.getElementById("Z"+NV).disabled = true;
}

var NVF;

function comp2(nv,nr,t,obj){
    var dato;//el que ira midiendo cada dato
    var but = document.getElementById(obj);//boton generar
    var n=-1;//usado para contar que almenos se repita 1 vez ya que debe comprobar no solo que las restricciones esten llenas sino que tambien Z
    do{
        n++;
        for(var j=0;j<nr;j++){//restricciones
            for(var i=0;i<=nv;i++){//variables hasta bi
                if(t==1){//si esta verificando campos de una restriccion
                    dato = document.getElementById("n"+j+"*"+i).value;//dato toma el valor de cada restriccion
                }else{
                    dato = document.getElementById("Z"+i).value; //dato toma el valor de cada Z
                }

                if(dato.toString().length >0){//si no esta vacio entonces activa el boton pero seguira iterando
                
                but.disabled=false;                

                }else{//si llega a encontrar un dato vacio entonces desactiva el boton envia la alerta y termina de iterar
                    but.disabled=true;
                   // alert("NO DEJE CAMPOS VACIOS si no hay variables coloque un 0");
                    return;
                }
            }
        }
        if(t==1){//si evaluo todas las restricciones y no estaban vacias ahora evaluara Z
            t=0;
        }else{//si evaluaba Z y todas las partes no estaban vacias entonces evaluara ahora las restricciones
            t=1;
            nr = document.getElementById("nres").value;
        }
    }while(n==0);
    
}



function Generar2(nv,nr){
    var Typ;
    if(document.getElementById("min").checked || document.getElementById("max").checked ){
        if(document.getElementById("min").checked){
            Typ="min";
        }else{
            Typ="max";
        }
    }else{
        alert("ELIJA si maximizar o minimizar!");
        return;
    }

    NVF = nv;

    var Bi = [];
    var type = [];  
    var rest = [];
    var Z = new Array(nv); 
    for(var i=0;i<nr;i++){
        rest.push(new Array(nv)); 
        type.push(document.getElementById("t"+i).value);
        Bi.push(Number(document.getElementById("n"+i+"*"+nv).value));
    }
    Bi.push(document.getElementById("Z"+nv).value);
    for(var i=0;i<nr;i++){

        for(var j=0;j<nv;j++){
            rest[i][j]=document.getElementById("n"+i+"*"+j).value; 
            Z[j]= document.getElementById("Z"+j).value;
        }
    }
    
 
var pos=[];

    for(var x=0;x<nr;x++){
        if(type[x]== 1){
            NVF+=1;
            for(var i=0;i<nr;i++){
                if(i==x){
                    rest[i].push(1);
                }else{
                    rest[i].push(0);
                }
            }
            Z.push(0);
            pos.push(NVF);
        }
        
        if(type[x]==2){

            NVF+=2;
            for(var i=0;i<nr;i++){
                if(i==x){
                    rest[i].push(-1);
                    rest[i].push(1);
                }else{
                    rest[i].push(0);
                    rest[i].push(0);
                }
            }
            Z.push(0);
            if(Typ=="min"){
                Z.push(1);
            }else{
                Z.push(-1);
            }
            
            pos.push(NVF);
        }
        if(type[x]==3){

            NVF+=1;
            for(var i=0;i<nr;i++){
                if(i==x){
                    
                    rest[i].push(1);
                }else{
                    rest[i].push(0);
                }
            }
            if(Typ=="min"){
                Z.push(1);
            }else{
                Z.push(-1);
            }
            

            pos.push(NVF);
        }
    }
    
    console.log(rest);
    console.log(Bi);
    console.log(Z);
    console.log(pos);
    var M = [];
    for(var i=0;i<=NVF;i++){        
        M.push(Math.round(0));
    }
    console.log(M);
    var contenido2 = " ";
    contenido2+=" <h3><u>SOL</u></h3> <br> ";
    for(var i=0;i<nr;i++){
        contenido2+=(i+1)+")";
        for(var j=0;j<NVF;j++){
            if(rest[i][j]!=0){
                
                if(rest[i][j] == 1){
                    if(j!=0){
                        contenido2+="+";
                    }
                    contenido2+= "X"+(j+1);
                }else if(rest[i][j] == -1){
                    contenido2+= "-X"+(j+1);
                }else{
                    if(j!=0){
                        contenido2+="+";
                    }
                    contenido2+= rest[i][j]+"X"+(j+1);
                }
                
            }
            
        }
        contenido2+="<br>";
    }
    
    var plano2 = document.getElementById("Stabla2");

    contenido2 += "<table class='table'> <thead> <tr> <th class='text-center mx-auto'>V.b</th> ";
    
    for(var i=0;i<NVF;i++){
        contenido2+="<th class='text-center'>X"+(i+1)+"</th>";
    }
    contenido2+="<th class='text-center'>Bi</th> </tr> </thead> <tbody>";

    for(var i=0;i<nr;i++){
        contenido2+="<tr> <td class='text-center'>X"+pos[i]+"</td>";
        for(var j=0;j<NVF;j++){
            contenido2+="<td class='text-center'> "+rest[i][j]+" </td>";
        }
        contenido2+="<td class='text-center'> "+Bi[i]+" </td></tr>";
    }
    contenido2+="<tr><td class='text-center'><b>Z</b></td>";
    for(var i=0;i<NVF;i++){
        contenido2+="<td class='text-center'> "+Z[i]+" </td>";
    }
    contenido2+="<td class='text-center'> "+Bi[nr]+"</td> </tr> </tbody> </table> </br></br>";

    plano2.innerHTML = contenido2;
//----------------------------------------------------------------------------------------------------
    
    //agregacion de los M de Z
    for(var i=0;i<=NVF;i++){
        
        /*for(var x=0;x<pos.length;x++){
        }*/
        if(i==NVF){
            for(var j=0;j<nr;j++){
                if(type[j]==2 || type[j]==3){
                   if(Typ=="min"){
                     M[i] += Number(Bi[j]) ;   
                   }else{
                     M[i] -= Number(Bi[j]); 
                   } 
                  // alert(Bi[j]);
                   
                }
            }
            break;
        }


        for(var j=0;j<nr;j++){
            if(type[j]==2 || type[j]==3){
               if(Typ=="min"){
                 M[i] += Number(rest[j][i]) ;   
               }else{
                 M[i] -= Number(rest[j][i]); 
               } 
               
            }
        }
        Z[i]= Number(Z[i])*(-1);
       // alert(Z[i]);    

    }
    //PARA ELIMINAR LOS M que se agregaron al inicio a Z con >= e =
    for(var i=0;i<pos.length;i++){
       // alert(pos[i]-1+"--"+ Z[pos[i]-1]+"+"+M[pos[i]-1]);
        Z[pos[i]-1] += Number(M[pos[i]-1]);
        if(Number(Z[pos[i]-1])==0){
            M[pos[i]-1]=0;
        }
    }
 
    

    contenido2 += "<table class='table'> <thead> <tr> <th class='text-center mx-auto'>V.b</th> ";
    
    for(var i=0;i<NVF;i++){
        contenido2+="<th class='text-center'>X"+(i+1)+"</th>";
    }
    contenido2+="<th class='text-center'>Bi</th> </tr> </thead> <tbody>";

    for(var i=0;i<nr;i++){
        contenido2+="<tr> <td class='text-center'>X"+pos[i]+"</td>";
        for(var j=0;j<NVF;j++){
            contenido2+="<td class='text-center'> "+rest[i][j]+" </td>";
        }
        contenido2+="<td class='text-center'> "+Bi[i]+" </td></tr>";
    }
    contenido2+="<tr><td class='text-center'><b>Z</b></td>";
    var s = "+";
    for(var i=0;i<NVF;i++){
        if(Z[i]>0 && M[i]!= 0){
            s="+";
        }else{
            s="";
        }
        contenido2+="<td class='text-center'> ";
        
        if(M[i]!=0){

            
            if(M[i]!= 1 && M[i] != -1){
                contenido2+=M[i];
            }else{
                if(M[i]==-1){
                    contenido2+="-";
                }else{
                    //contenido2+="+";
                }
            }
            contenido2+="M";
        }else{
           // contenido2+=" </td>";
        }
        if(Z[i]!=0 || M[i]==0){
            contenido2+=s+Z[i]+"</td>";
        }
        
    }
    contenido2+="<td class='text-center'> ";
    if(M[NVF]>0 && Bi[nr] != 0 ){
        s="+";
    }else{
        s="";
    }
    
    if(M[NVF]!=0){
        
        if(M[NVF]!=1 && M[NVF]!= -1){
            contenido2+=M[NVF];
        }else{
            if(M[NVF]==-1){
                contenido+="-";
            }else{
                contenido2+="+";
            }
        }
        contenido2+="M </td> </tr> </tbody> </table> </br></br>";
    }else{
        contenido2+="</td> </tr> </tbody> </table> </br></br>";
    }
    if(Bi[nr]!=0 || M[NVF]==0 ){
        contenido2+=s+Bi[nr];
    }

    plano2.innerHTML = contenido2;
    



}