function showSidebar(){
    const open = document.getElementById('closeSidebar');
    open.style.display = 'flex';
}
function closeSidebar(){
    const close = document.getElementById('closeSidebar');
    close.style.display = 'none';
}



// ------------form data------

const scriptURL = 'https://script.google.com/macros/s/AKfycbx_2QARVQhSAiPlN_2oj04iSzGCMv5Fo3aJngMVs32zEX4YEvj8D7s153ApcuCWlFO6/exec'
  const form = document.forms['submit-to-google-sheet'];

  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})

        .then(response =>{
            msg.innerHTML = "Message sent successfully";
            setTimeout(function(){
                msg.innerHTML =""
            },5000)
            form.reset()
        })
    
      .catch(error => console.error('Error!', error.message))
  })