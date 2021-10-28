(
    function () {
        var contactForm = document.querySelector("#contact-form");
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var method = contactForm.method;
            var url = "google.co";
            var data = new FormData(this);
            fetch(url, {
                method: method,
                body: data,
                credentials: "omit",
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then(
                response => {
                    console.log(response);
                    if (response.ok) {
                        
                    }
                }
            ).catch(
                err => console.log(err)
            )
        });

        var displayError = (thisForm, error) => {
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.error-message').innerHTML = error;
            thisForm.querySelector('.error-message').classList.add('d-block');
        }
    }
)()