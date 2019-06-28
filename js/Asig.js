
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
    
     var tmp = [];
     var aux =[];
     var penof = [];
     var pendem = [];
     
//--------------------------------------calculo de las penalidades
    dat.push(new Array(nx));
    for(var i=0;i<ny;i++){

        for(var j=0;j<nx;j++){
            tmp.push(dat[i][j]);
         }
         aux = menores(tmp);

        dat[i].push(Number(aux[1]-aux[0]));
        penof.push(Number(aux[1]-aux[0]));                 //penalidad de la oferta
        
        /*console.log("dem");
        console.log(pendem);*/
        tmp.length=0;
        aux.length=0;
    }
    
    
    for(var j=0;j<nx;j++){

        for(var i=0;i<ny;i++){
            tmp.push(dat[i][j]);
         }
         aux = menores(tmp);
         
            dat[ny+1][j]=Number(aux[1]-aux[0]);
            pendem.push(dat[ny+1][j]);//------------------------------penalidad de la demanda
           /* console.log("of");
            console.log(penof);*/
            tmp.length=0;
            aux.length=0;
    }
    
    //-------------------- fin de calculo de penalidad
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
            pcon+="<tr><td class='text-center mx-auto'>Demanda</td>";
        }else if(i==dat.length-1){
            pcon+="<tr><td class='text-center mx-auto'>Penalidad</td>";
            
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
    var lolact=0;
    //--------------------------------se obtiene la penalidad mayor ya sea de la oferta o de la demanda
    var aux2 = [];
    aux2 = mayor(penof,pendem);

    console.log(aux2);
    var auxnum= 0;
    var lolx = [];
    var loly = [];
    var puntos = [];
    //puntos[lolact] = new Array(2);

    //------------------------- se opera
    if(aux2[0]=="O"){
        for(var i=0;i<ny;i++){
            if(dat[i][dat[i].length-1]==aux2[1]){
                
                for(var j=0;j<nx;j++){
                    tmp.push(dat[i][j]);
                 }
                 auxnum = menorpos(tmp);
                 console.log("oferta: "+dat[i][dat[i].length-2]+" DEMANDA: "+dat[dat.length-2][auxnum]);
                 tmp.length=0;
                 if(dat[i][dat[i].length-2]==dat[dat.length-2][auxnum]){
                    dat[i][auxnum]=dat[dat.length-2][auxnum];

                    dat[dat.length-2][auxnum]=0;
                    dat[i][dat[i].length-2]=0;
                    lolx.push(auxnum);
                    loly.push(i);
                    

                 }else if(dat[i][dat[i].length-2]>dat[dat.length-2][auxnum]){
                    dat[i][dat[i].length-2]= Number(dat[i][dat[i].length-2]-dat[dat.length-2][auxnum]);
                    dat[dat.length-2][auxnum]=0;
                    lolx.push(auxnum);
                    dat[i][auxnum]=dat[i][dat[i].length-2];
                 }else if(dat[i][dat[i].length-2]<dat[dat.length-2][auxnum]){
                    dat[dat.length-2][auxnum]=Number(dat[dat.length-2][auxnum]- dat[i][dat[i].length-2]);
                    dat[i][dat[i].length-2]=0;
                    loly.push(i);
                    dat[i][auxnum]=dat[dat.length-2][auxnum];
                }
                puntos.push([i,auxnum]);
            }
        }
    
    }else{
        for(var j=0;j<nx;j++){
            if(dat[dat.length-2][j]==aux2[1]){
                for(var i=0;i<ny;i++){
                    tmp.push(dat[i][j]);
                 }
                 auxnum = menorpos(tmp);
                 console.log("oferta: "+dat[auxnum][dat[auxnum].length-2]+" DEMANDA: "+dat[dat.length-2][j]);
                 tmp.length=0;
                 if(dat[auxnum][dat[auxnum].length-2]==dat[dat.length-2][j]){
                    dat[dat.length-2][j]=0;
                    dat[auxnum][dat[auxnum].length-2]=0;
                    lolx.push(j);
                    loly.push(auxnum);
                    dat[auxnum][j]=dat[dat.length-2][j];

                 }else if(dat[auxnum][dat[auxnum].length-2]>dat[dat.length-2][j]){
                    dat[auxnum][dat[auxnum].length-2]= Number(dat[auxnum][dat[auxnum].length-2]-dat[dat.length-2][j]);
                    dat[dat.length-2][j]=0;
                    lolx.push(j);
                    dat[auxnum][j]=dat[auxnum][dat[auxnum].length-2];
                 }else if(dat[auxnum][dat[auxnum].length-2]<dat[dat.length-2][j]){
                    dat[dat.length-2][j]=Number(dat[dat.length-2][j]- dat[auxnum][dat[auxnum].length-2]);
                    dat[auxnum][dat[auxnum].length-2]=0;
                    loly.push(auxnum);
                    dat[auxnum][j]=dat[dat.length-2][j];
                }
                puntos.push([auxnum,j]);

            }
        }
    }
    
    //----------------------------------------------------------fin de transformacion

    //-------------------------------------------------nueva penalidad
    tmp.length=0;
    penof.length=0;
    pendem.length=0;
    aux.length=0;

    //dat.push(new Array(nx));
    for(var i=0;i<ny;i++){

    if(compos(i,loly)){

        for(var j=0;j<nx;j++){
            if(compos(j,lolx)){
                tmp.push(dat[i][j]);
            }            
         }
         aux = menores(tmp);

        dat[i].push(Number(aux[1]-aux[0]));
        penof.push(Number(aux[1]-aux[0]));                 //penalidad de la oferta
        console.log("of");
            console.log(penof);
        
        tmp.length=0;
        aux.length=0;
    }
        
    }
    
    
    for(var j=0;j<nx;j++){

        if(compos(j,lolx)){
            for(var i=0;i<ny;i++){
                if(compos(i,loly)){
                    tmp.push(dat[i][j]);
                }
            
            }
         aux = menores(tmp);
         
            dat[ny+1][j]=Number(aux[1]-aux[0]);
            pendem.push(dat[ny+1][j]);//------------------------------penalidad de la demanda
            console.log("dem");
        console.log(pendem);
            tmp.length=0;
            aux.length=0;
        }
        
    }

    //-------------------------------------------------fin de nueva penalidad


    //----------------------------------------------------------dibujar nueva tabla

    pcon = " ";
    pcon += "<table style='background: none;' class='table'><thead> <tr> ";
    pcon +="<th class='text-center mx-auto'>Origen/ Destino </th>";
    
    for(var i=0;i<dat[0].length-2;i++){
        pcon+="<th class='text-center mx-auto'>"+Number(i+1)+"</th>";
    }
    pcon+="<th class='text-center mx-auto'>OFERTA</th> <th class='text-center mx-auto'>Penalidad </th></tr> </thead> <tbody>";
    var valid = true;
    console.log("ACA ESTA");
    console.log(lolx);
    console.log(loly);
    for(var i=0;i<dat.length;i++){
        
        if(i==dat.length-2){
            pcon+="<tr><td class='text-center mx-auto'>Demanda</td>";
        }else if(i==dat.length-1){
            pcon+="<tr><td class='text-center mx-auto'>Penalidad</td>";
            
        }else{
            pcon+="<tr><td class='text-center mx-auto'>"+abc[i]+"</td>";
        }    
        for(var j=0;j<dat[i].length;j++){
            var lol = [i,j];
            
            if(compos(i,loly)){
                if(compos(j,lolx)){
                    pcon+="<td class='text-center mx-auto'>"+dat[i][j]+"</td>"
                }else{
                    pcon+="<td class='text-center mx-auto'>-</td>"
                }
                
            }else if(compunto(puntos,lol)){
               // alert("hola :V");
               pcon+="<td class='text-center mx-auto'>"+dat[i][j]+"</td>"
            }else{
                pcon+="<td class='text-center mx-auto'>-</td>"
            }
            
            
            //console.log(dat[i][j]);

        }
        pcon+="</tr>";

    }
    pcon+="</tbody> </table> </br>";

    document.getElementById("result3").innerHTML+=pcon;



}
function compunto(arr1,arr2){
    var x1= arr1;
    var x2=arr2;
    console.log("el array");
    console.log(x1);
    console.log(x2);
    for(var i=0;i<arr1.length;i++){
      //  alert("es "+x1[i][0]+" y "+x2[0] );
        if(x1[i][0]==x2[0]){
            

            if(x1[i][1]==x2[1]){
                return true;
            }
        }
    }
    return false;
}

