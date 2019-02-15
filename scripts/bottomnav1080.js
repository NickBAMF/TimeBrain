function openNav() {
  document.getElementById("mySidenav").style.height = "50px";
  document.getElementById("main").style.marginTop = "50px";
  document.body.style.backgroundColor = "rgba(39, 39, 39,0.8)";
  //!----------------------!
}

function closeNavTop() {
  var h = document.getElementById("mySidenav");
  if (h.style.height == '50px')
  {
      document.getElementById("bottom").style.backgroundColor="rgba(0, 0, 0, 0.6)";
      document.getElementById("mySidenav").style.height = "0";
      document.getElementById("main").style.marginTop = "0";
  
  
  document.getElementById("main").style.opacity = "1";
  //!-----------------------!
  }
  else
  {

  }
  //!-----------------------!
  
}

function openNav2sT() {
  var h = document.getElementById("mySidenav");
  if (h.style.height == '50px')
  {
      document.getElementById("bottom").style.backgroundColor="rgba(0, 0, 0, 0.6)";
      document.getElementById("mySidenav").style.height = "0";
      document.getElementById("mySidenav").style.height = "0";
      document.getElementById("main").style.marginTop = "0";
  
  
  document.getElementById("main").style.opacity = "1";
  //!-----------------------!
  }
  else 
  {
      document.getElementById("bottom").style.backgroundColor="rgba(0, 0, 0, 0.0)";
      document.getElementById("mySidenav").style.height = "50px";
  document.getElementById("main").style.marginTop = "50px";
  
  document.getElementById("main").style.opacity = "0.4";
  
  closeLeftNavTop();
  //!----------------------!
  }
}