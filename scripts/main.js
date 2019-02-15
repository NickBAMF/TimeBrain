var error;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(39, 39, 39,0.8)";
    //!----------------------!
}

function closeNav() {
    var e = document.getElementById("mySidenav");
    if (e.style.width == '250px')
    {
        document.getElementById("bottom").style.backgroundColor="rgba(0, 0, 0, 0.6)";
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
    
    
    document.getElementById("main").style.opacity = "1";
    //!-----------------------!
    }
    else
    {

    }
    //!-----------------------!
    
}

function openNav2s() {
    var e = document.getElementById("mySidenav");
    if (e.style.width == '250px')
    {
        document.getElementById("bottom").style.backgroundColor="rgba(0, 0, 0, 0.6)";
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
    
    
    document.getElementById("main").style.opacity = "1";
    //!-----------------------!
    }
    else 
    {
        document.getElementById("bottom").style.backgroundColor="rgba(0, 0, 0, 0.0)";
        document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    
    document.getElementById("main").style.opacity = "0.4";
    
    closeLeftNav();
    //!----------------------!
    }
}

function ErrorTimeah() {
    if (error != 1) {
        var ah = document.getElementById("ahtime").value;

    if (((ah > 20) || (ah < 5)) && ah != "") {
        document.getElementById("demo").innerHTML = "CODE:AH Please enter valid time <br> (Time , when BAMF is opened 05:00 - 20:00)";
        document.getElementById("demo").style.color = "red";
        document.getElementById("ahtime").value = "";
        document.getElementById("ahtime").focus();
        error = 1;

    }

    else {
        
        error = 0;
    }
    }
    else{
        
    }
    

}

function ErrorTimech() {
    if (error != 1) {
        var ch = document.getElementById("chtime").value;

        if (((ch > 20) || (ch < 00)) ) {
            document.getElementById("demo").innerHTML = "CODE:CH Please enter valid time <br> (Time , when BAMF is opened 05:00 - 20:00)";
            document.getElementById("demo").style.color = "red";
            document.getElementById("chtime").value = "";
            document.getElementById("chtime").focus();
            error = 1;
        }
    
        else {
            if (document.getElementById("demo").innerHTML != "XX:XX:XX") {
                
            document.getElementById("demo").style.color = "white";
            error = 0;
            }
            else
            {
               
                error = 0;
            }
            
        }
    }
    else{
        
    }
   

}

function ErrorTimeam() {
    if (error != 1) {
        var am = document.getElementById("amtime").value;

    if (((am > 59) || (am < 00))&& am != "") {
        document.getElementById("demo").innerHTML = "CODE:AM Please enter valid time <br> (Minutes from 0 to 59)";
        document.getElementById("demo").style.color = "red";
        document.getElementById("amtime").value = "";
        document.getElementById("amtime").focus();
        error = 1;
    }

    else {
        
        error = 0;
        
        
        check24Hours();
    }
    }
    else{
        
    }
    

}

function ErrorTimecm() {

    if (error != 1) {
        var cm = document.getElementById("cmtime").value;

    if (((cm > 59) || (cm < 00))) {
        document.getElementById("demo").innerHTML = "CODE:CM Please enter valid time <br> (Minutes from 0 to 59)";
        document.getElementById("demo").style.color = "red";
        document.getElementById("cmtime").value = "";
        document.getElementById("cmtime").focus();
        error = 1;

    }

    else {
        
        error = 0;
    }
    }
    else{

    }


    

}


