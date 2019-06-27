/* Arreglos bidimensionales */
 var skillMatrix=null;
 var matrix=null;
 /* Arreglos normales */
 var rCov=[];
 var cCov=[];
 var rows=0;
 var cols=0;
 var dim=0;
 var solutions=0; 

 FORBIDDEN_VALUE: -999999;

 
 var formation=new Array();
 var squad=new Array();

var v=[],id="",p=0,area=0,cx=0,cy=0,count=0;

function checnum(as)
{
	  var a = as.value;
	
	  for(var x=0; x<a.length; x++)
	  {
	     var ff = a[x];
	     if(isNaN(a) || ff==" ")
	     {
		  a = a.substring(0,(a.length-1));
		  as.value = a;
	     }	
  	   }	
}

function tqe_perc()
{
          $("#output").val("");
	count=$("#input").val();
	if(count=="")
	{
	alert("INTRODUZCA EL TAMAÑO DE LA MATRIZ PARA REALIZAR EL EJERCICIO");
	}
	  else
	   {
	       count=parseFloat(count);
		for(i=0;i<count;i++)
		{
		    v[i]=[];
		 for(j=0;j<count;j++)
		     {
		          id="#i"+i+j;
		          p=parseFloat($(id).val());
                          if (isNaN(p))
                          {
                              return false;
                          }
                          else
                          {
		              v[i][j]=(p);     
                          }
		     }
		}
	   }
	for(var i=0;i<count;i++)
	{
	formation[i]=""+(i+1);
	}
	 for(var i=0;i<count;i++)
	{
	squad[i]=""+(i+1);
	}
	matrix=v;
	var result=hungarianAlgortithm(formation,squad);
        $("#output").val(result);
}

//=======================
function clearall()
{
	$("#input").val("");
	$("#matrix1").html("");
}

//=======================

