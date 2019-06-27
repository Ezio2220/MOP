
function comp01(ndat,dat,obj){
    var n;
    if(ndat==1){
        n=true;
    }else{
        n=false;
    }
    var lol;
    var val = true;
    for(var i=0;i<dat.length;i++){
        lol =document.getElementById(dat[i]).value;
        if(lol.length ==0 || (lol ==0 && n) ){
            val=false;
        }
    }
    if(val){
        alert("correcto");
    }

}

function Agen(ndat,pro1,pro2,dest,xh,yh){
    var d1;
    var d2;
    var Y = [];
    console.log(xh);
    console.log(yh);
    Y=yh;
    var X = [];
    X=xh;
    //AQUIE se crea la variable que sera un arreglo de todas las letras del abecedario
    var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
    if(ndat ==2){
        d1 = document.getElementById(pro1).value;
        d2 = document.getElementById(pro2).value;
        for(var i=1;i<d1;i++){
            X.push(Number(i+1));
        }
        if(X[0]=="Destino"){
            X.push("OFERTA");
        }
        for(var i=1;i<d2;i++){ //aqui va a iterar donde i es el numero que va pasando
            Y.push(abc[i]); //aqui yo hago que en el arreglo Y se agrege una letra del abecedario que coincida con la posicion i
            //si i=0 entonces se agregara abc[0] lo cual representa la letra A
        }
        if(Y[0]=="Origen"){
            Y.push("DEMANDA");
        }
    }else{
        d1 = document.getElementById(pro1).value;
        d2=d1;
    
        for(var i=1;i<d1;i++){
            
            X.push(abc[i]);  //aca lo mismo se agrega dentro del nuevo arreglo la letra del abecedari que corresponda a la posicion i
            Y.push(Number(i+1));
        }
    }
    var obj = document.getElementById(dest);
    if(d1.length==0 || d1<=1){
        obj.innerHTML=" ";
    }else{
        //ya aca abajo dibujo la tabla segun los datos del arreglo
        var table="";

        table += "<table style='background: none;' class='table'><thead> <tr> ";
        table +="<th class='text-center mx-auto'>"+Y[0]+"/"+X[0]+" </th>";

        for(var i=1;i<X.length;i++){
            table+="<th>"+X[i]+"</th>";
        }
        table+="</tr> </thead> <tbody>";
        for(var i=1;i<Y.length;i++){
            if(Y[i]=="DEMANDA"){
                table+="<tr><td class='text-center mx-auto'>"+Y[i]+"</td>";
            }else{
                table+="<tr><td class='text-center mx-auto'>"+i+"</td>";
            }
            
            for(var j=1;j<X.length;j++){
                if(X[j]=="OFERTA" && Y[i]=="DEMANDA"){
                    table+= "<td> </td>";
                }else{
                    table+="<td> <input onchange='' type='number' id='n"+j+"*"+i+"'> </td>";
                }
                
            }
            table+="</tr>";
        }
        table+="</tbody> </table>";

        obj.innerHTML=table;

    }
    


}