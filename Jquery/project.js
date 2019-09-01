var betul = 0;
var salah = 0;

function semak(jawapan, seterusnya) {
    if(jawapan == 'betul') betul++;
    if(jawapan == 'salah') salah++;
    if(seterusnya == '#congrats') {
        $('#jumlahbetul').text(betul);
        $('#jumlahsalah').text(salah);
    }
    $.mobile.navigate(seterusnya);
}