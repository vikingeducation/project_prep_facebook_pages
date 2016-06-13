
$(document).ready(function(){
  
  populateSelectAscending("birthday-day", 1, 31);
  populateSelectDescending("birthday-year", 2003, 1901);

  function populateSelectAscending(id, min, max) {
    
      var select, i, option;
      
      select = document.getElementById(id);

      for (i = min; i <= max; i += 1) {
        
          option = document.createElement("option");
        
          option.value = option.text = i;
        
          select.add(option);
      }
  }

    function populateSelectDescending(id, max, min) {
    
      var select, i, option;
      
      select = document.getElementById(id);

      for (i = max; i >= min; i -= 1) {
        
          option = document.createElement("option");
        
          option.value = option.text = i;
        
          select.add(option);
      }
  }
  
 
});
