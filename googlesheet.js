
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwrIna4XuTiWBaHi5IPXt2kQHRt6ylDKbnQW1liT2rvEXnm8lbtQpfBYxGefl_IXHk/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector("#msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(Response =>{
        msg.innerHTML = "Message sent successfully! "
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  });