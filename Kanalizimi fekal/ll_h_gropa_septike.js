document.getElementById("llog_gropa_septike").onclick = function() {
    let N0 = parseFloat(document.getElementById("Nr_banoreve").value);
    N0 = Number(N0);
    let Pp = parseFloat(document.getElementById("Periudha_projektuese").value);
    Pp = Number(Pp);
    let Pps = parseFloat(document.getElementById("Periudha_pastrimit").value);
    let q = parseFloat(document.getElementById("kerkesa_uje_per_person").value);
    q = Number(q);
    let H = parseFloat(document.getElementById("Lartësia").value);
    let Hl = parseFloat(document.getElementById("Kufiri_lirë").value);
    let Ly = parseFloat(document.getElementById("Lymi").value);
    let Km = parseFloat(document.getElementById("koha_mbajtjes").value);
    let Rrp = parseFloat(document.get("rritja_popullsise").value);

    let Nb = N0 * (1 + (Rrp / 100))**Pp;
    //Prurja furnizuese
    
    let Qf = q * Nb;
    Qf = Number(Qsh);

    //Prurja shkarkuese 80%

    let Qsh = 0.8 * Qf;
    

    //Vellimi i ujit

    let Vu = qsh * Km / 24;

    //Vellimi i lymit

    let Vl = (Ly / 1000) * Nb * (Pps / 1);

    //Vellimi total i gropes septike

    let V1 = Vu + Vl;

    let A = (Vtot / H);

    let W = (A / 2)**0.5;

    let L = 2 * W;

    let Ht = H + Hl;
    Ht = Number(Ht);

    document.getElementById("rez1").innerHTML = L.toFixed(2);
    document.getElementById("gjer_gseptike").innerHTML = W.toFixed(2);
}   //document.getElementById("lar_gseptike").innerHTML = Ht.toFixed(2);