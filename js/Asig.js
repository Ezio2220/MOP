
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
       // alert("correcto");
        if(obj=="result"){
            document.getElementById("Pres").disabled = true;
            Agen('2','n2','n1','result',['Destino',1],['Origen','A']);
        }
        if(obj=="Pres"){
            document.getElementById(obj).disabled = false;
        }
        //Agen('2','n2','n1','result',['Destino',1],['Origen','A']);
    }else{
        document.getElementById(obj).innerHTML=" ";
        if(obj=="Pres"){
            document.getElementById(obj).disabled = true;
        }
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
        if(dest=="result2"){
            d1=pro1;
            d2=pro2;
        }else{
            d1 = document.getElementById(pro1).value;
            d2 = document.getElementById(pro2).value;
        }
        
        for(var i=1;i<d1;i++){
            X.push(Number(i+1));
        }
        if(X[0]=="Destino"){
            X.push("OFERTA");
            if(dest==="result2"){
                X.push("Penalidad");
            }
        }
        for(var i=1;i<d2;i++){ //aqui va a iterar donde i es el numero que va pasando
            Y.push(abc[i]); //aqui yo hago que en el arreglo Y se agrege una letra del abecedario que coincida con la posicion i
            //si i=0 entonces se agregara abc[0] lo cual representa la letra A
        }
        if(Y[0]=="Origen"){
            Y.push("DEMANDA");
            if(dest==="result2"){
                Y.push("Penalidad");
            }
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
            table+="<th class='text-center mx-auto'>"+X[i]+"</th>";
        }
        table+="</tr> </thead> <tbody>";
        var extra;
        if(X[0]=="Destino"){
            extra = [];

            for(var i=1;i<Y.length;i++){
                for(var j=1;j<X.length;j++){
                    if( (X[j]=="OFERTA" && Y[i]=="DEMANDA") || (X[j]=="Penalidad" && Y[i]=="Penalidad" ) || (X[j]=="Penalidad" && Y[i]=="DEMANDA" ) || (X[j]=="OFERTA" && Y[i]=="Penalidad" ) ){
                        //extra.push("NONE");
                    }else{
                        extra.push("p"+j+"*"+i);
                    }
                }
            }

        }
        for(var i=1;i<Y.length;i++){
            if(Y[i]=="DEMANDA" || Y[i]=="Penalidad"){
                table+="<tr><td class='text-center mx-auto'>"+Y[i]+"</td>";
            }else{
                table+="<tr><td class='text-center mx-auto'>"+i+"</td>";
            }
            
            for(var j=1;j<X.length;j++){
                if( (X[j]=="OFERTA" && Y[i]=="DEMANDA") || (X[j]=="Penalidad" && Y[i]=="Penalidad" ) || (X[j]=="Penalidad" && Y[i]=="DEMANDA" ) || (X[j]=="OFERTA" && Y[i]=="Penalidad" ) ){
                    table+= "<td> </td>";
                }else{
                    if(X[0]=="Destino"){
                        //comp01(1,['n1','n2'],'result');
                        //console.log(extra.toString());
                        table+="<td> <input onchange='comp01(0,[";
                        for(var z =0;z<extra.length;z++){

                            table+="\""+extra[z]+"\"";
                            if(z!= extra.length-1){
                                table+=",";
                            }

                        }
                        table+="],\"Pres\");' type='number' id='p"+j+"*"+i+"'> </td>";
                    }else{
                        table+="<td> <input onchange='' type='number' id='p"+j+"*"+i+"'> </td>";
                    }
                    
                }
                
            }
            table+="</tr>";
        }
        table+="</tbody> </table> </br>";

        obj.innerHTML=table;

    }
    
}

function Pgen(nf,nc){
     var ny = Number(document.getElementById(nf).value);
     var nx = Number(document.getElementById(nc).value);

     var sof=0;
     var sdem=0;
    /*alert(nx);
    alert(ny);*/
     for(var i=0;i<ny;i++){
        sof+=Number(document.getElementById("p"+Number(nx+1)+"*"+Number(i+1)).value);
     }
     for(var i=0;i<nx;i++){
         sdem += Number(document.getElementById("p"+Number(i+1)+"*"+Number(ny+1)).value);
     }

    /* alert(sof);
     alert(sdem);*/
     if(sof==sdem){
        Agen('2',nx,ny,'result2',['Destino',1],['Origen','A']);
     }


}