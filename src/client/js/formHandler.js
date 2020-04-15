function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    var validUrl = require('valid-url');
    Client.checkForName(handleSubmit);

    console.log("::: Form Submitted :::");

    if (validUrl.isUri(formText)) {
      fetch('http://localhost:8080/evaluate', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: formText})
        })
        .then(res => res.json())

          //HTML results
        .then(function(res) {
                  document.getElementById("polarity").innerHTML = JSON.stringify(res.polarity);
                  document.getElementById("pConfidence").innerHTML = JSON.stringify(res.polarity_confidence);

                console.log(res);
                })

    } else{
     document.getElementById('error').innerHTML = "URL not valid."
}
}



export { handleSubmit }
