var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

for (i = new Date().getFullYear(); i > 1900; i--){
    $('#years').append($('<option />').val(i).html(i));
}
    
for (i = 1; i < 13; i++){
    $('#months').append($('<option />').val(i).html(i));
}
 updateNumberOfDays(); 
    
$('#years, #months').on("change", function(){
    updateNumberOfDays(); 
});

function updateNumberOfDays(){
    $('#days').html('');
    month=$('#months').val();
    year=$('#years').val();
    days=daysInMonth(month, year);

    for(i=1; i < days+1 ; i++){
            $('#days').append($('<option />').val(i).html(i));
    }
    $('#message').html(monthNames[month-1]+" in the year "+year+" has <b>"+days+"</b> days");
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}