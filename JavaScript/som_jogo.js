var audio = document.querySelector(".music-sound");
var volumeSlider = document.getElementById("volume-slider");
const imagemSom = document.getElementById('imagem-som');

volumeSlider.addEventListener("input", function () {
    audio.volume = volumeSlider.value;
});

function muteUnmute() {
    console.log('Mutado')
    if (audio.muted) {
        audio.muted = false;
        document.querySelector("button").classList.add("Mudo");
        document.querySelector("button").classList.remove("Desmudo");
        imagemSom.src = '../imgs/Sound.png';
    } else {
        audio.muted = true;
        document.querySelector("button").classList.add("Desmudo");
        document.querySelector("button").classList.remove("Mudo");
        imagemSom.src = '../imgs/NoSound.png';
    }
}

var btn_som = document.querySelector(".Som");
btn_som.addEventListener('click', muteUnmute);

function startCountdown() {
    let countdown = 3;
    
    Swal.fire({
        title: countdown.toString(),
        timer: 3000,
        showConfirmButton: false,
        background: 'transparent',
        customClass: {
            popup: 'swal-popup-countdown'
        },
        backdrop: `
            rgba(0,0,0,1)
        `,
        didOpen: () => {
            const interval = setInterval(() => {
                countdown--;
                Swal.update({
                    title: countdown.toString()
                });

                if (countdown === 0) {
                    clearInterval(interval);
                    Swal.close(); // Fecha o modal ao final do countdown
                }
            }, 1000); // Atualiza o modal a cada segundo
        }
    });
}


startCountdown();