function checkBeforeGo() {
    var ah = document.getElementById("ahtime").value;
    var am = document.getElementById("amtime").value;

    var cm = document.getElementById("cmtime").value;
    var ch = document.getElementById("chtime").value;
    
    if (ah > ch) {
        
            
            
            document.getElementById("chtime").value = "";
            document.getElementById("cmtime").value = "";
            document.getElementById("ahtime").value = "";
            document.getElementById("amtime").value = "";
            document.getElementById("musttime").innerHTML = "XX:XX:XX";
            document.getElementById("musttime").style.animation = "color-change 0s infinite";
            document.getElementById("ahtime").focus();
            document.getElementById("demo").innerHTML = "CODE:CBG Please enter valid time <br> (Time B must be bigger that Time A)";
            document.getElementById("demo").style.color = "red";
            error = 1;
       
        
    }
    else if (ah == ch) {
        if (am >= cm) {
            document.getElementById("demo").innerHTML = "CODE:CBG Please enter valid time <br> (Time B must be bigger that Time A)";
            document.getElementById("demo").style.color = "red";
            document.getElementById("chtime").value = "";
            document.getElementById("cmtime").value = "";
            document.getElementById("ahtime").value = "";
            document.getElementById("amtime").value = "";
            document.getElementById("musttime").innerHTML = "XX:XX:XX";
            document.getElementById("musttime").style.animation = "color-change 0s infinite";
            document.getElementById("ahtime").focus();
            
            error = 1;
            TimeBrain();
           }
           else
           {
            error = 0;
            TimeBrain();
           }
    }
        else
        {
            error = 0;
            TimeBrain();
        }
    
}

