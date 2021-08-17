// Add your code here
function submitData(name, email) {
  const formData = { name, email };
  const submitURL = 'http://localhost:3000/users';
  const submitConfig = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  fetch(submitURL, submitConfig)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const body = document.querySelector('body');
      const h1 = document.createElement('h1');
      h1.textContent = data.id;
      body.appendChild(h1);
    })
    .catch(err => {
      const body = document.querySelector('body');
      body.innerText = err.message;
    })
}