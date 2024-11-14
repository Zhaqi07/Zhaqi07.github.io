const audio = document.querySelector('audio');
const body = document.querySelector('body');
const image = document.getElementById('audioImage');

// Event listener saat audio mulai diputar
audio.addEventListener('play', () => {
    // Menambahkan kelas untuk ubah background menjadi lightblue saat audio diputar
    body.classList.add('play-music');
    // Menghapus kelas 'audio-paused' agar background tidak pink
    body.classList.remove('audio-paused');

    // Ganti gambar saat audio diputar
    image.src = "birthday.jpg";
    // Menambahkan efek pada gambar
    image.classList.add('playing');
});

// Event listener saat audio dijeda
audio.addEventListener('pause', () => {
    // Menambahkan kelas untuk ubah background menjadi pink saat audio dijeda
    body.classList.add('audio-paused');
    // Menghapus kelas 'play-music' agar background tidak lightblue
    body.classList.remove('play-music');

    // Kembalikan gambar saat audio dijeda
    image.src = "ulangtahun.jpg";
    // Hapus efek pada gambar
    image.classList.remove('playing');
});
