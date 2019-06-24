var limitationChk = true; 
function onchangecalc(ch){var onchgval = ch.value;window.location.href=onchgval;} 
function getid(elid){var f=document.getElementById(elid);return f;}
function gf(fieldname){var f=$("#"+fieldname).val();return f;}
function showresult(id,val){var rs=getid('r'+id);rs.value=val;}
function embedshowhide(obj)
{$("#embdWidHei").show();$("#embdTextarea").hide();if(obj=='expand')
{$("#embedisp").show();}
else if(obj=='minimize')
{$("#embedisp").hide();}}
function getEmbededCode()
{$("#embdWidHei").hide();$("#embdTxt").val("");var ifrmWidth=$("#embdWidth").val();var ifrmHeight=$("#embdHeight").val();var embedUrl=$("#embedUrl").val();if(ifrmWidth=="")
{ifrmWidth="400";}
if(ifrmHeight=="")
{ifrmWidth="500";}
$("#embdTxt").val("<iframe src='"+embedUrl+"' width='"+ifrmWidth+"' height='"+ifrmHeight+"' frameborder='0' style='background:#F5F3F5;padding:20px;'></iframe>");$("#embdTextarea").show();}
function easyRoundOf(value,decima){if(isNaN(value)){return 0;}else{decima=Math.pow(10,parseConv(decima));var rndvalus = Math.round(parseConv(value) * decima) / decima;if(isNaN(rndvalus)){return 0;}else{return rndvalus;}}}
$(document).ready(function()
{$("textarea.auto_selectemb").mouseover(function()
{$(this).select();});$("#embedisp").hide();conversionSelectClass();onkeyupValidationClass();closeModal();
$('.ec_calculator_gen').find("input[type = 'text'], input[type = 'tel']").focusout(function() {if (limitationChk == true) {$("#dynErrDisp").html("");$("#dynErrDisp").hide();}var buttonValue = $('.ec_calculator_gen').find("input[type = 'button']").val();if (buttonValue == "Calculate" || buttonValue == "calculate" || buttonValue == "Convert" || buttonValue == "Result"){
$('.ec_calculator_gen').find("input[type = 'reset']").after( '<div class="errClass" id="dynErrDisp"></div><div id="calciScroll"></div>');}});
$('.ec_calculator_gen').find("input[type = 'text'], input[type = 'tel']").keyup(function(){
var buttonValue = $('.ec_calculator_gen').find("input[type = 'button']").val();if (buttonValue == "Calculate" || buttonValue == "calculate" || buttonValue == "Convert" || buttonValue == "Result")
{var butnOnclikFunName = $('.ec_calculator_gen').find("input[type = 'button']").attr("onclick");var funStr = butnOnclikFunName.replace("();","");
funStr = funStr.replace("()","");var funcStrConv = eval(funStr).toString().strcontains(".php");
if(funcStrConv === false){setTimeout(function(){eval(butnOnclikFunName)}, 500);setTimeout(function(){$("input[type = 'text'], input[type = 'tel'], textarea").focus(function(){return false;});0==repeatErr&&($(".ec_calculator_gen").find("input[type = 'reset']").after('<div class="errClass" id="dynErrDisp"></div><div id="calciScroll"></div>'),repeatErr=1);}, 1);}}});});
String.prototype.strcontains = function(it){return this.indexOf(it) != -1;};
function conversionSelectClass()
{if($(".easycurrency").length>0)
{currencySelector();if($(".easycurrencyresult").length>0)
{$(".easycurrencyresult").html("&#36;");}}
if($(".easylengthunits").length>0)
{createUnitConversionSelector("easylength");}
if($(".easymedlengthunits").length > 0)
{createUnitConversionSelector("easymedlength");}
if($(".easyinvlengthunits").length > 0) 
{createUnitConversionSelector("easyinvlength");}
if($(".easyweightunits").length>0)
{createUnitConversionSelector("easyweight");}
if($(".easymedweightunits").length > 0)
{createUnitConversionSelector("easymedweight");}
if($(".easyinvweightunits").length > 0)
{createUnitConversionSelector("easyinvweight");}
if($(".easyvolumeunits").length>0)
{createUnitConversionSelector("easyvolume");}
if($(".easytemperatureunits").length>0)
{createUnitConversionSelector("easytemperature");}
if($(".easydatastorageunits").length>0)
{createUnitConversionSelector("easydatastorage");}
if($(".easyenergyunits").length>0)
{createUnitConversionSelector("easyenergy");}
if($(".easyareaunits").length>0)
{createUnitConversionSelector("easyarea");}
if ($(".easydegreeunits").length > 0)
{createUnitConversionSelector("easydegree");}
if ($(".easyIn2Cmunits").length > 0)
{createUnitConversionSelector("easyIn2Cm");}
if ($(".easylenpowfourunits").length > 0) {createUnitConversionSelector("easylenpowfour");}
if ($(".easypascalunits").length > 0){createUnitConversionSelector("easypascal");}
if ($(".easykg2lbsunits").length > 0){createUnitConversionSelector("easykg2lbs");}
if ($(".easytimeunits").length > 0){createUnitConversionSelector("easytime");}
}  
function changeCurrencySymbol(currObj)
{var currencySelVal=$(currObj).val();if($(".easycurrencyresult").length>0)
{$(".easycurrencyresult").html(currencySelVal);}}
function currencySelector()
{var easycurrency = new Array("&#36;", "&#2352;", "&#162;", "&#163;", "&#165;", "&#8355;", "&#8356;", "&#8359;", "&#128;");var easycurcountry=new Array("Dollar","Rupee","Cent","Pound","Yen","Franc","Lira","Peseta","Euro");var currencySel="<select onchange=changeCurrencySymbol(this)>";for(i=0;i<easycurrency.length;i++)
{currencySel+="<option value='"+easycurrency[i]+"'>"+easycurcountry[i]+" ("+easycurrency[i]+") </option>";}
currencySel+="</select>";$(".easycurrency").html(currencySel);}
function createUnitConversionSelector(valus)
{for(ij=0;ij<$("."+valus+"units").length;ij++)
{var ids=$("."+valus+"units").eq(ij).attr("id");unitConversionSelector(valus,ids);}}
var easylength=new Array("mm","cm","dm","m","km","mi","in","ft","yd");var easylengthvals=new Array("10","1","0.1","0.01","0.00001","0.000006213711922373","0.3937007874016","0.03280839895013","0.01093613298338");var easylengthunits=new Array("Millimeter","Centimeter","Decimeter","Meter","Kilometer","Mile","Inch","Foot","Yard");var easyweight=new Array("mg","g","kg","oz","lb","dr","gr");var easyweightvals=new Array("1000","1","0.001","0.03527396194958","0.002204622621849","0.5643833911933","15.43235835294");var easyweightunits=new Array("Milligram","Gram","Kilogram","Ounce","Pound","Dram","Grain");var easyvolume=new Array("mm3","ml","cl","l","dal","hl","cm3","dm3","m3","in3","ft3","yd3","bbl");var easyvolumevals=new Array("1000000","1000","100","1","0.1","0.01","1000","1","0.001","61.02374409473","0.03531466672149","0.001307950619314","0.006289810770432");var easyvolumeunits=new Array("Cubic Millimeter","Milliliter","Centiliter","liter","dekaliter","hectoliter","Cubic Centimeter","Cubic Decimeter","Cubic Meter","Cubic Inch","Cubic Foot","Cubic Yard","Barrel");var easytemperature=new Array("C","K");var easytemperaturevals=new Array("1","274.15");var easytemperatureunits=new Array("Celsius","Kelvin");var easydatastorage=new Array("bit","B","Kbit","KB","Mbit","MB","Gbit","GB","Tbit","TB","Pbit","PB");var easydatastoragevals=new Array("8388608","1048576","8192","1024","8","1","0.0078125","0.0009765625","0.00000762939453125","9.537109375E-7","7.450580566406E-9","9.3132E-10");var easydatastorageunits=new Array("Bit","Byte","Kilobit","Kilobyte","Megabit","Megabyte","Gigabit","Gigabyte","Terabit","Terabyte","Petabit","Petabyte");var easyenergy=new Array("J","kJ","MJ","GJ","cal","kcal","btu","eV","Wh","kWh","erg");var easyenergyvals=new Array("1","0.001","0.000001","1E-9","0.2388458966275","0.0002388458966275","0.0009478169879134","6241509744512000000","0.0002777777777778","2.777777777778E-7","10000000");var easyenergyunits=new Array("Joule","Kilojoule","Megajoule","Gigajoule","Calorie","Kilocalorie","BTU","Electronvolt","Watt Hour","Kilowatt Hour","ERG");var easyarea=new Array("mm2","acre","are","ha","cm2","m2","km2","ft2","in2","yd2","sqmi","twp");var easyareavals=new Array("1000000","0.0002471053814672","0.01","0.0001","10000","1","0.000001","10.76391041671","1550.003100006","1.195990046301","3.861021585425E-7","1.072505995951E-8");var easyareaunits=new Array("Square Millimeter","Acre","Are","Hectare","Square Centimeter","Square Meter","Square Kilometer","Square Foot","Square Inch","Square Yard","Square Mile","Township");var easydegree = new Array("&deg;","rad");var easydegreevals = new Array("1","0.0174532925");var easydegreeunits = new Array("Degree","Radians");var easyIn2Cm = new Array("cm","in");var easyIn2Cmvals = new Array("1", "0.3937007874016");var easyIn2Cmunits = new Array("Centimeter", "Inch");
var easymedlength = new Array("cm", "m", "in", "ft");var easymedlengthvals = new Array("1", "0.01", "0.3937007874016", "0.03280839895013");var easymedlengthunits = new Array("Centimeter", "Meter", "Inch", "Foot");var easyinvlength = new Array("mm-1", "cm-1", "dm-1", "m-1", "km-1", "mi-1", "in-1", "ft-1", "yd-1");var easyinvlengthvals = new Array("0.1", "1", "10", "100", "100000", "160934.4", "2.54", "30.48", "91.44");var easyinvlengthunits = new Array("Millimeter^-1", "Centimeter^-1", "Decimeter^-1", "Meter^-1", "Kilometer^-1", "Mile^-1", "Inch^-1", "Foot^-1", "Yard^-1");var easymedweight = new Array("kg", "lb");var easymedweightvals = new Array("1", "2.20462");var easymedweightunits = new Array("Kilogram", "Pound");var easyinvweight = new Array("mg-1", "g-1", "kg-1", "oz-1", "lb-1", "dr-1", "gr-1");var easyinvweightvals = new Array("0.001", "1", "1000", "28.349523125", "453.59237", "1.77184519531", "0.06479891");var easyinvweightunits = new Array("Milligram^-1", "Gram^-1", "Kilogram^-1", "Ounce^-1", "Pound^-1", "Dram^-1", "Grain^-1");
var easykg2lbs = new Array("kg","lbs");var easykg2lbsvals = new Array("1", "2.20462");var easykg2lbsunits = new Array("Kilogram", "Pounds");
var easylenpowfour = new Array("mm4", "cm4", "dm4", "m4", "km4", "mi4", "in4", "ft4", "yd4");var easylenpowfourvals = new Array("10000", "1", "0.0001", "0.00000001", "0.00000000000000000001", "0.00000000000000000000149074877", "0.0240250961", "0.00000115861767", "0.0000000143039219");var easylenpowfourunits = new Array("Millimeter^4", "Centimeter^4", "Decimeter^4", "Meter^4", "Kilometer^4", "Mile^4", "Inch^4", "Foot^4", "Yard^4");
var easypascal = new Array("Pa", "kPa", "MPa", "GPa", "psi", "ksi");var easypascalvals = new Array("1", "0.001", "0.000001", "0.000000001", "0.00014503773801", "0.00000014503773801");var easypascalunits = new Array("pascal", "Kilo Pascal", "Mega Pascal", "Giga Pascal", "PSI", "KSI");
var easytime = new Array("ns", "&mu;s", "ms", "sec", "min", "hr", "day", "week", "month", "year", "decade", "century");var easytimevals = new Array("1000000000", "1000000", "1000", "1", "0.0166667", "0.00027777833333", "0.000011574", "0.0000016534", "0.00000038052", "0.00000003171", "0.000000003171", "0.0000000003171");var easytimeunits = new Array("Nanosecond", "Microsecond", "Millisecond", "Second", "Minute", "Hour", "Day", "Week", "Month", "Year", "Decade", "Century");
function unitConversionSelector(easyunits, ids) {var unitsConvSel = "<select id='unitConv" + ids + "' onchange='calculate()'>";for (i = 0; i < eval(easyunits).length; i++) {var unitSelVals = eval(easyunits)[i];
if ($.isNumeric(unitSelVals.match(/\d+/))) {if (unitSelVals.match(/\d+/) == "4") {unitSelVals = unitSelVals.replace(unitSelVals.match(/\d+/), "&#x2074;");}else if (unitSelVals.match(/\d+/) == "1") {unitSelVals = unitSelVals.replace("-"+unitSelVals.match(/\d+/), "&#x207B;&#x00B9;");}else {unitSelVals = unitSelVals.replace(unitSelVals.match(/\d+/), "&#xB" + unitSelVals.match(/\d+/) + ";");}}
unitsConvSel += "<option value='" + eval(easyunits + "vals")[i] + "'>" + unitSelVals + " </option>";}
unitsConvSel += "</select>";$("#" + ids).html(unitsConvSel);}
function changeUnitConversion(vals,selcIds,convUnits,unitName)
{if($.isNumeric(vals))
{var easyUnitIndex=jQuery.inArray(convUnits,eval(unitName));var easySelVals=$("#unitConv"+selcIds).val();var conVals=eval(unitName+"vals")[easyUnitIndex];if(unitName=="easytemperature")
{return((parseConv(vals)-parseConv(easySelVals))+parseConv(conVals));}
else
{return((parseConv(vals)/parseConv(easySelVals))*parseConv(conVals));}}}
function changeResultUnitConversion(vals,selcIds,convUnits,unitName)
{if($.isNumeric(vals))
{var easyUnitIndex=jQuery.inArray(convUnits,eval(unitName));var easySelVals=$("#unitConv"+selcIds).val();var conVals=eval(unitName+"vals")[easyUnitIndex];if(unitName=="easytemperature")
{return((parseConv(vals)+parseConv(easySelVals))-parseConv(conVals));}
else
{return((parseConv(vals)*parseConv(easySelVals))/ parseConv(conVals));}}}
function parseConv(val)
{return parseFloat(val);}
var easyValid=0;var repeatErr=0;
function easyCommonInputCalculation(textid, unitname, alertmsg, arind, frmval, toval) {if (easyValid == 0) {if(typeof(arind)=="undefined"){arind="";}if(typeof(frmval)=="undefined"){frmval="";}if(typeof(toval)=="undefined"){toval="";}limitationChk = true;var inputval = emptyValidation($("#" + textid + "hname").val(), alertmsg);if(!isNaN(frmval) && !isNaN(toval)) {limitCheck($("#" + textid + "hname").val(), frmval, toval, alertmsg);}if (inputval == "false" || limitationChk == false) {if (alertmsg != "") {throw new Error('Enter ' + alertmsg);} else {throw new Error('Empty Inputs');}}else if(limitationChk == true) {easyValid = 0;if (arind == "" || typeof(arind) == "undefined") {arind = 0;} else {arind = arrayKeyFinder(unitname, arind);}return getbasicval((textid + "unit"), inputval, unitname, '', arind);}} else {return false;}}
function easyCommonResultCalculation(textid,unitname,arind)
{if(easyValid==1)
{return"";}
else
{if (arind == "" || typeof(arind) == "undefined"){arind =0;}else {arind = arrayKeyFinder(unitname,arind);}
if(isNaN(getbasicval((textid + "unit"),eval(textid + "result"),unitname,'result', arind)))
{return 0;}
else{return getbasicval((textid + "unit"),eval(textid + "result"),unitname,'result', arind);}}}
function arrayKeyFinder(arrys,findval){arrys=eval(arrys);var keystore=0;return $.each(arrys,function(r,e){return e==findval?(keystore=r,!1):void 0}),keystore}
function getbasicval(string,value,arrname,type,baseunitpos)
{if($("#unitConv"+string).length>0){if(type=="result")
{return changeResultUnitConversion(value,string,eval(arrname)[baseunitpos],arrname);}
else
{return changeUnitConversion(value,string,eval(arrname)[baseunitpos],arrname);}}
else
{return value;}}
function test_val(id,error,variable)
{var t=$("#"+id).val();if(t=="")
{alert(error);return 0;}
else
{t=parseFloat(t);eval(variable+"="+t);return 1;}}
function emptyValidation(val, altmsgs) {if (val == "" && easyValid == 0) {if (altmsgs == "" || typeof(altmsgs) == "undefined") {altmsgs = "All Fields (Empty Field Here)";}alert("Enter " + altmsgs);easyValid = 0;return "false";} else {easyValid = 0;if (isNaN(val)){return 0;}else{return parseFloat(val);}}}
$(function()
{0==repeatErr&&($(".ec_calculator_gen").find("input[type = 'reset']").after('<div class="errClass" id="dynErrDisp"></div><div id="calciScroll"></div>'),repeatErr=1);
$(":reset").click(function()
{limitationChk = true;$("#dynErrDisp").html("");$("#dynErrDisp").hide();
if(typeof($(".ec_calculator_gen select").attr("onchange")) != "undefined") {if (($(".ec_calculator_gen select").attr("onchange")).indexOf("CurrencySymbol")>0) {$(".easycurrencyresult").html("&#36;");}}
if($(".ec_calculator_gen select").attr("onchange")=="modf()")
{setTimeout(function(){eval($(".ec_calculator_gen select").attr("onchange"))},100);}});$(":button").click(function()
{if(0==$(this).hasClass("btn")&&0==$(this).hasClass("bnt")&&0==$(this).hasClass("btnCls")&&0==$(this).hasClass("ques_box_btn_clr")&&""==$.trim($("#dynErrDisp").html())&&$("#calciScroll").length>0){var mobiScrnWidth=$(window).width(),noFbtn=$("#dispCalcConts").find(":button").length;noFbtn>1?650>mobiScrnWidth?$("html, body").animate({scrollTop:$(this).parent().next("div").find("h4").offset().top},2e3):$("html, body").animate({scrollTop:$(this).parent().prev("div").find("h4").offset().top},2e3):650>mobiScrnWidth?$("html, body").animate({scrollTop:$(this).parent().offset().top},2e3):$("html, body").animate({scrollTop:$("#dispCalcConts").offset().top},2e3)}easyValid=0;});});function onkeyupValidationClass()
{$(".easynumeric").numeric();$(".easyinteger").numeric(false,function(){alert("Integers only");this.value="";this.focus();});$(".easypositive").numeric({negative:false},function(){alert("No negative values");this.value="";this.focus();});$(".easypositive-integer").numeric({decimal:false,negative:false},function(){alert("Positive integers only");this.value="";this.focus();});mobileKeypad();mobileKeypadNumber();}
function relUnitConversion()
{var relUnitFrm=$("#relUnitFrm").val();var relUnitTo=$("#relUnitTo").val();if(relUnitFrm==relUnitTo)
{alert("Both Selected Units are Same.")
return false;}
else
{window.location.href="https://www.easycalculation.com/unit-conversion/"+relUnitFrm+"-"+relUnitTo+".html";}}
var EasyMath={combination:function(r,a){var n;if(r<a)n=0;else if(a>0){var e=r-a;nr=Math.min(a,e);var t=1,f=1;for(i=1;i<=nr;i++)t*=r,f*=i,r--;n=t/f}else n=1;return n},bigFact:function(r){if(0===r)return"1";if(!r)return"1";for(var e,t,i,n=r.toString().split("").reverse().map(Number);--r;)for(e=i=0;void 0!==(t=n[e++])||i;)i=(t||0)*r+i,n[e-1]=i%10,i=parseInt(i/10);return n.reverse().join("")},fact:function(a){if(Math.round(a),a<0)return"Undefined";for(var b=1,c=a;c>1;c--)b*=c;return b},gamma:function(a){if(a<1)var t=Math.sqrt(Math.PI/(a*EasyMath.asinh(Math.PI*a)));else if(Math.round(a)==a)t=EasyMath.fact(a-1);else{a-=1;t=Math.sqrt(Math.PI*(2*a+1/3))*Math.pow(a,a)*Math.exp(-a)}return t},arcosh:function(a){var b=Math.log(a+Math.sqrt(a*a-1));return b},arrayTrim:function(a,b){return a=$.trim(a),a.charAt(0)==b&&(a=a.slice(1)),a.charAt(a.length-1)==b&&(a=a.slice(a.length)),a},abs:function(a){var b=Math.abs(a);return b},atan2:function(a,b){var c=Math.atan2(a,b);return alert(c),c},asinh:function(a){var b=Math.asinh(a);return b},atanh:function(a){var b=Math.atanh(a);return b},alog:function(a){var b=Math.pow(10,a);return b},trapezoidal:function(a,b,c,d){var e="T",f="inp1="+a+"&inp2="+b+"&inp3="+encodeURIComponent(c)+"&n="+d+"&opt="+e;$.ajax({type:"POST",url:"admin/namespace/integral.php",data:f,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},simpson:function(a,b,c,d){var e="S",f="inp1="+a+"&inp2="+b+"&inp3="+encodeURIComponent(c)+"&n="+d+"&opt="+e;$.ajax({type:"POST",url:"admin/namespace/integral.php",data:f,success:function(a){return a}})},date:function(){var a=new Date,b=a.getDate();return b},day:function(){var a=new Date,b=a.getDay(),c=b%7,d="";return 0==c?d+="Sunday":1==c?d+="Monday":2==c?d+="Tuesday":3==c?d+="Wednesday":4==c?d+="Thursday":5==c?d+="Friday":6==c&&(d+="Saturday"),d},month:function(){var a=new Date,b=a.getMonth()+1;return b},year:function(){var a=new Date,b=a.getFullYear();return b},curDate:function(a,b){var c=new Date,e=(c.getDay(),c.getDate()),f=c.getFullYear(),g=c.getMonth()+1,h="";return h+=""!=a&&""!=b?"YMD"==a||"ymd"==a?f+""+b+g+b+e:"YDM"==a||"ydm"==a?f+""+b+e+b+g:"DMY"==a||"dmy"==a?e+""+b+g+b+f:"MDY"==a||"mdy"==a?g+""+b+e+b+f:"Wrong Format ":"Need two Input Values"},removeEmpty:function(a){for(var b=0,c=new Array,d=0;d<a.length;d++)""!=a[d]&&(c[b]=parseFloat(a[d]),b++);return c},asplit:function(a,b){""==b&&(b=",");var c=a.split(b);return c},sort:function(a,b){return a-b},countString:function(a,b){for(var c=0,d=0;d<a.length;d++)a[d]==b&&c++;return c},mean:function(a){a=EasyMath.asplit(a,""),a=EasyMath.removeEmpty(a);for(var b=a.length,c=0,d=0;d<b;d++)c+=parseFloat(a[d]);return c/=b},median:function(a){var b=0,c="",d="",e="",f=0;return a=EasyMath.asplit(a,","),a=EasyMath.removeEmpty(a),a.sort(EasyMath.sort),f=a.length,f%2!=0?(b=(parseFloat(f)+parseFloat(1))/2,b-=1,e=a[b]):(c=f/2-1,d=parseFloat(f/2)+parseFloat(1)-1,e=parseFloat(a[c])+parseFloat(a[d]),e/=2),e},mode:function(a){a=EasyMath.asplit(a,","),a=EasyMath.removeEmpty(a),a.sort(EasyMath.sort);var d,e,b=0,c=0;e=a[0];for(var f=0;f<=a.length;f++){var g=a[f];g==e?(b+=1,b>c&&(d=e,c=b)):(b==c&&d!=e&&(d=d+","+e),e=g,b=1)}return d},range:function(a){a=EasyMath.asplit(a,","),a=EasyMath.removeEmpty(a),a.sort(EasyMath.sort);var b=a.length,c=a[b-1]-a[0];return c},standarDeviation:function(a){var b=EasyMath.mean(a);a=EasyMath.asplit(a,","),a=EasyMath.removeEmpty(a),a.sort(EasyMath.sort);for(var c=a.length,d=0,e=0,f=0;f<c;f++)e=Math.pow(b-a[f],2),d+=parseFloat(e);var g=Math.sqrt(d/(c-1));return g},variance:function(a){var b=Math.pow(EasyMath.standarDeviation(a),2);return b},pstandarDeviation:function(a){var b=EasyMath.mean(a);a=EasyMath.asplit(a,","),a=EasyMath.removeEmpty(a),a.sort(EasyMath.sort);for(var c=a.length,d=0,e=0,f=0;f<c;f++)e=Math.pow(b-a[f],2),d+=parseFloat(e);var g=Math.sqrt(d/c);return g},pvariance:function(a){var b=Math.pow(EasyMath.pstandarDeviation(a),2);return b},derivative:function(a){var b=a.length,c="expr="+encodeURIComponent(a)+"&len="+b;$.ajax({type:"POST",url:"admin/namespace/differentiate.php",data:c,success:function(a){$("#Res").html("<i>"+a+"</i>"),$("#result").show()}})},addMatrix:function(a,b){opr="+",a=JSON.stringify(a),b=JSON.stringify(b),$.ajax({url:"admin/namespace/examples.php",type:"POST",data:{a:a,b:b,opr:opr},dataType:"json",async:!1,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},subMatrix:function(a,b){opr="-",a=JSON.stringify(a),b=JSON.stringify(b),$.ajax({url:"admin/namespace/examples.php",type:"POST",data:{a:a,b:b,opr:opr},dataType:"json",async:!1,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},mulMatrix:function(a,b){opr="*",a=JSON.stringify(a),b=JSON.stringify(b),$.ajax({url:"admin/namespace/examples.php",type:"POST",data:{a:a,b:b,opr:opr},dataType:"json",async:!1,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},divMatrix:function(a,b){opr="/",a=JSON.stringify(a),b=JSON.stringify(b),$.ajax({url:"admin/namespace/examples.php",type:"POST",data:{a:a,b:b,opr:opr},dataType:"json",async:!1,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},detMatrix:function(a,b){opr="D",a=JSON.stringify(a),b=JSON.stringify(b),$.ajax({url:"admin/namespace/examples.php",type:"POST",data:{a:a,b:b,opr:opr},dataType:"json",async:!1,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},invMatrix:function(a,b){opr="I",a=JSON.stringify(a),b=JSON.stringify(b),$.ajax({url:"admin/namespace/examples.php",type:"POST",data:{a:a,b:b,opr:opr},dataType:"json",async:!1,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},transMatrix:function(a,b){opr="T",a=JSON.stringify(a),b=JSON.stringify(b),$.ajax({url:"admin/namespace/examples.php",type:"POST",data:{a:a,b:b,opr:opr},dataType:"json",async:!1,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},squareMatrix:function(a,b){opr="S",a=JSON.stringify(a),b=JSON.stringify(b),$.ajax({url:"admin/namespace/examples.php",type:"POST",data:{a:a,b:b,opr:opr},dataType:"json",async:!1,success:function(a){$("#Res").html("<b>"+a+"</b>"),$("#result").show()}})},lineGraph:function(a,b,c,d,e,f){var g="line";return jquery_drawchart(a,g,b,c,d,e,f)},columnGraph:function(a,b,c,d,e,f){var g="column";return jquery_drawchart(a,g,b,c,d,e,f)},areaGraph:function(a,b,c,d,e,f){var g="area";return jquery_drawchart(a,g,b,c,d,e,f)},matixValidate:function(a,b){EasyMath.checknum(a),EasyMath.trimSpace(b),EasyMath.trimNegative(b),EasyMath.trimDot(b)},checknum:function(a){var b=a.value;return a.value=b.replace(/[^ \/ \n\d.-]/g,"")},trimSpace:function(a){var b=$("#"+a).val();$("#"+a).val(b.replace(/ +(?= )/g,""))},trimNegative:function(a){var b=$("#"+a).val();b=b.replace("--","-");var c=b.split("\n"),d=c.length,e=trim(c[d-1]).split(" "),f=e.length,g=e[f-1];if(g.length>1){var h=g.slice(-1);"-"==h&&(b=b.substring(0,b.length-1))}$("#"+a).val(b)},trimDot:function(a){var b=$("#"+a).val();b=b.replace("..",".");var c=b.split("\n"),d=c.length,e=trim(c[d-1]).split(" "),f=e.length,g=e[f-1],h=g.split(".").length-1;h>1&&(b=b.substring(0,b.length-1)),$("#"+a).val(b)}};
$(document).ready(function()
{if("placeholder"in document.createElement("input"))return;$(':input[placeholder]').not(':password').each(function(){setupPlaceholder($(this));});$(':password[placeholder]').each(function(){setupPasswords($(this));});$('form').submit(function(e){clearPlaceholdersBeforeSubmit($(this));});});function setupPlaceholder(input){var placeholderText=input.attr('placeholder');setPlaceholderOrFlagChanged(input,placeholderText);input.focus(function(e){if(input.data('changed')===true)return;if(input.val()===placeholderText)input.val('');}).blur(function(e){if(input.val()==='')input.val(placeholderText);}).change(function(e){input.data('changed',input.val()!=='');});}
function setPlaceholderOrFlagChanged(input,text){(input.val()==='')?input.val(text):input.data('changed',true);}
function setupPasswords(input){var passwordPlaceholder=createPasswordPlaceholder(input);input.after(passwordPlaceholder);(input.val()==='')?input.hide():passwordPlaceholder.hide();$(input).blur(function(e){if(input.val()!=='')return;input.hide();passwordPlaceholder.show();});$(passwordPlaceholder).focus(function(e){input.show().focus();passwordPlaceholder.hide();});}
function createPasswordPlaceholder(input){return $('<input>').attr({placeholder:input.attr('placeholder'),value:input.attr('placeholder'),id:input.attr('id'),readonly:true}).addClass(input.attr('class'));}
function clearPlaceholdersBeforeSubmit(form){form.find(':input[placeholder]').each(function(){if($(this).data('changed')===true)return;if($(this).val()===$(this).attr('placeholder'))$(this).val('');});}
function trimContinuousSymbols(strin,symb)
{var valAry=strin.split(",");var newStr="";for(con=0;con<valAry.length;con++)
{var strCount=countString(valAry[con],symb);if(strCount>1)
{valAry[con]=valAry[con].slice(0,-1);}
newStr=newStr+valAry[con];if((valAry.length-1)!=con)
{newStr=newStr+",";}}
return newStr;}
function countString(str,search)
{var count=0;var index=str.indexOf(search);while(index!=-1)
{count++;index=str.indexOf(search,index+1);}
return count;}
function logout(isfbook)
{if(isfbook==1)
{var flogout=confirm("You are logged out of both this site and Facebook");if(flogout==true)
window.location.href='https://www.easycalculation.com/event/logout.php';}
else
{window.location.href="https://www.easycalculation.com/event/logout.php?url=https://www.easycalculation.com/event/event-calendar.php";}}
(function($){$.fn.numeric=function(config,callback)
{if(typeof config==='boolean')
{config={decimal:config};}
config=config||{};if(typeof config.negative=="undefined")config.negative=true;var decimal=(config.decimal===false)?"":config.decimal||".";var negative=(config.negative===true)?true:false;var callback=typeof callback=="function"?callback:function(){};return this.data("numeric.decimal",decimal).data("numeric.negative",negative).data("numeric.callback",callback).keyup($.fn.numeric.keyup);}
$.fn.numeric.keyup=function(e)
{var val=this.value;if(val.length>0)
{var carat=$.fn.getSelectionStart(this);var decimal=$.data(this,"numeric.decimal");var negative=$.data(this,"numeric.negative");if(decimal!="")
{var dot=val.indexOf(decimal);if(dot==0)
{this.value="0"+val;}
if(dot==1&&val.charAt(0)=="-")
{this.value="-0"+val.substring(1);}
val=this.value;}
var validChars=[0,1,2,3,4,5,6,7,8,9,'-',decimal];var length=val.length;for(var i=length-1;i>=0;i--)
{var ch=val.charAt(i);if(i!=0&&ch=="-")
{val=val.substring(0,i)+val.substring(i+1);}
else if(i==0&&!negative&&ch=="-")
{val=val.substring(1);}
var validChar=false;for(var j=0;j<validChars.length;j++)
{if(ch==validChars[j])
{validChar=true;break;}}
if(!validChar||ch==" ")
{val=val.substring(0,i)+val.substring(i+1);}}
var firstDecimal=val.indexOf(decimal);if(firstDecimal>0)
{for(var i=length-1;i>firstDecimal;i--)
{var ch=val.charAt(i);if(ch==decimal)
{val=val.substring(0,i)+val.substring(i+1);}}}
this.value=val;$.fn.setSelection(this,carat);}}
$.fn.getSelectionStart=function(o)
{if(o.createTextRange)
{var r=document.selection.createRange().duplicate();r.moveEnd('character',o.value.length);if(r.text=='')return o.value.length;return o.value.lastIndexOf(r.text);}else return o.selectionStart;}
$.fn.setSelection=function(o,p)
{if(typeof p=="number")p=[p,p];if(p&&p.constructor==Array&&p.length==2)
{if(o.createTextRange)
{var r=o.createTextRange();r.collapse(true);r.moveStart('character',p[0]);r.moveEnd('character',p[1]);r.select();}
else if(o.setSelectionRange)
{o.focus();o.setSelectionRange(p[0],p[1]);}}}})(jQuery);
function closeModal(){$("#dispCalcConts *").attr("disabled",false);$('#overlayLoader').css("display","none");$("#dispCalcConts").fadeTo("fast",1);var easyinputs = document.getElementsByTagName("INPUT");for (var ies = 0; ies < easyinputs.length; ies++){if (easyinputs[ies].type === 'button' || easyinputs[ies].type === 'reset'){easyinputs[ies].style.visibility='visible';}}}
function relUnitConversionNew(){var e=$("#relUnitFrmNew").val(),n=$("#relUnitToNew").val();return e==n?(alert("Both Selected Units are Same."),!1):void(window.location.href="https://www.easycalculation.com/unit-conversion/bandwidth/"+e+"-"+n+".html")}
function mobileKeypad(){var e=$(window).width();if(480>e){var t=new Array(".easynumeric",".easyinteger",".easypositive",".easypositive-integer");$.each(t,function(e,t){$(t).prop("type","tel")}),$(".ec_calculator_gen").find("input[type = 'text']").each(function(){var e=$(this).attr("onkeyup");"undefined"!=typeof e&&"-1"!=e.indexOf("checnum(this)")&&$(this).prop("type","tel")})}}function mobileKeypadNumber(){var e=$(window).width();480>e&&$(".ec_calculator_gen").find("input[type = 'text']").each(function(){var e=$(this).attr("onkeyup");"undefined"==typeof e||"-1"==e.indexOf("checnum(this)")&&"-1"==e.indexOf("checnum1(this)")||$(this).prop("type","number")})}
function isHTMLContains(e){var r=document.createElement("div");r.innerHTML=e;for(var t=r.childNodes,n=t.length;n--;)if(1==t[n].nodeType)return!0;return!1}function faqpostchecks(){$("#faqerr").html("");var e=$.trim($("#faques").val());if(""==e)return $("#faqerr").html("<p style='color:red;hright:auto;margin-bottom: -6px;'> Enter your question</p>"),$("#faques").focus(),!1;var r=isHTMLContains(e),t=replaceURLWithHTMLLinks(e);if(0==r&&1==t){var n=document.getElementById("faqformpost");n.submit()}else $("#faqerr").html("<p style='color:red;hright:auto;margin-bottom: -6px;'>Self promotion and external links are not accepted in your question.</p>")}function replaceURLWithHTMLLinks(e){var r=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,t=e.replace(r,"<a href='$1'>$1</a>");return t==e?!0:!1}
function easyFaqPost(a){"logged"==a?(question=$("#faques").val(),a="logged",refl=$("#faqPostCurUrl").val()):(question=$("#updques").html(),a="guest",refl=$("#faquesrc").val()),tags="",category="",desc="",faq_status="0",faqdomain="easycalculation.com";var b={process_type:"add_faq",question:question,tags:tags,category:category,desc:desc,user_type:a,faq_status:faq_status,domain:faqdomain,refurl:refl},c=widget_faq_request(b);"success"==c.process?$("#faqMess").html("<br>Your Question has been submitted successfully! Awaiting for moderator approval.."):(errorMes=c.msg,$("#faqerr").html(errorMes))}function widget_faq_request(a){faq_root="https://www.easycalculation.com/faq/";var b;return $.ajax({type:"POST",url:faq_root+"faq-handler.php",dataType:"json",cache:!1,async:!1,data:a,success:function(a){b=a}}),b}
function faqpost(){$("#faqerr").html("");var t=$.trim($("#faques").val());$.post("https://www.easycalculation.com/faq/update-review.php",{action:"add",msg:t,allpg:"yes"},function(t){if(2==t)$("#faqerr").html("<p style='color:red;hright:auto;margin-bottom: -6px;'>Your IP or email address has been blocked and hence you cannot post or answer questions in this site.</p>");else if(3==t)$("#faqerr").html("<p style='color:red;hright:auto;margin-bottom: -6px;'>You must be signed in, to post questions.</p>");else{var e=$.trim(t).split("---"),o=e[1];1!=e[2]||isNaN(e[0])?$("#faqerr").html("exist"==e[0]?"<p style='color:red;hright:auto;margin-bottom: -6px;'>Your question has been submitted already.</p>":"<p style='color:red;hright:auto;margin-bottom: -6px;'>Self promotion and external links are not accepted in your question.</p>"):(window.parent.location="https://www.easycalculation.com/faq/"+e[0]+"/"+o+".html",$("#faques").val(""))}})}function faqpostguest(){var t=$.trim($("#updques").html());$.post("https://www.easycalculation.com/faq/update-review.php",{action:"add",msg:t,allpg:"yes",guestacc:"guest"},function(t){if(2==t)$("#faqerr").html("<p style='color:red;hright:auto;margin-bottom: -6px;'>Your IP or email address has been blocked and hence you cannot post or answer questions in this site.</p>");else if(3==t)$("#faqerr").html("<p style='color:red;hright:auto;margin-bottom: -6px;'>You must be signed in, to post questions.</p>");else{var e=$.trim(t).split("---"),o=e[1];1!=e[2]||isNaN(e[0])?$("#faqerr").html("exist"==e[0]?"<p style='color:red;hright:auto;margin-bottom: -6px;'>Your question has been submitted already.</p>":"<p style='color:red;hright:auto;margin-bottom: -6px;'>Self promotion and external links are not accepted in your question.</p>"):(window.parent.location="https://www.easycalculation.com/faq/"+e[0]+"/"+o+".html",$("#faques").val(""))}})}
function clrfaqs(){$("#faqerr").html(""),$("#faques").val("")}function definitionSearch(){var e=$("#deftext").val();if(""==e)return alert("Enter Definition Name"),$("#deftext").focus(),!1;var r=isHTMLContains(e);return 0!=r?(alert("Search content contains html code"),!1):void(window.location.href="maths-dictionary/dictionary-search.php?defi="+e)}function formulaSearch(){var e=$("#formsrch").val();if(""==e)return alert("Enter Formula Name"),$("#formsrch").focus(),!1;var r=isHTMLContains(e);return 0!=r?(alert("Search content contains html code"),!1):void(window.location.href="formulas/formula-search.php?defi="+e)}function currencyReverse(){var e=$("#fromcur").val(),r=$("#tocur").val();$("#fromcur option[value^='"+r+"']").attr("selected","selected"),$("#tocur option[value^='"+e+"']").attr("selected","selected"),currency_calc()}
function menuFocusCalci() {$('html, body').animate({scrollTop: $("#dispCalcConts").offset().top}, 2000);}
$(document).ready(function() {$(document).on("scroll", function(e) {if ($(this).scrollTop() > 100) {$("#wrap").addClass("fix-search");} else {$("#wrap").removeClass("fix-search");}});if ($('#nav').length){window.onresize = navigationResize;navigationResize();}});
function navigationResize() {$('#nav li.more_menu').before($('#overflow > li'));var $navItemMore = $('#nav > li.more_menu'),$navItems = $('#nav > li:not(.more_menu)'),navItemMoreWidth = navItemWidth = $navItemMore.width(),windowWidth = $(window).width(),navItemMoreLeft, offset, navOverflowWidth;$navItems.each(function() {navItemWidth += $(this).width();});navItemWidth > windowWidth ? $navItemMore.show() : $navItemMore.hide();while (navItemWidth > windowWidth) {navItemWidth -= $navItems.last().width()-20;$navItems.last().prependTo('#overflow');$navItems.splice(-1,1);}navItemMoreLeft = $('#nav .more_menu').offset().left;navOverflowWidth = $('#overflow').width();offset = navItemMoreLeft + navItemMoreWidth - navOverflowWidth;$('#overflow').css({'left': offset});}
function limitCheck(val, frmval, toval, altmsg) {val = parseConv(val);if (frmval != '') {frmval = parseConv(frmval);if (val<frmval) {alert('Enter '+altmsg+' value must be greater than or equal to '+frmval);limitationChk = false;clearResultDisplay();}else {limitationChk = true;}}if (toval != '') {toval = parseConv(toval);if (val>toval) {alert('Enter '+altmsg+' value must be lesser than or equal to '+toval);limitationChk = false;clearResultDisplay();}else {limitationChk = true;}}}
function clearResultDisplay() {$(".ec_calculator_gen").find("input[type = 'text']").each(function (index){if($(this).attr('readonly') === "readonly") {$(this).val('');}});}
function faqrightshowhide(obj){if(obj=='expand'){$("#faqrighttree").show();}else if(obj=='minimize'){$("#faqrighttree").hide();}}