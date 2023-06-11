$(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_name');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '6282120937187',
    walink2 = 'Form Pemesanan *Meganeura Sablon* ',
    text_yes = 'Terkirim.',
    text_no = 'Isi semua Formulir lalu klik Send.';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_select1 = $("#wa_select :selected").text(),
    // input_select2 = $("#wa_select2 :selected").text(),
    input_name1 = $("#wa_name").val(),
    input_warna1 = $("#wa_warna").val(),
    input_number1 = $("#wa_number1").val(),
    input_number2 = $("#wa_number2").val(),
    input_number3 = $("#wa_number3").val(),
    input_number4 = $("#wa_number4").val(),
    input_number5 = $("#wa_number5").val(),
    input_number6 = $("#wa_number6").val();

    input_pjg1 = $("#wa_pjg1").val(),
    input_pjg2 = $("#wa_pjg2").val(),
    input_pjg3 = $("#wa_pjg3").val(),
    input_pjg4 = $("#wa_pjg4").val(),
    input_pjg5 = $("#wa_pjg5").val(),
    input_pjg6 = $("#wa_pjg6").val();



/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    '*Nama* : ' + input_name1 + '%0A' +
    '*Warna* : ' + input_warna1 + '%0A' +
    '*Combed* : ' + input_select1 + '%0A' +
    // '*Combed* : ' + input_select2 + '%0A' +
    '*=== LENGAN PENDEK ===*'+ '%0A' +
    '*S* : ' + input_number1 + '%0A' +
    '*M* : ' + input_number2 + '%0A' +
    '*L* : ' + input_number3 + '%0A' +
    '*XL* : ' + input_number4 + '%0A' +
    '*XXL* : ' + input_number5 + '%0A' +
    '*XXXL* : ' + input_number6 + '%0A' +

    '*=== LENGAN PANJANG ===*'+ '%0A' +
    '*S* : ' + input_pjg1 + '%0A' +
    '*M* : ' + input_pjg2 + '%0A' +
    '*L* : ' + input_pjg3 + '%0A' +
    '*XL* : ' + input_pjg4 + '%0A' +
    '*XXL* : ' + input_pjg5 + '%0A' +
    '*XXXL* : ' + input_pjg6 + '%0A';



/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});