function compos(i,arr){

    var x= arr;
    for(var j=0;j<x.length;j++){
        if(i==Number(x[j])){
            
            return false;
        }
    }
    return true;

}
function menorpos(arr){
    var x= arr;
    var salto = 0;
    var resp = 99999;
    for(var i=0;i<x.length;i++){
        if(resp>x[i]){
            resp=x[i];
            salto=i;
        }
    }
    return salto;
}

function menores(arr){
    var x = arr;
    var resp = [9999,9999];
    var salto = 0;
    for(var i=0;i<x.length;i++){
            if(resp[0]>x[i]){
                resp[0]=x[i];
                salto=i;
            }
    }
    for(var i=0;i<x.length;i++){
        if(i!=salto){
            if(resp[1]>x[i]){
                resp[1]=x[i];
            }
      }
    }
    /*arr.sort(function(a, b) {
        return a - b;
      });
    console.log("ESTO ES VE: ");
    console.log(arr);*/
    return resp;
}
function mayor(arr,arr2){
    var x1 =arr;
    var x2 =arr2;
    /*console.log("este es uno");
    console.log(arr);
    console.log("este es 2");
    console.log(arr2);*/
    var resp = ["O",0];
    x1.sort(function(a, b) {
        return a - b;
      });
    resp[1]=Number(x1[x1.length-1]);

    x2.sort(function(a, b) {
        return a - b;
      });

    if(x2[x2.length-1]>resp[1]){
        resp[0]="D";
        resp[1]=x2[x2.length-1];
    }
    
    return resp;
}