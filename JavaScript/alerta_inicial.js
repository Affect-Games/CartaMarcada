var video = document.getElementById('video_aviso'); // Recupera o elemento do vídeo
var conteudo = document.getElementById('conteudo'); // Recupera o elemento de conteúdo

// Função que reproduz o vídeo automaticamente
function playVideo() {
  video.play();  // Reproduzir o vídeo
}

// Quando o vídeo terminar, mostramos o conteúdo e escondemos o vídeo
function videoEnded() {
  // Esconder o vídeo
  video.style.display = 'none';
  // Mostrar o conteúdo
  conteudo.style.display = 'block';
}

// Recupera o valor armazenado no sessionStorage
var avisos = sessionStorage.getItem("avisos");

// Verifica se não existe valor ainda
if (avisos === null) {
  avisos = 0; // Inicializa com 0 caso seja a primeira vez
} else {
  avisos = parseInt(avisos); // Converte para número
}

if (avisos === 0) {
  // Reproduz o vídeo assim que a página carregar
  playVideo();

  // Quando o vídeo terminar, chamamos a função videoEnded
  video.onended = videoEnded;

  // Incrementa o valor de avisos e salva no sessionStorage
  avisos++;
  sessionStorage.setItem("avisos", avisos.toString()); // Armazena o valor atualizado
} else {
  // Se o vídeo já foi visto, exibe diretamente o conteúdo
  conteudo.style.display = 'block';
  video.style.display = 'none'; // Esconder o vídeo
}

function mostrar_avisos(){
  Swal.fire({
    icon: 'warning',
    title: '⚠️ Posição Política',
    text: 'A empresa Affect não desenvolveu este jogo para propagar ou influenciar qualquer tipo de propaganda política. Nosso objetivo é fornecer uma experiência de entretenimento que seja cativante e envolvente, sem qualquer viés político implícito.',
    background: '#ffffff',  // Fundo branco
    allowOutsideClick: false,
    customClass: {
        popup: 'custom-swal-popup',
        confirmButton: 'custom-confirm-button'
    },
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#3085d6'
  }).then(() => {
    return Swal.fire({
      icon: 'warning',
      title: '🤖 Ilustrações em IA',
      html: '<p>Todas as ilustrações apresentadas neste jogo foram desenvolvidas exclusivamente por ferramentas de Inteligência Artificial (IA). Não houve intervenção humana direta, garantindo uma representação autêntica do mundo do jogo.</p>',
      background: '#ffffff',  // Fundo branco
      allowOutsideClick: false,
      customClass: {
          popup: 'custom-swal-popup',
          confirmButton: 'custom-confirm-button'
      },
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6'
    });
  }).then(() => {
    return Swal.fire({
      icon: 'warning',
      title: '📜 Inspirado em Fatos Históricos',
      text: 'Este jogo foi inspirado em fatos históricos, mas alguns elementos foram adaptados ou ficcionalizados para fins de narrativa e jogabilidade.',
      background: '#ffffff',  // Fundo branco
      allowOutsideClick: false,
      customClass: {
          popup: 'custom-swal-popup',
          confirmButton: 'custom-confirm-button'
      },
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6',
      footer: '<a href="https://docs.google.com/document/d/1Oyn0MB52KFnw3NEB77z9JUmLfeo6ezQv/edit" target="_blank">Saiba mais sobre o processo criativo</a>',
    });
  });
}
