function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    var validUrl = require('valid-url');

    console.log("::: Form Submitted :::");

    if (validUrl.isUri(formText)) {
      fetch('/evaluate', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: input_url[0].value})
        })
        .then(res => res.json())

          //HTML results
        .then(function(res) {
                  document.getElementById("polarity").innerHTML = JSON.stringify(res.polarity);
                  document.getElementById("subjectivity").innerHTML = JSON.stringify(res.subjectivity);
                  document.getElementById("summarize").innerHTML = JSON.stringify(res.summarize);
                console.log(res);
                })

    } else{
     document.getElementById('error').innerHTML = "URL not valid."
}
}



export { handleSubmit }