function TimeBrain() {



    
        if (error != 1) {
            document.getElementById("demo").style.color = "white";
    var ah = document.getElementById("ahtime").value;
    var cm = document.getElementById("cmtime").value;
    var am = document.getElementById("amtime").value;
    var ch = document.getElementById("chtime").value;

    if (ah == "" || am == "" || ch == "" || cm == "" ) {
        document.getElementById("chtime").value = "";
            document.getElementById("cmtime").value = "";
            document.getElementById("ahtime").value = "";
            document.getElementById("amtime").value = "";
            document.getElementById("amtime").value = "";
            document.getElementById("ahtime").focus();
            document.getElementById("demo").innerHTML = "CODE:AC Please enter valid time <br> (Time B must be bigger that Time A)";
            document.getElementById("demo").style.color = "red";
    }
    else
    {
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
    
            var chtime = document.getElementById("chtime").value;
            var cmtime = document.getElementById("cmtime").value;
            var chtimeint = parseInt(chtime, 10);
            var cmtimeint = parseInt(cmtime, 10);
            var c;
            c = (chtimeint * 60) + cmtimeint;
    
            var mac;
            var hac;
    
            var pmh;
            var hpmh;
            var mpmh;
    
            mac = c - a;
            pmh = mac;
            hac = mac;
            mac = mac % 60;
    
            hac = (hac - mac) / 60;
    
            var superplus;
            var superminus;

            var check;
    
            document.getElementById("ahtime").focus();
    
            if (ah > 8 && ah < 16) {
    
                open915Nav();
            }
    
            if (hmust > 19) {
                check24Hours();
                check = true;
            }
            else{

            }
            
            
                //-----------MINUTED < 10---------------------------------
                if (mac < 10) 
                {
                    //-----------EXTRAMINUSSTUNDEN------------------------
                    if (pmh <= 390 && pmh > 360) {
    
                        superminus = pmh - 360;
                        mpmh = 498 - pmh;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (6 Std. + "+ superminus +" min. Pause)<br> (" + hpmh + ":0" + mpmh + " Minusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open963Nav();
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (6 Std. + "+ superminus +" min. Pause)<br> (" + hpmh + ":" + mpmh + " Minusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open963Nav();
                        }
    
                    }
                    //-----------MINUSSTUNDEN-----------------------------
                    else if (pmh < 498) {
    
                        mpmh = 498 - pmh;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (" + hpmh + ":0" + mpmh + " Minusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (" + hpmh + ":" + mpmh + " Minusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                        }
    
                    }
                    //-----------EXTRAPLUSSTUNDEN-------------------------
                    else if (pmh > 570) {
                        if (pmh > 585) {
                                        
                        superplus = 15;
                        mpmh = pmh - 498 - superplus;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std.<br> (" + hpmh + ":0" + mpmh + " Plusstunden)<br> [Extra Pause " + superplus + " min nach 9 Std. 30 min.]";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open930Nav();
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std.<br> (" + hpmh + ":" + mpmh + " Plusstunden)<br> [Extra Pause " + superplus + " min nach 9 Std. 30 min.]";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open930Nav();
                        }
                        }
                            
                        
                        else if (pmh <= 585)
                        {
                                    
                        superplus = pmh - 570;
                        mpmh = pmh - 498 - superplus;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std.<br> (" + hpmh + ":0" + mpmh + " Plusstunden)<br> [Extra Pause " + superplus + " min nach 9 Std. 30 min.]";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open930Nav();
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std.<br> (" + hpmh + ":" + mpmh + " Plusstunden)<br> [Extra Pause " + superplus + " min nach 9 Std. 30 min.]";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open930Nav();
                        }
                        }
                    }
                    //-----------PLUSSTUNDEN------------------------------
                    else if (pmh > 498) {
    
                        
                                
    
                                mpmh = pmh - 498;
                                hpmh = mpmh;
                                mpmh = mpmh % 60;
                                hpmh = (hpmh - mpmh) / 60;
    
                                if (mpmh < 10) {
                                    document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (" + hpmh + ":0" + mpmh + " Plusstunden)";
    
                                    if (mmust < 10) {
                                        document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                                    }
    
                                    else {
                                        document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                                    }
                                }
    
                                else {
                                    document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (" + hpmh + ":" + mpmh + " Plusstunden)";
    
                                    if (mmust < 10) {
                                        document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                                    }
    
                                    else {
                                        document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                                    }
                                }
                        
    
    
    
                    }
                    //-----------NULLSTUNDEN------------------------------
                    else if (pmh == 498) {
    
                        document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (Keine Plus-/Minusstunden)";
    
                        if (mmust < 10) {
                            document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                        }
    
                        else {
                            document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                        }
                    }
                }
                //-----------MINUTED > 10---------------------------------
                else {
                    //-----------EXTRAMINUSSTUNDEN------------------------
                    if (pmh <= 390 && pmh > 360) {
    
                        superminus = pmh - 360;
                        mpmh = 498 - pmh ;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (6 Std. + "+ superminus +" min. Pause)<br> (" + hpmh + ":0" + mpmh + " Minusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open963Nav();
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (6 Std. + "+ superminus +" min. Pause)<br> (" + hpmh + ":" + mpmh + " Minusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open963Nav();
                        }
    
                    }
                    //-----------MINUSSTUNDEN-----------------------------
                    else if (pmh < 498) {
    
                        mpmh = 498 - pmh;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (" + hpmh + ":0" + mpmh + " Minusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (" + hpmh + ":" + mpmh + " Minusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                        }
    
                    }
                    //-----------EXTRAPLUSSTUNDEN-------------------------
                    else if (pmh > 570) {
    
                        if (pmh > 585) {
                            superplus = 15;
                        mpmh = pmh - 498 - superplus;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std.<br> (" + hpmh + ":0" + mpmh + " Plusstunden)<br> [Extra Pause " + superplus + " min nach 9 Std. 30 min.]";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open930Nav();
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std.<br> (" + hpmh + ":" + mpmh + " Plusstunden)<br> [Extra Pause " + superplus + " min nach 9 Std. 30 min.]";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open930Nav();
                        }
    
                            
                        }
                        else if (pmh <= 585) {
                            superplus = pmh - 570;
                        mpmh = pmh - 498 - superplus;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std.<br> (" + hpmh + ":0" + mpmh + " Plusstunden)<br> [Extra Pause " + superplus + " min nach 9 Std. 30 min.]";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open930Nav();
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std.<br> (" + hpmh + ":" + mpmh + " Plusstunden)<br> [Extra Pause " + superplus + " min nach 9 Std. 30 min.]";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                            open930Nav();
                        }
    
                            
                        }
                    }
                    //-----------PLUSSTUNDEN------------------------------
                    else if (pmh > 498) {
    
                        mpmh = pmh - 498;
                        hpmh = mpmh;
                        mpmh = mpmh % 60;
                        hpmh = (hpmh - mpmh) / 60;
    
                        if (mpmh < 10) {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (" + hpmh + ":0" + mpmh + " Plusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                        }
    
                        else {
                            document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (" + hpmh + ":" + mpmh + " Plusstunden)";
    
                            if (mmust < 10) {
                                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
    
                            else {
                                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                            }
                        }
    
                    }
                    //-----------NULLSTUNDEN------------------------------
                    else if (pmh == 498) {
    
                        document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (Keine Plus-/Minusstunden)";
    
                        if (mmust < 10) {
                            document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                        }
    
                        else {
                            document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                        }
                    }
                }
                if (check)
                {
                    document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                
                error = 0;    
            }
                            
                      
    }
            
        }
        else{

        }
       
            

            
        }
       

    




    