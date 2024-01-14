vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
vketik1b=kalimata.innerHTML;kalimata.innerHTML = "";
vketik2=kalimatb.innerHTML;kalimatb.innerHTML = "";
vketik2b=kalimatc.innerHTML;kalimatc.innerHTML = "";
vketik3=kalimatd.innerHTML;kalimatd.innerHTML = "";

var aa=0,vketik1;
fungsi fmketik1(){
wallpaper.style="transformasi: skala(1.5);";
}
function mketik1() {wallpaper.style="transform: scale(1.5);";if(aa<vketik1.length){kalimat.innerHTML += vketik1.charAt(aa);aa++;setTimeout(mketik1,50);} }

var ab=0,vketik1b;
fungsi fmketik2(){
wallpaper.style="transformasi: skala(1);";
fthilang();ftganti=1;setTimeout(ftmuncul,200);
kalimat.innerHTML="";
}
fungsi mketik2() {if(ab<vketik1b.length){kalimata.innerHTML += vketik1b.charAt(ab);ab++;setTimeout(mketik2,50);}}

var ac=0,vketik2;
fungsi fmketik3(){
wallpaper.style="transformasi: skala(1.5);";
fthilang();ftganti=2;setTimeout(ftmuncul,200);
kalimata.innerHTML="";
}
fungsi mketik3() {if(ac<vketik2.length){kalimatb.innerHTML += vketik2.charAt(ac);ac++;setTimeout(mketik3,50);}}

var iklan=0,vketik2b;
fungsi fmketik4(){
wallpaper.style="transformasi: skala(1);";
fthilang();ftganti=3;setTimeout(ftmuncul,200);
kalimatb.innerHTML="";
}
fungsi mketik4() {if(ad<vketik2b.length){kalimatc.innerHTML += vketik2b.charAt(ad);ad++;setTimeout(mketik4,43);}}

var ae=0,vketik3;
fungsi fmketik5(){
wallpaper.style="transformasi: skala(1.5);";
fthilang();ftganti=4;setTimeout(ftmuncul,200);
}
function mketik5() {if(ae<vketik3.length){kalimatd.innerHTML += vketik3.charAt(ae);ae++;setTimeout(mketik5,50);} if(ae==vketik3.length){tombol(); }}

function dilanjut(){wallpaper.style="transform: scale(1.5);";setTimeout(otomatis2,300);fthilang();ftganti=5;setTimeout(ftmuncul,300);Tombol.style="opacity:0; transformasi: skala(.1);";jikatom=1;setTimeout(tombol,1000);}

fungsi otomatis() {befanimkata();setTimeout(animkata,400);}
function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);"; }
function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}

fungsi otomatis2() {
kalimat.innerHTML = kalimat2.innerHTML;kalimat.style="margin-kiri:0;margin-kanan:0";
kalimat.style="";kalimata.innerHTML="";
kalimatb.innerHTML="";kalimatc.innerHTML="";
kalimatd.innerHTML="";
}

fungsi otomatis3() {befanimkata3();setTimeout(animkata3,700);}
function befanimkata3(){kalimat.style="";kalimatb.style="";kalimat.style="opacity:0";kalimatb.style="opacity:0";}
function animkata3() {kalimat.innerHTML = kalimat3.innerHTML + balasan;kalimatb.innerHTML = kalimatb3.innerHTML;kalimat.style="opacity:1;font-size:18px;transition:none";kalimatb.style="opacity: 1;ukuran font:17px;berat font:400;transisi:tidak ada";}

fungsi ftmuncul(){
  if(ftganti==0){fotoakhir.style="display:inline-flex;transition:all .7s ease;opacity:1;transform:scale(1)";}
  if(ftganti==1){fotoakhir.src = fotoakhir1.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  if(ftganti==2){fotoakhir.src = fotoakhir2.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  if(ftganti==3){fotoakhir.src = fotoakhir3.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  if(ftganti==4){fotoakhir.src = fotoakhir4.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  if(ftganti==5){fotoakhir.src = fotoAkhir.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
}
fungsi memulai(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity: 0";setTimeout(mulaikonten,300)}
function fthilang(){fotoakhir.style="display:inline-flex;opacity:.5;transition:all .7s ease;transform:scale(.1)";}
function jjfoto(){fotoakhir.style.animation="rto .8s alternatif tak terbatas";}

function tombol(){Tombol.style="opacity:1;transform: scale(1);margin-top:15px";
                  jika(jikatom==0){ftom=1;}
                  if(jikatom==1){tmbl.innerHTML=tmbl2.innerHTML;ftom=2;}}

function multifungsi(){if(ftom==1){dilanjut();} if(ftom==2){dibalas();} if(ftom==5){menuju();}}

function stakhir(){tmbl.innerHTML="Kirim";Tombol.style="opacity:1;transform: scale(1)";ftom=5;fungsi=0;}

fungsi async dibalas(){
    setInterval(buatHati,200);
    wallpaper.style="transformasi: skala(1)";
    Tombol.style="opacity:0;transform: scale(.1);";
    Content.style = "transisi:semua kemudahan;opacity:1;margin-top:7vh;";
    jawab();
 }