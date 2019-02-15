

function open930Nav() {

    document.getElementById("bottomnNavBar2").style.left = "-500px";
    document.getElementById("bottomnNavBar3").style.left = "-500px";
    document.getElementById("bottomnNavBar4").style.left = "-500px";
    document.getElementById("bottomnNavBar1").style.left = "100px";
  }
  function open915Nav() {

    var ah = document.getElementById("ahtime").value;
    if (ah > 8 || ch < 16) {


        document.getElementById("bottomnNavBar1").style.left = "-500px";
        document.getElementById("bottomnNavBar3").style.left = "-500px";
        document.getElementById("bottomnNavBar4").style.left = "-500px";
        document.getElementById("bottomnNavBar2").style.left = "100px";
    }
    else
    {

    }
    
  }

  function open963Nav() {

    
        document.getElementById("bottomnNavBar1").style.left = "-500px";
        document.getElementById("bottomnNavBar2").style.left = "-500px";
        document.getElementById("bottomnNavBar3").style.left = "-500px";
        document.getElementById("bottomnNavBar4").style.left = "100px";
    
  }

//---------------------------------------------------------------------------------
  function open905Nav() {

    var ah = document.getElementById("ahtime").value;

        if (ah < 6 && ah != "") {

            document.getElementById("bottomnNavBar1").style.left = "-500px";
            document.getElementById("bottomnNavBar2").style.left = "-500px";
            document.getElementById("bottomnNavBar4").style.left = "-500px";
            document.getElementById("bottomnNavBar3").style.left = "100px";
        }
        else
        {

        }

    
  }
  
  function closeLeftNav() {

        document.getElementById("bottomnNavBar1").style.left = "-500px";
        document.getElementById("bottomnNavBar2").style.left = "-500px";
        document.getElementById("bottomnNavBar3").style.left = "-500px";
        document.getElementById("bottomnNavBar4").style.left = "-500px";
  }

  