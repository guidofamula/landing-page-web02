// membuat variabel tetap untuk menseleksi query / class pada html
const klikMenu = document.querySelector('.klik-menu input');
const navBar = document.querySelector('.nav-bar ul');

// Memanggil variabel klikMenu untuk melakukan eventing, yaitu efek klik pada navbar yg telah dimanupulasi lewat css
// pada function dibawah ini melakukan swap pada class geser jika terdapat dilakukan klik pada navbar oleh user.
// sehingga menghasilkan animasi dan munculnya navbar vertikal
// script ini hanya berlaku ketika diakses via mobile dibawah 576px
klikMenu.addEventListener('click', function () {
  navBar.classList.toggle('geser');
});

// Media interaksi untuk gallery
const container = document.querySelector('.container-album');
const bigImage = document.querySelector('.jumbotron-img');
const gambarAll = document.querySelectorAll('.thumbnail');

// menggunakan variabel container yg telah melakukan seleksi pada container-album
// ketika dilakukan klik pada gambar class thumbnail
container.addEventListener('click', function (klik) {
  // dengan argumen klik yg tepat pada class thumbnail
  if (klik.target.className == 'thumbnail') {
    // source dari bigImage digantikan sesuai source thumbnail yg di klik user (ganti gambar)
    bigImage.src = klik.target.src;
    // menyesuaikan transisi yg telah dibuat dengan aksi, lalu hapus kembali class tersebut setelah 500ms, agar kembali ke default
    bigImage.classList.add('fade-in-out');
    setTimeout(function () {
      bigImage.classList.remove('fade-in-out');
    }, 500);

    // Setelah itu dilakukan pengecekan kembali, apakah masih terdapat class fade-in-out, melalui variabel gambarAll
    gambarAll.forEach(function (gambar) {
      if (gambar.classList.contains('aktif')) {
        // jika masih terdapat efek fade-in-out, diberikan perintah untk menghapus pada tanda class aktif
        gambar.classList.remove('aktif');
      }
    });

    // user/client dapat melakukan klik gambar kecil ke besar, pada gambar-gambar lainnya, dengan kondisi efek kabut dapat dilakukan bergantian sesuai arah klik pointer.
    klik.target.classList.add('aktif');
  }
});
