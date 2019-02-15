function mustTime() {
    
    var ahtime = document.getElementById("ahtime").value;
    var amtime = document.getElementById("amtime").value;
    var ahtimeint = parseInt(ahtime, 10);
    var amtimeint = parseInt(amtime, 10);
    var a;
    a = (ahtimeint * 60) + amtimeint;

        var must;
        var hmust;
        var mmust;
        
        must = a + 498;
        mmust = must;
        
        hmust = must;
        mmust = mmust % 60;
        hmust = (hmust - mmust) / 60;
        
        

        if (mmust < 10) {
                    document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                    document.getElementById("musttime").style.animation = "color-change 7s infinite";
                }

                else {
                    document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                    document.getElementById("musttime").style.animation = "color-change 7s infinite";
                }
            
}


function resetStartTime()
{
    document.getElementById("ahtime").value = "";
    document.getElementById("amtime").value = "";

    document.getElementById("musttime").innerHTML = "XX:XX:XX";
    document.getElementById("musttime").style.color = "white";
    document.getElementById("musttime").style.animation = "color-change 0s infinite";
    
    document.getElementById("ahtime").focus();
    closeLeftNav();
}

function resetEndTime()
{
    document.getElementById("cmtime").value = "";
    document.getElementById("chtime").value = "";

    document.getElementById("demo").innerHTML = "XX:XX:XX";
    document.getElementById("demo").style.color = "white";
    
    document.getElementById("chtime").focus();
    closeLeftNav();
   
    
}

function resetAllTime()
{

    document.getElementById("ahtime").value = "";
    document.getElementById("amtime").value = "";

    document.getElementById("musttime").innerHTML = "XX:XX:XX";
    document.getElementById("musttime").style.color = "white";
    document.getElementById("musttime").style.animation = "color-change 0s infinite";

    document.getElementById("cmtime").value = "";
    document.getElementById("chtime").value = "";

    document.getElementById("demo").innerHTML = "XX:XX:XX";
    document.getElementById("demo").style.color = "white";

    
    document.getElementById("ahtime").focus();

    closeLeftNav();
   
    
}
        
function maxLengthCheckah()
  {
    if (document.getElementById("ahtime").value.length > document.getElementById("ahtime").maxLength)
      document.getElementById("ahtime").value = document.getElementById("ahtime").value.slice(0, document.getElementById("ahtime").maxLength)

        if(document.getElementById("ahtime").value.length == 1 && document.getElementById("ahtime").value.length != 0)
        {
          document.getElementById("ahtime").value = 0 + document.getElementById("ahtime").value;
        }
      

      
  }
  function maxLengthCheckam()
  {
    if (document.getElementById("amtime").value.length > document.getElementById("amtime").maxLength)
      document.getElementById("amtime").value = document.getElementById("amtime").value.slice(0, document.getElementById("amtime").maxLength)

        if(document.getElementById("amtime").value.length == 1 && document.getElementById("amtime").value.length != 0)
        {
          document.getElementById("amtime").value = 0 + document.getElementById("amtime").value;
        }
      

      
  }
  function maxLengthCheckch()
  {
    if (document.getElementById("chtime").value.length > document.getElementById("chtime").maxLength)
      document.getElementById("chtime").value = document.getElementById("chtime").value.slice(0, document.getElementById("chtime").maxLength)

        if(document.getElementById("chtime").value.length == 1 && document.getElementById("chtime").value.length != 0)
        {
          document.getElementById("chtime").value = 0 + document.getElementById("chtime").value;
        }
      

      
  }
  function maxLengthCheckcm()
  {
    if (document.getElementById("cmtime").value.length > document.getElementById("cmtime").maxLength)
      document.getElementById("cmtime").value = document.getElementById("cmtime").value.slice(0, document.getElementById("cmtime").maxLength)

        if(document.getElementById("cmtime").value.length == 1 && document.getElementById("cmtime").value.length != 0)
        {
          document.getElementById("cmtime").value = 0 + document.getElementById("cmtime").value;
        }
      

      
  }

