let slideIndex = 0;
        function showSlides() {
            let slides = document.getElementsByClassName("slides");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000);
        }
        showSlides();

        function updateCounter() {
            let startDate = new Date("2024-09-08T00:00:00-03:00");
            let today = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}));
            let diffTime = today - startDate;
            let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            let diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("contador").innerHTML = `Estamos juntos há ${diffDays} dias, ${diffHours} horas e ${diffMinutes} minutos! 🤍💍`;
        }

        function updateCounterConheci() {
            let startDateConheci = new Date("2024-04-06T00:00:00-03:00");
            let today = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}));
            let diffTimeConheci = today - startDateConheci;
            let diffDaysConheci = Math.floor(diffTimeConheci / (1000 * 60 * 60 * 24));
            let diffHoursConheci = Math.floor((diffTimeConheci % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let diffMinutesConheci = Math.floor((diffTimeConheci % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("contadorConheci").innerHTML = `Nos conhecemos há ${diffDaysConheci} dias, ${diffHoursConheci} horas e ${diffMinutesConheci} minutos! 🤍`;
        }

        updateCounter();
        updateCounterConheci();
        setInterval(() => {
            updateCounter();
            updateCounterConheci();
        }, 60000);