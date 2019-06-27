
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
     var dat=[];
     var det = [0,0];
     //------------------------------SE COMPRUEBA SI ESTA BALANCEADA
     if(sof==sdem){
       // Agen('2',nx,ny,'result2',['Destino',1],['Origen','A']);
        for(var i=0;i<ny;i++){
            dat.push(new Array(nx+1));
            if(i==ny-1){
                dat.push(new Array(nx));
            }
        }
        
     }else{
         if(sof<sdem){
             ny++;
             det=[1,Number(sdem-sof)];
         }else{
             nx++;
             det=[2,Number(sof-sdem)];
         }

         for(var i=0;i<ny;i++){
            dat.push(new Array(nx+1));
            if(i==ny-1){
                dat.push(new Array(nx));
            }
        }

     }
     //-------------- fIN DE COMPROBACION

     //--------------LLenado de DAtos
      

    // alert(det[1]);
    //----------------------------------BALANCEO
     for(var i=0;i<ny;i++){

        for(var j=0;j<nx;j++){    
            if(i==ny-1 && det[0]==1){
                dat[i][j]=0;
                dat[i+1][j]=Number(document.getElementById("p"+Number(j+1)+"*"+Number(i+1)).value);
                //dat[i+2][j]=0;
                if(j==nx-1){
                    dat[i][j+1]=det[1];
                }
                

            }else{
                if(j==nx-1 && det[0]==2){
                    dat[i][j]=0;
                    //alert("p"+Number(j+2)+"*"+Number(i+1));
                    dat[i][j+1]=Number(document.getElementById("p"+Number(j+1)+"*"+Number(i+1)).value);
                    //dat[i][j+2]=0;
                    if(i==ny-1){
                        dat[i+1][j]=det[1];
                    }
                    
                }else{
                    dat[i][j]=Number(document.getElementById("p"+Number(j+1)+"*"+Number(i+1)).value);
                    if(j==nx-1){
                        dat[i][j+1]=Number(document.getElementById("p"+Number(j+2)+"*"+Number(i+1)).value);
                        
                    }
                    if(i==ny-1){
                        dat[i+1][j]=Number(document.getElementById("p"+Number(j+1)+"*"+Number(i+2)).value);
                        
                    }
                }
            
            }   
              
           //alert(i+","+j); 
        }

     }
     //-----------------------penalidad
    dat.push(new Array(nx));
    for(var i=0;i<ny;i++){
        dat[i].push(0);
        
    }
    for(var j=0;j<nx;j++){
            dat[ny+1][j]=0;

    }
    //--------------------penalidad
     console.log(dat);
    //--------------mostrando tabla;
    var pcon = " ";
    pcon += "<table style='background: none;' class='table'><thead> <tr> ";
    pcon +="<th class='text-center mx-auto'>Origen/ Destino </th>";
    var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
    
    for(var i=0;i<dat[0].length-2;i++){
        pcon+="<th class='text-center mx-auto'>"+Number(i+1)+"</th>";
    }
    pcon+="<th class='text-center mx-auto'>OFERTA</th> <th class='text-center mx-auto'>Penalidad </th></tr> </thead> <tbody>";

    for(var i=0;i<dat.length;i++){
        if(i==dat.length-2){
            pcon+="<tr><td class='text-center mx-auto'>Penalidad</td>";
        }else if(i==dat.length-1){
            pcon+="<tr><td class='text-center mx-auto'>Demanda</td>";
        }else{
            pcon+="<tr><td class='text-center mx-auto'>"+abc[i]+"</td>";
        }    
        for(var j=0;j<dat[i].length;j++){

            pcon+="<td class='text-center mx-auto'>"+dat[i][j]+"</td>"
            //console.log(dat[i][j]);

        }
        pcon+="</tr>";

    }
    pcon+="</tbody> </table> </br>";

    document.getElementById("result2").innerHTML=pcon;




}