var stars=null;
function tabls_creation()
{
	document.getElementById("matrix1").innerHTML = ""; 
        var count=$("#input").val();
            if(count=="") count=0;
	count = parseFloat(count);
       
        if(count>12)
           {
           alert("Ingrese valor entre 1 a 12");
            }
           else if(count!=0)
	   {
       // Declaramos las variables y creamos el header, footer y caption.	
	  var oTable = document.createElement("TABLE");
	  var oTHead = document.createElement("THEAD");
	  var oTBody = document.createElement("TBODY");
	  var oRow, oCell;
	  var i, j;
		
	  var heading = new Array();
			
	  heading[0] = "Origen/Destino";
         for(var i=1;i<=count;i++)
          {
	  heading[i] = ""+i;
    }
    // Inserta los elementos creados en la tabla.
	  oTable.appendChild(oTHead);
	  oTable.appendChild(oTBody);
	  oTable.setAttribute("class","bg4");
	  oTable.setAttribute("align","center");

	
	  oRow = document.createElement("TR");
	  oTHead.appendChild(oRow);

	  
	  for (a=0; a<heading.length; a++)
	  {
	    oCell = document.createElement("TH");
	    oCell.innerHTML = heading[a];
	    oRow.appendChild(oCell);
	  }

  	  var idval;
	  var vali;

	  for (i=0; i<count; i++)
	  {
	    oRow = document.createElement("TR");
	    oRow.setAttribute("align","center");
	    oTBody.appendChild(oRow);
            oCell = document.createElement("TD");
	    oCell.innerHTML = ""+(i+1);
	    oRow.appendChild(oCell);
	    for (j=0;j<heading.length-1; j++)
	    {
	      oCell = document.createElement("TD");
	      oCell.innerHTML = "<input type=text size=4 id=i"+i+j+" class='easynumeric'>";
	      oRow.appendChild(oCell);
	    }
	  }
  
	
	var frtb = document.getElementById("matrix1");
	frtb.appendChild(oTable);
     }
     onkeyupValidationClass();
}

 function hungarianAlgortithm(squad,formation) {
   init(formation, squad);
  //Paso 1
   matrix = subtractRowMins(matrix);
  //Paso 2
   findZeros(matrix);
   var done = false;
   while (!done) {
  //Paso 3
     var covCols = coverColumns(matrix);
     if (covCols > solutions -1) {
       done = true;
     }
     if (!done) {
      //Paso 4 (llama al Paso 5)
       done = coverZeros(matrix);
       while (done) {
        //Paso 6
         var smallest = findSmallestUncoveredVal(matrix);
         matrix = uncoverSmallest(smallest, matrix);
         done = coverZeros(matrix);
       }
     }
   }
   return getSolution(formation, squad);
 }
 
 function init(formation, squad) {
   cols = squad.length;
   rows = formation.length;
   dim = Math.max(rows, cols);
   solutions = dim;
   skillMatrix = initMatrix(rows, cols);
   matrix = initMatrix(dim, dim);
   stars = initMatrix(dim, dim);
   matrix = loadMatrix(squad, formation, matrix, false);
   skillMatrix = loadMatrix(squad, formation, skillMatrix, false);
 
   rCov = new Array(dim);
   cCov = new Array(dim);
   initArray(cCov, 0); 
   initArray(rCov, 0);
 }
 
 function initMatrix(sizeX, sizeY) {
   var matrix = new Array(sizeX);
   for (var i=0; i<sizeX; i++) {
     matrix[i] = new Array(sizeY);
     initArray(matrix[i], 0);
   }
   return matrix;
 }
 

 function loadMatrix(squad, formation, matrix, reverse) {
   matrix =v;
   if (reverse) {

     matrix = (findMaxValue(matrix), matrix);   
   }
   return matrix;
 }
 
 function findMaxValue(matrix) {
   var max = 0.0;
   for (var i = 0; i < matrix.length; i ++) {
     for (var j = 0; j < matrix[i].length; j++) {
       if (matrix[i][j] > max) {
         max = matrix[i][j];
       }
     }
   }
   return Number(max);
 }
 
 function reverseMatrix(max, matrix) {
   for (var i = 0; i < matrix.length; i ++) {
     for (var j = 0; j < matrix[i].length; j++) {
       matrix[i][j] = (Number(max) - Number(matrix[i][j])).toFixed(0);
     }
   }
   return matrix;
 }
 
 function subtractRowMins(matrix) {
   for (var i = 0; i < matrix.length; i ++) {
     var min = Number.MAX_VALUE;
     for (var j = 0; j < matrix[i].length; j++) {
       if (matrix[i][j] < min) {
         min = Number(matrix[i][j]);
       }
     }
     for (var k = 0; k < matrix[i].length; k++) {
       matrix[i][k] = matrix[i][k] - min;
     }
   }
  return matrix;
 }
 
  function subtractColMins(matrix) {
   for (var j = 0; j < matrix[0].length; j ++) {
     var min = Number.MAX_VALUE;
     for (var i = 0; i < matrix.length; i++) {
       if (matrix[i][j] < min) {
         min = Number(matrix[i][j]);
       }
     }
     for (var k = 0; k < matrix[0].length; k++) {
       matrix[k][j] = matrix[k][j] - min;
     }
   }
   return matrix;
 }
 
 function findZeros(matrix) {
   for (var i = 0; i < matrix.length; i++) {
     for (var j = 0; j < matrix[i].length; j++) {
       if (matrix[i][j] == 0) {
         if (rCov[i] == 0 && cCov[j] == 0) {
           stars[i][j] = 1;
           cCov[j] = 1;
           rCov[i] = 1;
         }
       }
     }
   }
   // Clear Covers
   initArray(cCov,0);
   initArray(rCov,0);
 }
 
 function initArray(theArray, initVal) {
   for (var i = 0; i < theArray.length; i++) {
     theArray[i] = Number(initVal);
   }
 }
 
 function coverColumns(matrix) {
   var count = 0;
   for (var i=0; i < matrix.length; i++) {
     for (var j=0; j < matrix[i].length; j++) {
       if (stars[i][j] == 1) {
         cCov[j] = 1;
       }
     }
   }
   for (var k=0; k < cCov.length; k++) {
     count = Number(cCov[k]) + Number(count);
   }
   return count;
 }
 
 
 function coverZeros(matrix) {
   var retVal = true;
  var zero = findUncoveredZero(matrix); 
   
   while (zero.row > -1 && retVal == true) {
     stars[zero.row][zero.col] = 2 
     var starCol = foundStarInRow(zero.row, matrix);
     if (starCol > -1) {
       rCov[zero.row] = 1;
       cCov[starCol] = 0;
     } else {
       starZeroInRow(zero);//Paso 5
       retVal = false;
     }
     if (retVal == true) {
       zero = findUncoveredZero(matrix);
     }
   }
   return retVal;
 }
 
 function findUncoveredZero(matrix) {
   var coords = new HgCoords();
   for (var i=0; i< matrix.length; i++) {
     for (var j=0; j < matrix[i].length; j++) {
       if (matrix[i][j] == 0 && rCov[i] == 0 && cCov[j] == 0) {
         coords.row = i;
         coords.col = j;
         j = matrix[i].length;
         i = matrix.length - 1;
       }
     }
 
   }
   return coords;
 }
 
 function foundStarInRow(zeroRow, matrix) {
   var retVal = -1;
   for (var j = 0; j < matrix[zeroRow].length; j++) {
     if (stars[zeroRow][j] == 1) {
       retVal = j;
       j = matrix[zeroRow].length;
     }
   }
   return retVal;
 }
 
  
 function starZeroInRow(zero) { 
   var done = false;
   var count = 0;
   var path = initMatrix(dim*2, 2);
 
   path[count][0] = zero.row;
   path[count][1] = zero.col;
   while (!done) {
     var row = findStarInCol(path[count][1]);
     if (row > -1) {
       count++;
       path[count][0] = row;
       path[count][1] = path[count - 1][1];
     } else {
       done = true;
       
     }
     if (!done) {
       var col = findPrimeInRow(path[count][0]);
       count++;
       path[count][0] = path[count - 1][0];
       path[count][1] = col;
     }
   }
   convertPath(path, count);
 

   initArray(cCov,0);
   initArray(rCov,0);
   erasePrimes();
 }
 
  function findStarInCol(col) {
   var retVal = -1;
   for (var i = 0; i < stars.length; i++) {
     if (stars[i][col] == 1) {
       retVal = i;
       i = stars.length;
     }
   }
   return retVal;
 }
 
  function findPrimeInRow(row) {
   var retVal = -1;
   for (var j=0; j< stars[row].length; j++) {
     if (stars[row][j] == 2) {
       retVal = j;
       j = stars[row].length;
     }
   }
   return retVal;
 }
 
  
 function convertPath(path, count) {
   
   for (var i=0; i < count+1; i++) {
     var x = path[i][0];
     var y = path[i][1];
     if (stars[x][y] == 1) {
       stars[x][y] = 0;
     } else if (stars[x][y] == 2) {
       stars[x][y] = 1;
     }
   }
 }
 
 function erasePrimes() {
   for (var i=0; i<stars.length; i++) {
     for (var j=0; j < stars[i].length; j++){
       if (stars[i][j] == 2) {
         stars[i][j] = 0;
       }
     }
   }
 }
 
 function findSmallestUncoveredVal(matrix) {
   var min = Number.MAX_VALUE;
   for (var i = 0; i < matrix.length; i++) {
     for (var j = 0; j < matrix[i].length; j++) {
       if (rCov[i] == 0 && cCov[j] == 0) {
         if (min > matrix[i][j]) {
           min = matrix[i][j];
         }
       }
     }
   }
   return min;
 }
 
  
 function uncoverSmallest(smallest, matrix) {
 
   for (var i = 0; i < matrix.length; i++) {
     for (var j = 0; j < matrix[i].length; j++) {
       if (rCov[i] == 1) {
         matrix[i][j] += smallest;
       }
       if (cCov[j] == 0) {
         matrix[i][j] -= smallest;
       }
     }
   }

   return matrix;
 }
 
 function getSolution(formation, squad) {
   var total = 0;
   var lineup = '';
    
   for (var i = 0; i < rows; i++) {
     for (var j = 0; j < cols; j++) {
       if (stars[i][j] == 1) {
      
         lineup+=getplayer(i,j)+"\n";
       }
     }
   }
   return lineup;
 }

function getplayer(i,j)
{
return formation[i]+" = "+squad[j];
}
function HgCoords() {
 row = -1;
 col = -1;5
}