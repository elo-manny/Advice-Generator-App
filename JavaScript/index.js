document.addEventListener("DOMContentLoaded", () => {
    const advice = document.querySelector("#advice");
    const adviceId = document.querySelector("#adviceId");
    const adviceBtn = document.querySelector("#adviceBtn");
    const loadingScreen = document.querySelector("#loadingScreen");
    const adviceURL = `https://api.adviceslip.com/advice`;

    const AGen = {
        init() {
            adviceBtn.addEventListener("click", () => {
                loadingScreen.classList.remove("hidden");
                this.fetchAdvice(adviceURL);
            });
        },

        fetchAdvice(url) {
            fetch(url)
                .then(resp => {
                    if (!resp.ok) throw new Error("Something went wrong!!");
                    return resp.json();
                })
                .then(data => {
                    loadingScreen.classList.add("hidden");
                    advice.innerText = data.slip.advice;
                    adviceId.innerText = `#${data.slip.id}`;
                })
                .catch(error => {
                    loadingScreen.classList.add("hidden");
                    alert(error.message);
                });
        }
    };

    AGen.init();
});

