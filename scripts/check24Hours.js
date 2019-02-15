function check24Hours() {
    if (error != 1) {
        var ahtime = document.getElementById("ahtime").value;
    var amtime = document.getElementById("amtime").value;
    var ahtimeint = parseInt(ahtime, 10);
    var amtimeint = parseInt(amtime, 10);
    var chtime = document.getElementById("chtime").value;
    var cmtime = document.getElementById("cmtime").value;
    var chtimeint = parseInt(chtime, 10);
    var cmtimeint = parseInt(cmtime, 10);
    if (amtime != "" && ahtime != "" ) {
        //-------------------------------------------------------------
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
        var c;
        c = 1200;
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
        var superminus;
        var Hmust = hmust;
        var tempHourWork;
        var tempMinuteWork;
        tempHourWork = 1200 - a;
        tempMinuteWork = tempHourWork;
        tempMinuteWork = tempMinuteWork % 60;
        tempHourWork = (tempHourWork - tempMinuteWork) / 60;
        //-------------------------------------------------------------
        document.getElementById("chtime").focus();
        if (ahtime > 8) {
            open915Nav();
        }
        //-------------------------------------------------------------
        if (Hmust > 19) {


            //-----------MINUTEN < 10 ------------------------
            if (mac < 10) {
            //-----------EXTRAMINUSSTUNDEN------------------------
            if (pmh <= 390 && pmh > 360) {

            superminus = pmh - 360;
            mpmh = 498 - pmh;
            hpmh = mpmh;
            mpmh = mpmh % 60;
            hpmh = (hpmh - mpmh) / 60;

            if (mpmh < 10) {
                document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (6 Std. + "+ superminus +" min. Pause)<br> (" + hpmh + ":0" + mpmh + " Minusstunden)";
                open963Nav();
            }

            else {
                document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (6 Std. + "+ superminus +" min. Pause)<br> (" + hpmh + ":" + mpmh + " Minusstunden)";
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
                document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (" + hpmh + ":0" + mpmh + " Minusstunden)";
            }

            else {
                document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                document.getElementById("demo").innerHTML = hac + ":0" + mac + " Std. (" + hpmh + ":" + mpmh + " Minusstunden)";
            }

            }           
            }
        //-----------MINUTEN > 10 ------------------------    
        else {
        //-----------EXTRAMINUSSTUNDEN------------------------
        if (pmh <= 390 && pmh > 360) {

            superminus = pmh - 360;
            mpmh = 498 - pmh ;
            hpmh = mpmh;
            mpmh = mpmh % 60;
            hpmh = (hpmh - mpmh) / 60;

            if (mpmh < 10) {
                document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (6 Std. + "+ superminus +" min. Pause)<br> (" + hpmh + ":0" + mpmh + " Minusstunden)";
                open963Nav();
            }

            else {
                document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (6 Std. + "+ superminus +" min. Pause)<br> (" + hpmh + ":" + mpmh + " Minusstunden)";
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
                document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (" + hpmh + ":0" + mpmh + " Minusstunden)";
            }

            else {
                document.getElementById("musttime").innerHTML = "Heute bis 20:00";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
                document.getElementById("demo").innerHTML = hac + ":" + mac + " Std. (" + hpmh + ":" + mpmh + " Minusstunden)";
            }

        }
            }
        }
        //----------------SIMPLE MUST TIME-----------------------------------------
        else {
            if (mmust < 10) {
                document.getElementById("musttime").innerHTML = hmust + ":0" + mmust + " Uhr (7:48 + 30 min. Pause)";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
            }
            else {
                document.getElementById("musttime").innerHTML = hmust + ":" + mmust + " Uhr (7:48 + 30 min. Pause)";
                document.getElementById("musttime").style.animation = "color-change 7s infinite";
            }
        }
    }
    //-----------------------EXIT FROM THIS---------------------------------------
    else {
    }
    }
    else
    {
        
    }
    
}

