$(document).ready(function() {
  $('#regForm').submit(function(e) {
    let valid = true;

    $('input, select').each(function() {
      if ($(this).val() === '') {
        alert('Please fill all fields.');
        valid = false;
        return false;
      }
    });

    if (!valid) e.preventDefault();
  });
});
