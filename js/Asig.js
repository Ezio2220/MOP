
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
    
    var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
    if(ndat ==2){
        d1 = document.getElementById(pro1).value;
        d2 = document.getElementById(pro2).value;
        for(var i=1;i<d1;i++){
            X.push(abc[i]);
        }
        for(var i=1;i<d2;i++){
            Y.push(Number(i+1));
        }
    }else{
        d1 = document.getElementById(pro1).value;
        d2=d1;
    
        for(var i=1;i<d1;i++){
            
            X.push(abc[i]);
            Y.push(Number(i+1));
        }
    }
    var obj = document.getElementById(dest);
    if(d1.length==0 || d1<=1){
        obj.innerHTML=" ";
    }else{
        
        var table="";

        table += "<table style='background: none;' class='table'><thead> <tr> ";
        table +="<th class='text-center mx-auto'>"+Y[0]+"/"+X[0]+" </th>";

        for(var i=1;i<X.length;i++){
            table+="<th>"+X[i]+"</th>";
        }
        table+="</tr> </thead> <tbody>";
        for(var i=1;i<Y.length;i++){
            table+="<tr><td class='text-center mx-auto'>"+i+"</td>";
            for(var j=1;j<X.length;j++){
                table+="<td> <input onchange='' type='number' id='n"+j+"*"+i+"'> </td>"
            }
            table+="</tr>";
        }
        table+="</tbody> </table>";

        obj.innerHTML=table;

    }
    


}