$('#regForm').submit(function(e) {
  e.preventDefault();
  const name = $('#fullname').val();
  const email = $('#email').val();
  const gender = $('#gender').val();
  const course = $('#course').val();
  const phone = $('#phone').val();

  $('.container').html(`
    <h2>Registration Successful 🎉</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `);
});

