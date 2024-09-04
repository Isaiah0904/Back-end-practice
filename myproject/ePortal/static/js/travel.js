function showForm() {
  document.getElementById('travelFormContainer').style.left = '0px';
  document.querySelector('.travelForm').style.display = 'none';
}

function hideForm() {
  document.getElementById('travelFormContainer').style.left = '-800px';
  document.querySelector('.travelForm').style.display = 'block';
}

document.getElementById('travelForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const destination = document.getElementById('destination').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const hotel = document.getElementById('hotel').value;

  console.log('Destination:', destination);
  console.log('Check-in Date:', checkin);
  console.log('Check-out Date:', checkout);
  console.log('Hotel:', hotel);

});