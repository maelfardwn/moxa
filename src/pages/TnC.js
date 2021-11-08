import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact";
import LayoutProduct from "../components/Layout/LayoutProduct";

const TnC = (props) => {
  const [loading, setLoading] = useState(true);
  const [tnc, setTnc] = useState({});
  const [downloadLink, setDownloadLink] = useState('');
  useEffect(() => {
    setLoading(true);
    
    axios.get(`https://dev.moxa.id/cms/home-banners?_sort=order:asc`)
    .then((res) => {
      setDownloadLink(res.data[0].button_link)
    })
    .catch((err) => {
      console.log(err);
    });

    axios
      .get(process.env.REACT_APP_API_URL + "/term-and-conditions")
      .then((res) => res.data)
      .then((data) => {
        setTnc(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
  
      <LayoutProduct downloadLink={downloadLink} title="Syarat dan Ketentuan Aplikasi Moxa">
        <div id="tnc">
          <div className="wrapper">
            <h1 className="title">Syarat dan Ketentuan Aplikasi Moxa</h1>

            {loading ? (
              <div>
                <center id="testimonial">
                  <i className="fa fa-spinner fa-pulse fa-3x fa-fw my-3"></i>
                  <span className="sr-only">Loading...</span>
                </center>
              </div>
            ) : (
              <div>
                <div
                  className="content-container ck-content"
                  dangerouslySetInnerHTML={{ __html: tnc.value }}
                ></div>
              </div>
            )}

            {/* <div className="content-container">
              <p>
                <strong>PENTING</strong>: Anda diwajibkan untuk membaca Syarat dan Ketentuan
                Penggunaan (&ldquo;
                <strong>Ketentuan Penggunaan</strong>&rdquo;) ini dan Kebijakan Privasi kami
                (&ldquo;<strong>Kebijakan Privasi</strong>&rdquo;) dengan hati-hati dan seksama
                sebelum mengakses aplikasi Moxa (&ldquo;<strong>Aplikasi</strong>&rdquo;) maupun
                menggunakan setiap fitur dan/atau layanan yang tersedia dalam Aplikasi (&ldquo;
                <strong>Layanan</strong>&rdquo;). Anda dapat mengakses fungsi-fungsi (&ldquo;
                <strong>Fitur</strong>&rdquo;) pada Aplikasi dan Anda dapat memilih barang atau jasa
                (&ldquo;<strong>Produk</strong>&rdquo;) yang dilengkapi dengan rincian informasi
                termasuk foto, video, angka, data, desain, penjelasan, manfaat, dan hal-hal yang
                ditampilkan pada Aplikasi (&ldquo;<strong>Konten</strong>&rdquo;).
              </p>
              <p>
                Dengan mengunduh, mengakses dan/atau menggunakan Aplikasi dan Layanan, Anda setuju
                bahwa Anda telah membaca, memahami, mengetahui, menyetujui untuk terikat oleh, dan
                menerima seluruh informasi, syarat, dan ketentuan penggunaan Layanan yang terdapat
                dalam Ketentuan Penggunaan ini dan Kebijakan Privasi kami.
              </p>
              <p>
                Ketentuan Penggunaan ini merupakan suatu perjanjian yang sah dan mengikat antara PT
                Sedaya Multi Investama (&ldquo;<strong>Kami</strong>&rdquo;) sebagai penyedia
                Aplikasi saat ini dan Anda terkait tata cara dan persyaratan penggunaan Aplikasi
                yang berlaku antara Anda dan Kami.
              </p>
              <p>
                Anda dapat menghapus Aplikasi dalam perangkat seluler Anda jika Anda tidak setuju
                terhadap Ketentuan Penggunaan ini. Mohon diperhatikan bahwa penggunaan Aplikasi
                tunduk pada Ketentuan Penggunaan dan Kebijakan Privasi yang Kami keluarkan dan/atau
                perbaharui dari waktu ke waktu. Perubahan terhadap Ketentuan Penggunaan dan
                Kebijakan Privasi akan segera berlaku efektif dan akan diberitahukan kepada anda
                pada saat anda mengakses Aplikasi pertama kalinya setelah perubahan tersebut
                terjadi.
              </p>
              <p>
                <strong>
                  <u>Ketentuan Umum</u>
                </strong>
              </p>
              <ol>
                <li>
                  Aplikasi ini dimiliki dan dikelola oleh PT Sedaya Multi Investama. Kami bekerja
                  sama dengan pihak ketiga (&ldquo;<strong>Kami</strong>&rdquo;) untuk
                  mengembangkan, menambah dan/atau meningkatkan fitur serta fungsi dalam Aplikasi,
                  dan/atau menyediakan produk dan/atau Layanan.
                </li>
                <li>
                  <p>
                    Aplikasi ini merupakan aplikasi perangkat lunak yang berfungsi sebagai sarana
                    untuk menghubungkan Anda dengan Mitra Kami.
                  </p>
                  <p>
                    Aplikasi ini bertujuan untuk memberikan informasi dan melakukan pengajuan atas
                    produk dan/atau jasa yang disediakan oleh Mitra Kami. Informasi yang dimaksud
                    termasuk setiap berita yang relevan serta program promosi yang diberlakukan
                    apabila ada. Kami senantiasa berupaya untuk menjaga kebenaran dan kekinian dari
                    informasi tersebut. Kami tidak membuat pernyataan atau memberikan jaminan
                    apapun, baik tersurat maupun tersirat, mengenai kelengkapan, akurasi, keandalan,
                    kesesuaian, kepuasan, keamanan, kecepatan, ketersediaan fitur, informasi,
                    produk, layanan, gambar, estimasi biaya atau grafis terkait yang terdapat dalam
                    Aplikasi untuk setiap tujuan apapun juga. Gambar, grafis dan/atau foto yang ada
                    dalam Aplikasi mungkin tunduk terhadap suatu hak kekayaan intelektual yang
                    dimiliki oleh pihak ketiga dan Kami tidak menjamin dalam bentuk apapun juga atas
                    hak tersebut.
                  </p>
                </li>
                <li>
                  Dalam penyediaan Layanan ini, Kami dapat bekerja sama dengan Mitra Kami. Semua
                  risiko dan kerugian yang mungkin ditimbulkan oleh kelalaian Mitra Kami (termasuk
                  namun tidak terbatas pada penyelesaian transaksi) adalah di luar wewenang dan
                  tanggung jawab Kami.
                </li>
                <li>
                  Untuk menghindari keragu-raguan, Kami bukan perusahaan jasa keuangan dan tidak
                  memberikan atau menjalankan layanan jasa keuangan. Kami hanya memberikan informasi
                  dan menyediakan metode bagi anda untuk memilih, mendapatkan dan melakukan kontak
                  dengan Mitra Kami sebagai penyedia layanan jasa keuangan.
                </li>
                <li>
                  Layanan jasa keuangan yang dapat Anda temukan dalam Aplikasi adalah pembiayaan
                  otomotif, asuransi, pinjaman, dan juga produk lainnya yang ditawarkan oleh
                  perusahaan jasa keuangan dalam Astra Group melalui Aplikasi.
                </li>
                <li>
                  Pengunduhan dan/atau penggunaan Aplikasi ini bebas biaya. Koneksi pada jaringan
                  internet diperlukan untuk dapat menggunakan Layanan ini. Segala biaya yang timbul
                  atas koneksi perangkat seluler Anda dengan jaringan internet sepenuhnya ditanggung
                  oleh Anda.
                </li>
                <li>
                  Dalam penggunaan Aplikasi ini, Anda dapat memiliki pilihan dan kesempatan untuk
                  tersambung, terakses, atau terhubung dengan tautan{" "}
                  <strong>
                    <em>Uniform Resource Locator</em>
                  </strong>
                  (&ldquo;<strong>URL</strong>&rdquo;) pihak ketiga dan/atau afiliasi Kami dan/atau
                  Mitra Kami yang tidak dimiliki atau dikendalikan Kami. Kami tidak memiliki kontrol
                  atas sifat, isi dan ketersediaan dari URL tersebut. Ketersediaan setiap URL dalam
                  Aplikasi ini tidak menyiratkan bahwa Kami merekomendasikan URL tersebut atau
                  mendukung dan/atau menyetujui pandangan yang diungkapkan dan/atau dinyatakan dalam
                  URL pihak ketiga dan/atau afiliasi Kami dan/atau Mitra Kami. Ketika Anda mengakses
                  dan terhubung dengan setiap URL pihak ketiga, dan/atau afiliasi Kami dan/atau
                  Mitra Kami, Anda menerima bahwa ada risiko dalam melakukannya, dan bahwa Kami
                  tidak bertanggung jawab atas risiko tersebut. Kami mendorong Anda untuk membaca
                  syarat dan ketentuan dan kebijakan privasi masing-masing yang terdapat dalam
                  setiap URL pihak ketiga, dan/atau afiliasi Kami dan/atau Mitra Kami yang Anda
                  manfaatkan.
                </li>
                <li>
                  Kami memiliki kebijakan sendiri dan menyeluruh untuk menerima atau menunda atau
                  menolak permintaan Anda atas Layanan. Kami dapat memilih, mengaktifkan, mengakhiri
                  atau menangguhkan Layanan, atau bagian daripadanya kapan saja tanpa pemberitahuan.
                </li>
                <li>
                  Dalam hal terjadi ketidaksesuaian antara versi bahasa Indonesia dan bahasa lainnya
                  dari Ketentuan Penggunaan atau Kebijakan Privasi, versi bahasa Indonesia yang akan
                  berlaku.
                </li>
              </ol>
              <p>
                <strong>
                  <u>Ketentuan Penggunaan Aplikasi</u>
                </strong>
              </p>
              <ol>
                <li>
                  Anda menyatakan dan menjamin bahwa Anda adalah individu yang secara hukum berhak
                  dan cakap serta memiliki kapasitas untuk mengadakan dan mengikatkan diri dalam
                  perjanjian berdasarkan hukum Negara Republik Indonesia, khususnya Ketentuan
                  Penggunaan untuk menggunakan Aplikasi ini. Apabila ketentuan tersebut tidak
                  terpenuhi, Kami atau afiliasi Kami atau Mitra Kami, berhak berdasarkan hukum untuk
                  membatalkan setiap perjanjian yang dibuat dengan Anda. Anda selanjutnya menyatakan
                  dan menjamin bahwa Anda memiliki hak, wewenang dan kapasitas untuk menggunakan
                  Layanan dan mematuhi Ketentuan Penggunaan. Jika Anda mendaftarkan untuk dan atas
                  nama suatu institusi, Anda juga menyatakan dan menjamin bahwa Anda berwenang untuk
                  bertindak untuk dan atas nama institusi tersebut dalam mengadakan serta
                  mengikatkan institusi tersebut pada Ketentuan Penggunaan ini dan mendaftarkan
                  institusi tersebut untuk penggunaan Layanan.
                </li>
                <li>
                  Anda akan diminta untuk membuat akun pengguna Aplikasi (&ldquo;
                  <strong>Akun Aplikasi</strong>&rdquo;) dengan memasukan nama, tanggal lahir, dan
                  memilih tujuan keuangan Anda pada Aplikasi untuk memanfaatkan Aplikasi dan
                  Layanan. Untuk dapat melakukan pengajuan atas produk dan/atau jasa yang terdapat
                  pada Aplikasi, Kami mengumpulkan dan memproses informasi dan data pribadi Anda
                  termasuk namun tidak terbatas pada nama, alamat, alamat surat elektronik, nomor
                  telepon, nomor KTP, nomor NPWP, jenis kelamin, tempat lahir, tanggal lahir, status
                  perkawinan, berat badan, tinggi badan, pekerjaan, status pekerjaan, nama
                  perusahaan, posisi, divisi, lama bekerja, nomor telepon kantor, foto diri, foto
                  KTP, foto NPWP, foto Kartu Keluarga, foto BPKB, foto STNK, foto kendaraan dan data
                  kontak darurat (nama dan nomor telepon) dan/atau data-data lain yang diperlukan
                  oleh Kami (“Data Pribadi”). Anda wajib untuk memastikan dan memberikan informasi
                  yang benar, terkini, akurat dan lengkap setiap saat serta memperbaharui informasi
                  tersebut (jika ada perubahan) dari waktu ke waktu tanpa penundaan dan setuju untuk
                  memberikan kepada Kami bukti identitas apapun yang secara wajar Kami minta agar
                  Kami dapat menyediakan Layanan secara lengkap dan maksimal kepada Anda.
                </li>
                <li>
                  Setiap informasi terkait data pribadi yang Anda berikan kepada Kami akan menjadi
                  milik kami dan Anda dianggap telah menyetujui bahwa data pribadi milik Anda dapat
                  dipergunakan oleh perusahaan di dalam Astra Group dan juga [pihak ketiga] tanpa
                  memerlukan persetujuan tertulis dari Anda.
                </li>
                <li>Hanya satu Akun Aplikasi yang dapat dibuat per pengguna.</li>
                <li>
                  Anda bertanggung jawab penuh atas keamanan dan kerahasiaan Akun Aplikasi Anda,
                  termasuk nama pengguna, alamat surat elektronik terdaftar, kata sandi, nomor
                  telepon terdaftar, dan kode OTP (<em>One time Password</em>) yang dihasilkan dan
                  dikirim oleh sistem Kami. Anda dilarang untuk memberitahukan kode OTP yang masuk
                  ke nomor telepon Anda kepada siapa pun. Anda berjanji untuk tidak menyerahkan,
                  mengalihkan maupun memberikan wewenang kepada orang lain untuk menggunakan
                  identitas anda atau menggunakan akun Anda. Semua kerugian dan risiko yang
                  ditimbulkan akibat kelalaian Anda dalam menjaga keamanan dan kerahasiaan akan
                  ditanggung oleh Anda sendiri. Dalam hal demikian, Kami akan menganggap setiap
                  penggunaan Layanan atau pengajuan produk dan/atau jasa yang dilakukan melalui Akun
                  Aplikasi Anda sebagai permintaan yang sah dari Anda. Segera beritahukan Kami jika
                  Anda mengetahui atau menduga bahwa Akun Anda telah digunakan tanpa sepengetahuan
                  dan persetujuan Anda. Kami akan melakukan tindakan yang Kami anggap perlu dan
                  dapat Kami lakukan terhadap penggunaan tanpa persetujuan tersebut.
                </li>
                <li>
                  Kami tidak bertanggung jawab atas akses tidak sah ke Akun Aplikasi dan jika akses
                  tidak sah menyebabkan pelanggaran terhadap salah satu Ketentuan Pengguna ini. Anda
                  sebagai pemilik Akun Aplikasi akan bertanggung jawab atas setiap penggunaan Akun
                  Aplikasi Anda meskipun jika Akun Aplikasi tersebut telah disalahgunakan oleh pihak
                  lain.
                </li>
                <li>
                  Ulasan publik maupun konten yang diunggah oleh pengguna Aplikasi maupun dari Mitra
                  Kami, bersifat umum dan merupakan konten buatan pengguna (
                  <em>“User Generated Content”</em>). Anda dilarang untuk mengunggah, menampilkan,
                  membagikan komentar (konten; foto) yang (i) merupakan milik orang lain yang tidak
                  berhak Anda miliki; (ii) mengandung unsur suku, agama, ras dan antargolongan
                  (&ldquo;<strong>SARA</strong>&rdquo;), pornografi, (iii) melanggar peraturan
                  perundang-undangan yang berlaku, Ketentuan Penggunaan, Kebijakan Privasi
                  (sebagaimana diubah atau diberlakukan kembali dari waktu ke waktu; dan (iv)
                  mengandung pelanggaran hak kekayaan intelektual pihak ketiga manapun. Kami berhak
                  untuk melakukan penghapusan atau pemblokiran atas hasil unggahan Anda apabila
                  unggahan tersebut melanggar Ketentuan Penggunaan ini.
                </li>
                <li>
                  Fitur dari Aplikasi ini juga memungkinkan Anda untuk bisa membagikan konten dalam
                  Aplikasi dan menghubungkannya dengan media, situs, aplikasi lainnya namun tidak
                  terbatas pada Whatsapp, Facebook, Instagram, dan aplikasi-aplikasi lainnya. Anda
                  dengan ini bertanggung jawab penuh atas komentar yang Anda berikan atas konten
                  maupun Layanan dari Aplikasi ini dengan cara apapun. Apabila anda mengunggah
                  informasi, foto, konten, penilaian, komentar dalam Aplikasi Kami, Kami berhak
                  untuk melakukan penghapusan atau pemblokiran atas hasil unggahan Anda apabila
                  unggahan tersebut melanggar Ketentuan Penggunaan.
                </li>
                <li>
                  Anda tidak diperkenankan untuk membahayakan, menyalahgunakan, mengubah atau
                  memodifikasi Aplikasi dengan cara apapun. Kami berhak untuk menghentikan
                  penggunaan atas akun Aplikasi anda lebih lanjut jika Anda menggunakan Aplikasi
                  tanpa mematuhi Ketentuan Penggunaan.
                </li>
                <li>
                  Anda hanya diizinkan untuk menggunakan Aplikasi ini untuk mempergunakan Layanan
                  yang disediakan dalam Aplikasi ini dan keperluan lain sesuai peraturan
                  perundang-undangan yang berlaku. Untuk lebih tegasnya, Anda dilarang menggunakan
                  Aplikasi ini untuk melakukan penipuan dalam bentuk apapun dan/atau membuat
                  ketidaknyamanan terhadap pihak lain maupun pihak yang menyediakan Layanan,
                  menyalahgunakan segala informasi yang Anda peroleh dari penggunaan Layanan, serta
                  melakukan tindakan apapun yang melecehkan atau mengancam pihak yang menyediakan
                  Layanan, dan untuk hal-hal lain yang dilarang oleh hukum dan peraturan
                  perundang-undangan yang berlaku. Jika Kami mencurigai adanya kegiatan penipuan
                  melalui Akun Aplikasi Anda, Kami berhak untuk menghapus atau menangguhkan Akun
                  Anda sampai masalah tersebut terselesaikan.
                </li>
                <li>
                  Informasi yang diberikan oleh Kami dan/atau Mitra Kami tidak dapat diartikan
                  sebagai suatu penawaran mengikat atau saran. Keputusan untuk menggunakan Layanan
                  sepenuhnya berada dalam kekuasaan Anda. Setiap hal yang Anda putuskan dan/atau
                  lakukan atas dasar kebergantungan pada informasi dalam Aplikasi ini merupakan
                  risiko yang ditanggung oleh Anda sendiri sepenuhnya.
                </li>
                <li>
                  Anda memahami dan setuju bahwa penggunaan Aplikasi oleh Anda tunduk pula pada
                  Kebijakan Privasi Kami sebagaimana dapat diubah dari waktu ke waktu. Dengan
                  menggunakan Aplikasi, Anda dianggap memberikan persetujuan sebagaimana diatur
                  dalam Kebijakan Privasi Kami. Informasi tambahan wajib Anda berikan untuk dapat
                  mempergunakan Layanan dan pengajuan Produk tertentu dalam Aplikasi. Hal-hal
                  terkait data pribadi akan diatur lebih lanjut dalam Kebijakan Privasi.
                </li>
                <li>
                  Ketentuan Penggunaan ini dapat Kami ubah sewaktu-waktu. Dengan tetap mengakses
                  Aplikasi dan Layanan Kami, maka Anda dianggap telah menyetujui perubahan-perubahan
                  dalam Ketentuan Penggunaan ini.
                </li>
              </ol>
              <p>
                <strong>
                  <u>Ketentuan Penggunaan Layanan dan Pengajuan Produk</u>
                </strong>
              </p>
              <ol>
                <li>
                  Produk, layanan dan harga yang ditampilkan dalam Aplikasi merupakan informasi
                  umum. Setiap pengajuan atas produk dan/atau jasa yang terdapat di Aplikasi bukan
                  merupakan transaksi dengan Kami. Transaksi tersebutmerupakan transaksiantara Anda
                  dan Mitra Kami. Kami hanya memberikan Layanan, persetujuan terhadap transaksi
                  semata-mata merupakan kewenangan Mitra Kami.
                </li>
                <li>
                  Nilai dan besaran termasuk perhitungan bunga dan biaya lain-lain yang ditampilkan
                  pada fitur simulasi kredit merupakan estimasi perhitungan dari Mitra Kami yang
                  dapat berubah dari waktu ke waktu. Harga produk dan/atau layanan yang ditampilkan
                  dalam Aplikasi dapat berbeda dari harga akhir yang ditetapkan oleh Mitra Kami
                  ketika Anda melakukan transaksi.
                </li>
                <li>
                  Syarat dan ketentuan khusus dapat berlaku terhadap produk dan/atau layanan yang
                  Kami tawarkan dari waktu ke waktu, dan Anda harus membaca dan memahami syarat dan
                  ketentuan tersebut dengan hati-hati dan seksama.
                </li>
                <li>
                  Setiap penyediaan Layanan akan dilakukan sesuai dengan prosedur yang dijalankan
                  oleh Kami atau Mitra Kami. Dalam hal ini, Anda dapat diminta untuk memberikan Data
                  Pribadi dan/atau informasi yang lebih lengkap guna memproses pengajuan Anda atas
                  Layanan.
                </li>
                <li>
                  Melalui Aplikasi Kami, Anda dapat mengunggah dokumen-dokumen dan persyaratan yang
                  dibutuhkan untuk proses pengajuan produk yang Anda pilih.
                </li>
              </ol>
              <p>
                <strong>
                  <u>Syarat &amp; Ketentuan Penggunaan Lainnya</u>
                </strong>
              </p>
              <ol>
                <li>
                  Setiap konten, produk dan layanan yang dipublikasikan dalam Aplikasi mungkin
                  berbeda dengan keadaan aslinya baik bentuk, jumlah, ketersediaan, waktu, tempat,
                  maupun spesifikasi. Setelah melakukan pengajuan, maka Anda akan dihubungi oleh
                  Mitra Kami untuk mengkonfirmasi pengajuan yang telah Anda lakukan dan melanjutkan
                  proses pengajuan Anda.
                </li>
                <li>
                  Kami tidak terlibat dalam pembuatan maupun publikasi konten tersebut dan konten
                  tersebut sepenuhnya menjadi tanggung jawab pengguna yang membuat dan
                  mengunggahnya. Konten bisa jadi memiliki hak cipta dan hak kekayaan intelektual
                  lainnya dan dalam hal terjadi pelanggaran hak kekayaan intelektual maupun
                  penggunaan unsur terlarang dalam konten, Anda maupun pemilik hak kekayaan
                  intelektual atas konten tersebut dipersilakan untuk menghubungi Kami, agar konten
                  tersebut dapat segera dihapus.
                </li>
                <li>
                  Ketentuan Penggunaan ini diatur dan ditafsirkan menurut hukum yang berlaku di
                  negara Republik Indonesia dan setiap sengketa yang timbul dari Ketentuan
                  Penggunaan ini akan diselesaikan melalui arbitrase yang diadakan di Jakarta sesuai
                  dengan Peraturan Arbitrase yang berlaku di Badan Arbitrase Nasional Indonesia.
                </li>
              </ol>
              <p>
                <strong>
                  <u>Jaminan dan Tanggung Jawab</u>
                </strong>
              </p>
              <ol>
                <li>
                  Kami senantiasa melakukan upaya terbaik untuk menjaga agar Aplikasi ini berfungsi
                  dan berjalan lancar. Namun demikian, Kami tidak bertanggung jawab dan tidak akan
                  bertanggung jawab atas tidak berfungsi atau tersedianya Aplikasi dan/atau Layanan
                  yang ditimbulkan oleh kegiatan pemeliharaan atau masalah teknis yang berada di
                  luar kendali Kami. Anda dengan ini mengakui bahwa Layanan mungkin tidak tersedia
                  setiap saat.
                </li>
                <li>
                  Kami, setiap pemegang saham Kami dan setiap anak perusahaan, perusahaan afiliasi
                  Kami serta Mitra Kami tidak bertanggung jawab atas setiap kerugian atau kerusakan
                  termasuk namun tidak terbatas, kerugian atau kerusakan tidak langsung atau
                  konsekuensial, atau setiap kerugian atau kerusakan apapun yang timbul akibat
                  hilangnya data termasuk namun tidak terbatas pada Data Pribadi Anda akibat
                  penggunaan Aplikasi.
                </li>
                <li>
                  Anda setuju dan mengetahui bahwa Aplikasi ini disediakan “sebagaimana adanya”
                  tanpa jaminan dalam bentuk apapun dan Anda mengakui dan menyetujui bahwa seluruh
                  risiko yang ditimbulkan dari penggunaan Aplikasi dan/atau Layanan oleh Anda
                  sepenuhnya ada pada Anda dan Anda tidak memiliki hak untuk meminta ganti rugi
                  apapun dari Kami, setiap pemegang saham Kami ataupun Perusahaan Grup Astra. Kami
                  secara khusus tidak memberikan pernyataan dan jaminan apapun bahwa:
                  <ol className="nested-ol">
                    <li seq="3.1.">
                      Aplikasi dan/atau Layanan akan selalu tersedia setiap waktu. Kami tidak akan
                      bertanggung jawab kepada Anda untuk gangguan atau keterlambatan akses ke
                      Aplikasi atau Layanan yang tersedia, terlepas dari penyebabnya.
                    </li>
                    <li>
                      Aplikasi ini akan bebas dari kesalahan dan/atau kecacatan termasuk saat
                      beroperasi dengan kombinasi dengan perangkat keras, perangkat lunak, sistem
                      atau data lainnya serta kesalahan dan/atau kecacatan dalam Aplikasi akan
                      diperbaiki.
                    </li>
                    <li>Setiap data yang tersimpan akan akurat dan/atau bisa diandalkan.</li>
                    <li>
                      Ketersediaan dan kehandalan Aplikasi maupun server-server pendukung yang
                      menyediakan Aplikasi terbebas dari virus, trojan, malware dan/atau komponen
                      berbahaya lain.
                    </li>
                    <li>
                      Keamanan, ketepatan waktu, kualitas, kesesuaian, ketersediaan, akurasi dan
                      kelengkapan dari layanan, portal dan/atau Aplikasi.
                    </li>
                    <li>Layanan dalam Aplikasi akan sesuai dengan harapan dan kebutuhan Anda.</li>
                    <li>
                      Kualitas produk, layanan dan informasi yang tersedia akan memenuhi harapan dan
                      kebutuhan Anda.
                    </li>
                  </ol>
                </li>
                <li>
                  Kami juga tidak memberikan jaminan apapun dan tidak bertanggung jawab atas setiap
                  informasi, berita, produk dan layanan yang disediakan oleh Mitra Kami.
                </li>
                <li>
                  Kami tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh interaksi
                  antara Anda dengan Mitra Kami melalui Aplikasi. Hal ini termasuk, namun tidak
                  terbatas pada, pembayaran dan pengiriman barang dan jasa, serta syarat, kondisi,
                  jaminan atau pernyataan lain. Kami juga tidak bertanggung jawab atas kesalahan,
                  termasuk pelanggaran maupun tindakan kriminal yang dilakukan oleh Mitra Kami
                  maupun Anda sebagai pengguna Layanan selama penggunaan Aplikasi. Mitra Kami bukan
                  pegawai, agen maupun perwakilan Kami. Anda secara tegas mengesampingkan dan
                  melepaskan Kami dari setiap dan semua pertanggungjawaban, tuntutan, kerugian atau
                  kerusakan yang timbul dari atau dengan cara apapun sehubungan dengan Mitra Kami.
                  Kami tidak akan menjadi pihak dalam sengketa, negosiasi sengketa antara Anda dan
                  Mitra Kami. Tanggung jawab atas keputusan penggunaan Layanan sepenuhnya ada di
                  tangan Anda.
                </li>
                <li>
                  Garansi/jaminan atas beberapa produk dan layanan yang tersedia dan/atau disediakan
                  oleh Mitra Kami diatur terpisah sesuai dengan kontrak/perjanjian Anda dengan Mitra
                  Kami.
                </li>
                <li>
                  Anda membebaskan Kami dan Kami tidak bertanggung jawab atas fasilitas yang
                  dipergunakan oleh Anda yang mungkin diperoleh dengan melanggar peraturan
                  perundang-undangan yang berlaku.
                </li>
                <li>
                  Kami dengan tegas menyatakan bahwa Kami tidak menjamin atau memberi garansi
                  sehubungan dengan berhasil atau tidaknya suatu pengajuan atau kesiapan dari produk
                  yang disediakan oleh Mitra Kami.
                </li>
              </ol>
              <p>
                <strong>
                  <u>Kekayaan Intelektual</u>
                </strong>
              </p>
              <ol>
                <li>
                  Moxa, yang merupakan nama Aplikasi dan logo, dilindungi oleh hak cipta dan hak
                  lainnya yang disediakan berdasarkan hukum negara Republik Indonesia, termasuk
                  dalam hal ini adalah kepemilikan hak kekayaan intelektual atas seluruh kode sumber
                  (<em>source code</em>) Aplikasi dan hak kekayaan intelektual terkait Aplikasi,
                  kecuali seluruh kekayaan intelektual atas API dan/atau logo dan/atau merek
                  dan/atau fitur dan/atau layanan yang dimiliki kekayaan intelektualnya oleh Mitra
                  Kami. Untuk itu, Anda dilarang untuk melakukan pelanggaran atas hak kekayaan
                  intelektual Kami dan Mitra Kami terkait Aplikasi ini, termasuk melakukan
                  modifikasi, karya turunan, mengadaptasi, menduplikasi, menyalin, membuat ulang,
                  meretas, menjual, dan/atau mengeksploitasi Aplikasi ini termasuk penggunaan
                  Aplikasi atas akses yang tidak sah, meluncurkan program otomatis atau{" "}
                  <em>script</em>, termasuk, namun tidak terbatas pada
                  <em>
                    binary patching, static code modification, bypass check sum mechanism, reverse
                    engineering application code, binary attacks, SQL lite injection, XML injection
                  </em>
                  atau segala program apapun yang mungkin membuat beberapa permintaan{" "}
                  <em>server</em> per detik, atau menciptakan beban berat atau menghambat operasi
                  dan/atau kinerja Aplikasi, mengekstrak data dari Aplikasi, menggunakan{" "}
                  <em>robot, spider,</em> pencarian situs/aplikasi pengambilan kembali, atau
                  perangkat manual atau otomatis lainnya atau proses untuk mengambil, indeks,
                  “tambang data” (<em>data mine</em>), atau dengan cara apapun memperbanyak atau
                  menghindari struktur navigasi atau presentasi dari Aplikasi atau isinya.
                </li>
                <li>
                  Anda hanya diperbolehkan untuk menggunakan Aplikasi semata-mata untuk kebutuhan
                  pribadi Anda, secara non-komersial, non-eksklusif, tidak dapat dipindahtangankan,
                  tidak dapat dialihkan dan tidak dapat disublisensikan.
                </li>
                <li>
                  Seluruh Ketentuan Penggunaan ini termasuk Kebijakan Privasi diatur dan tunduk pada
                  hukum negara Republik Indonesia. Kami memiliki hak sepenuhnya atas setiap
                  pelanggaran yang Anda lakukan terhadap Ketentuan Penggunaan dan hak kekayaan
                  intelektual milik Kami
                </li>
              </ol>
              <p>
                <strong>Kerahasiaan </strong>
              </p>
              <ol>
                <li>
                  Anda harus merahasiakan semua informasi dan data yang terkait dengan Kami,
                  Layanan, produk-produk, urusan-urusan bisnis, rencana-rencana pemasaran dan
                  promosinya dan operasi-operasi lainnya dan perusahaan-perusahaan terkaitnya yang
                  diungkapkan kepada anda oleh atau atas nama Kami (baik secara lisan maupun secara
                  tertulis dan baik sebelum, pada maupun sesudah tanggal Ketentuan Penggunaan ini)
                  atau yang secara langsung atau tidak langsung anda peroleh dari Kami, atau
                  perusahaan afiliasi Kami yang mana pun, atau yang tercipta selama penggunaan
                  Layanan ini. Anda lebih lanjut harus memastikan bahwa anda hanya menggunakan
                  informasi rahasia tersebut untuk melaksanakan Layanan, dan tidak boleh tanpa izin
                  tertulis sebelumnya dari Kami, mengungkapkan informasi tersebut kepada pihak
                  ketiga mana pun atau menggunakannya untuk tujuan lain apa pun.
                </li>
              </ol>
              <ol start="2">
                <li>
                  Kewajiban-kewajiban kerahasiaan tersebut di atas tidak berlaku apabila anda dapat
                  membuktikan bahwa informasi yang bersangkutan:
                  <ul className="nested-ul">
                    <li>pada waktu penerimaan sudah dimiliki oleh anda selaku penerima;</li>
                    <li>
                      diketahui publik, atau menjadi diketahui publik di masa mendatang tanpa
                      melalui kesalahan atau kelalaian anda sebagai penerima;
                    </li>
                    <li>diterima dari pihak ketiga yang berhak mengungkapkannya; atau</li>
                    <li>diwajibkan untuk diungkapkan oleh hukum.</li>
                  </ul>
                </li>
              </ol>

              <p>
                <strong>
                  <u>Pengalihan</u>
                </strong>
              </p>
              <ol>
                <li>
                  Anda memberikan persetujuan kepada Kami untuk mengalihkan Aplikasi ini kepada
                  pihak lain tanpa memerlukan persetujuan atau pemberitahuan tertulis terlebih
                  dahulu dari Anda dan dengan demikian hak dan kewajiban Kami beralih kepada pihak
                  lain tersebut.
                </li>
              </ol>

              <p>
                <strong>
                  <u>Pengakhiran</u>
                </strong>
              </p>
              <ol>
                <li>
                  Kami berhak untuk segera menangguhkan, membatasi atau menghentikan Akun Aplikasi
                  dan Layanan jika Kami memiliki alasan untuk mencurigai bahwa Anda telah melanggar
                  ketentuan dari Ketentuan Penggunaan dan/atau peraturan perundang-undangan yang
                  berlaku.
                </li>
              </ol>
              <p>
                <strong>Kontak Kami</strong>
              </p>
              <ol>
                <li>
                  Jika ada pertanyaan Anda bisa membaca dan mengacu pada{" "}
                  <em>Frequently Asked Questions</em> (FAQ) yang telah Kami siapkan untuk menjawab
                  pertanyaan-pertanyaan yang bersifat umum.
                </li>
                <li>
                  Anda dapat menghubungi Kami terkait dengan Kebijakan Privasi dan Ketentuan
                  Penggunaan melalui surat elektronik cs@moxa.id.
                </li>
              </ol>
            </div> */}
          </div>
        </div>

        <Contact />
      </LayoutProduct>
  );
};

export default TnC;
