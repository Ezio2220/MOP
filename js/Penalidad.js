
function checnum(as)
{
  var a = as.value;

  for(var x=0; x<a.length; x++)
  {
     var ff = a[x];
     if(isNaN(a) && ff != ".")
     {
	  a = a.substring(0,(a.length-1));
	  as.value = a;
     }	
   }	
}

function clear_all()
{
	document.getElementById('result').innerHTML = "";
	document.getElementById('frtab').innerHTML = "";
	document.getElementById('t').innerHTML = "";
	$("#nrw").val("");
	$("#ncn").val("");
}

function matrix_form() 
{	 
	document.getElementById('frtab').innerHTML = "";
	document.getElementById('result').innerHTML = "";
	var nrw = $("#nrw").val();
	var ncn = $("#ncn").val();

	 if(nrw=="")
	 {
		alert("Enter number of rows value");
		$("#nrw").focus();			
	 }
	 else if(ncn=="")
	 {
		alert("Enter number of columns value");
		$("#ncn").focus();			
	 }
	 else if(parseFloat(nrw)>15)
	 {
		alert("Enter number of rows below 15");
		$("#nrw").focus();			
	 }
	 else if(parseFloat(ncn)>15)
	 {
		alert("Enter number of columns below 15");
		$("#ncn").focus();			
	 }
	 else
	 {
		nrw = parseFloat(nrw);
		ncn = parseFloat(ncn);

		var tabary = new Array();
		for(b=0;b<=nrw;b++)
		{ 
			tabary[b] = new Array(ncn);
			for(a=0;a<=ncn;a++)
			{
				tabary[b][a] = "<input type=text id=x"+b+a+" size=3 class='easypositive-integer'>";
			}
		} 
		
		// Declare variables and create the header, footer, and caption.
		var oTable = document.createElement("TABLE");
		var oTHead = document.createElement("THEAD");
		var oTBody = document.createElement("TBODY");
		var oRow, oCell;
		var i, j;
		
	   	// Insert the created elements into oTable.
		  oTable.appendChild(oTHead);
		  oTable.appendChild(oTBody);
		  oTable.setAttribute("class","bg5");

		// Inserted the Heading elemnts into table
		  oRow = document.createElement("TR");
		  oTHead.appendChild(oRow);
		  for (i=0; i<=(ncn+1); i++)
 		  {
		    oCell = document.createElement("TH");
			if(i==0)
			{
			    oCell.innerHTML = " ";
			}
			else if(i==(ncn+1))
			{
			    oCell.innerHTML = "Supply";
			}
			else
			{
			    oCell.innerHTML = "D"+i;
			}
			    oRow.appendChild(oCell);
		  }

		// Insert rows and cells into bodies.
		for (i=0; i<tabary.length; i++)
		{
		    oRow = document.createElement("TR");
		    oCell = document.createElement("TH");
		    if(i==(tabary.length-1))
		    {
			    oCell.innerHTML = "Demand";
		    }
		    else
		    {
			    oCell.innerHTML = "S"+(i+1);
		    }

		    oRow.appendChild(oCell);
		    oTBody.appendChild(oRow);
		    for (j=0; j<tabary[i].length; j++)
		    {
		      oCell = document.createElement("TD");
			if((i==(tabary.length-1)) && (j==(tabary[i].length-1)))
			{
			      oCell.innerHTML = " ";
			}
			else
			{
			      oCell.innerHTML = tabary[i][j];
			}
		      oRow.appendChild(oCell);
		    }
		  }
 		
		oRow = document.createElement("TR");
	    	oTBody.appendChild(oRow);
		oCell = document.createElement("TD");
		oCell.setAttribute("colspan",(ncn+2));
		oCell.innerHTML = "<br> <center> <input type=button value='Calculate' onclick='northwest_corner()'> </center>";
	        oRow.appendChild(oCell);
		
		// Insert the table into the document tree.
		var frtb = document.getElementById("frtab");
		frtb.appendChild(oTable);
		onkeyupValidationClass();
	} 
}

function northwest_corner()
{
	document.getElementById('result').innerHTML = "";
	var nrw = $("#nrw").val();
	var ncn = $("#ncn").val();
	nrw = parseFloat(nrw);
	ncn = parseFloat(ncn);

	var alvalu = new Array();
	var values = new Array();
	var supply = new Array();
	var supclo = new Array();
	var demand = new Array();
	var demclo = new Array();
	var si = 0;
	var di = 0;
	var valida = true;

	for(b=0;b<=nrw;b++)
	{ 
		for(a=0;a<=ncn;a++)
		{
			var valu = $("#x"+b+a).val();
			var valus = valu;
			if(valu=="")
			{
				alert("Enter all values");
				valida = false;
				//valu = 0;
			}
			valu = parseFloat(valu);


		   	if(!isNaN(valus))
			{
				if(a==ncn)
				{
					supply[si] = valu;
					si++;
				}

				if(b==nrw)
				{
					demand[di] = valu;
					di++;
				}
			}
		}
	}
	
	if (valida == true) {
	  var sumsup = 0;
	  for(i=0;i<supply.length;i++)
	  {
		  sumsup = sumsup + supply[i];
	  }
  
	  var sumdem = 0;
	  for(j=0;j<demand.length;j++)
	  {
		  sumdem = sumdem + demand[j];
	  }
   
	  var dummy = 0;
	  if(sumsup<sumdem)
	  {
		  dummy = sumdem - sumsup;
		  supply[supply.length] = dummy;
		  for(b=0;b<=nrw;b++)
		  { 
			  values[b] = new Array(ncn);
			  for(a=0;a<ncn;a++)
			  {
				  var valu = $("#x"+b+a).val();
				  var valus = valu;
				  if(valu=="")
				  { 
					  valu = 0;
				  }
				  valu = parseFloat(valu);
	  
				  if(!isNaN(valus))
				  {					
					  if(b==nrw)
					  {
						  values[b][a] = 0;
					  }	
					  else
					  {
						  values[b][a] = valu;
					  }	
				  }
			  }
		  } 
	  }
  
	  if(sumsup>sumdem)
	  {
		  dummy = sumsup - sumdem;
		  demand[demand.length] = dummy;
		  for(b=0;b<nrw;b++)
		  { 
			  values[b] = new Array(ncn);
			  for(a=0;a<=ncn;a++)
			  {
				  var valu = $("#x"+b+a).val();
				  var valus = valu;
				  if(valu=="")
				  { 
					  valu = 0;
				  }
				  valu = parseFloat(valu);
	  
				  if(!isNaN(valus))
				  {					
					  if(a==ncn)
					  {
						  values[b][a] = 0;
					  }	
					  else
					  {
						  values[b][a] = valu;
					  }	
				  }
			  }
		  } 
	  }
	  
	  if(sumsup==sumdem)
	  {
		  for(b=0;b<nrw;b++)
		  { 
			  values[b] = new Array(ncn);
			  for(a=0;a<ncn;a++)
			  {
				  var valu = $("#x"+b+a).val();
				  var valus = valu;
				  if(valu=="")
				  { 
					  valu = 0;
				  }
				  valu = parseFloat(valu);
	  
				  if(!isNaN(valus))
				  {					
					  values[b][a] = valu;
				  }
			  }
		  } 
	  }
	  
	  var datastring = "values="+values+"&supply="+supply+"&demand="+demand+"&nrw="+nrw+"&ncn="+ncn;
	  alert (datastring);
}
}