import React, { useEffect, useState } from "react";
import axios from "axios";

import LayoutProduct from "../components/Layout/LayoutProduct";
import Contact from "../components/Contact";

const Pp = (props) => {
  const [loading, setLoading] = useState(true);
  const [pp, setPp] = useState({});
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get(`https://moxa-cms.shared.zali.pro/home-banners?_sort=order:asc`)
    .then((res) => {
      console.log('link',res)
      setDownloadLink(res.data[0].button_link)
    })
    .catch((err) => {
      console.log(err);
    });
    axios
      .get(process.env.REACT_APP_API_URL + "/privacy-policy")
      .then((res) => res.data)
      .then((data) => {
        setPp(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <LayoutProduct downloadLink={downloadLink} title="Kebijakan Privasi Aplikasi Moxa">
        <div id="pp">
          <div className="wrapper">
            <h1 className="title">Kebijakan Privasi Aplikasi Moxa</h1>

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
                  dangerouslySetInnerHTML={{ __html: pp.value }}
                ></div>
              </div>
            )}

            {/* <div className="content-container">
              <p>
                Kebijakan Privasi berikut ini menjelaskan bagaimana PT Sedaya Multi Investama
                &ndash; Astra Financial selaku pemilik dan pengelola aplikasi seluler (
                <em>mobile application</em>)<em>moxa</em>
                (&ldquo;
                <strong>Aplikasi</strong>
                &rdquo;) (selanjutnya disebut &ldquo;
                <strong>Perusahaan</strong>
                &rdquo; atau &ldquo;
                <strong>Kami</strong>
                &rdquo;) memperoleh, mengumpulkan, menggunakan, menampilkan, mengumumkan,
                mengungkapkan, memproses, membukakan akses, menyimpan, mengirimkan, memberikan,
                membagikan, mengolah, mengelola, memusnahkan, melindungi, dan/atau melakukan
                kerjasama dengan pihak ketiga penyedia layanan teknologi informasi (secara
                bersama-sama, &ldquo;
                <strong>Pemanfaatan</strong>
                &rdquo;) data pribadi Anda yang meliputi antara lain nama, alamat, nomor kartu
                identitas, nomor telepon, alamat surat elektronik, tanggal lahir, dan informasi lain
                (&ldquo;
                <strong>Data Pribadi</strong>
                &rdquo;) yang Anda berikan ketika Anda menggunakan Aplikasi Kami, serta data-data
                yang terkait dengan transaksi yang Anda lakukan dengan menggunakan Aplikasi (&ldquo;
                <strong>Data Transaksi</strong>
                &rdquo;). Perlu dicatat bahwa Data Pribadi disini tidak termasuk Data Pribadi yang
                telah tersedia di publik.
              </p>
              <p>
                Kebijakan Privasi ini merupakan bagian dari Syarat dan Ketentuan Penggunaan Aplikasi
                (&ldquo;
                <strong>Ketentuan Penggunaan</strong>
                &rdquo;) Kami. Penggunaan Aplikasi dan setiap fitur dan/atau layanan yang tersedia
                dalam Aplikasi merupakan bentuk persetujuan Anda terhadap Ketentuan dan Kebijakan
                Privasi tersebut. Oleh karena itu, mohon Anda membaca Kebijakan Privasi ini dengan
                seksama untuk memastikan bahwa Anda memahami sepenuhnya sebelum mendaftar, mengakses
                dan/atau menggunakan Aplikasi.
              </p>
              <p className="mb-0">
                <strong>MENGENAI INFORMASI PRIBADI PENGGUNA APLIKASI</strong>
              </p>
              <p>
                <strong>Pengumpulan Data Pribadi dan/atau Data Transaksi</strong>
              </p>
              <p>
                Data Pribadi dapat Anda berikan secara langsung pada saat Anda mendaftarkan diri
                dalam Aplikasi Kami maupun pada saat menggunakan Layanan. Data Transaksi diperoleh
                setiap saat Anda menggunakan Layanan yang tersedia dalam Aplikasi.
              </p>
              <p>
                Kami mengumpulkan sebanyak mungkin informasi dari berbagai sumber sesuai dengan
                peraturan perundang-undangan yang berlaku, termasuk Data Pribadi dan/atau Data
                Transaksi yang dikumpulkan oleh Mitra Kami, baik data baru maupun data historis,
                agar Kami dapat selalu memberikan layanan terbaik kepada pengguna Aplikasi dari
                waktu ke waktu. Anda dengan ini setuju dan memberikan wewenang kepada Kami untuk (i)
                melakukan pemanfaatan atas Data Pribadi dan/atau Data Transaksi yang Anda berikan
                kepada Kami maupun Mitra Kami;(ii) mengungkapkan, memberikan, mengirimkan dan
                membagikan Data Pribadi dan/atau Data Transaksi anda kepada Mitra Kami; (iii)
                mengumpulkan informasi lainnya secara tidak langsung meliputi akses ke kamera,
                tanggal saat pembuatan akun, tanggal
                <em>submit</em>
                pengajuan, aktivitas terakhir pada
                <em>Home screen</em>
                dan akses ke GPS. Pemberian Data Pribadi Anda bersifat sukarela, namun jika Anda
                tidak memberikan Data Pribadi Anda kepada Kami dengan benar atau menarik setiap atau
                seluruh informasi yang termasuk ke dalam Data Pribadi, maka Kami mungkin tidak dapat
                memberikan Layanan kepada Anda sebagaimana mestinya.
              </p>
              <p>
                <strong>Penggunaan Data Pribadi dan/atau Data Transaksi</strong>
              </p>
              <ol>
                <li>
                  Anda dengan ini memberikan persetujuan secara tegas kepada Kami untuk melakukan
                  Pemanfaatan Data Pribadi dan/atau Data Transaksi Anda untuk penggunaaan Aplikasi,
                  kegiatan bisnis dan operasional Kami maupun tujuan-tujuan lain sebagai berikut:
                  <ol style={{ listStyleType: "lower-alpha" }} className="pp-nested-ol">
                    <li>Menanggapi pertanyaan, komentar atau keluhan.</li>
                    <li>
                      Berkomunikasi dengan Anda melalui berbagai media seperti notifikasi dalam
                      Aplikasi, surat elektronik, telepon, layanan pesan singkat (SMS), layanan
                      percakapan (<em>chatting</em>) pesan singkat dalam Aplikasi (
                      <em>in-app messaging/ push notifications</em>
                      ), maupun media sosial.
                    </li>
                    <li>
                      Pemasaran dan promosi produk/layanan Kami dan/atau perusahaan Mitra Kami,
                      termasuk pengumuman, materi promosi, ucapan salam, undangan untuk
                      berpartisipasi dan hak-hak istimewa yang berasal dari , sponsor, maupun
                      pemasang iklan.
                    </li>
                    <li>
                      Memproses partisipasi Anda dalam setiap kegiatan produksi, kontes, permainan,
                      promosi, jajak pendapat maupun survei.
                    </li>
                    <li>
                      Memahami dan menganalisa data dan/atau pola penggunaan dan penjualan produk
                      dan layanan terkait kebutuhan dan preferensi.
                    </li>
                    <li>
                      Mengembangkan, meningkatkan dan menyediakan produk dan layanan yang sesuai
                      dengan kebutuhan Anda.
                    </li>
                    <li>Proses administrasi internal seperti audit dan perpajakan.</li>
                    <li>
                      Setiap tujuan lain yang Kami beritahukan kepada Anda pada saat mendapatkan
                      persetujuan Anda.
                    </li>
                    <li>
                      Keperluan lainnya sesuai dengan peraturan perundang-undangan yang berlaku.
                    </li>
                  </ol>
                  <p className="mt-2">
                    (Secara bersama-sama, tujuan-tujuan di atas merupakan &ldquo;
                    <strong>Tujuan</strong>
                    &rdquo;).
                  </p>
                </li>

                <li>
                  Kami dengan ini menjamin bahwa Kami akan menggunakan Data Pribadi Anda hanya
                  sejauh diperlukan sebagaimana disepakati oleh Anda yakni kami hanya memproses Data
                  Pribadi dalam ruang lingkup yang diperlukan untuk mencapai Tujuan seperti yang
                  dijelaskan diatas. Untuk menghindari keraguan, jika Kami berniat menggunakan
                  Informasi Anda untuk tujuan selain Tujuan di atas, Kami akan memastikan untuk
                  mendapatkan persetujuan terpisah dari Anda.
                </li>
                <li>
                  Kami berupaya secara wajar untuk melindungi setiap Data Pribadi dan/atau Data
                  Transaksi Anda. Kami senantiasa berusaha meningkatkan standar perlindungan
                  Aplikasi. Kami tidak akan membuka Data Pribadi Anda kepada Pihak yang tidak
                  memiliki wewenang atas informasi yang Anda berikan. Namun demikian, Kami tidak
                  bertanggung jawab atas setiap kerugian yang timbul akibat rusaknya atau hilangnya
                  Data Pribadi dan/atau Data Transaksi Anda yang terjadi diluar kendali Kami. Oleh
                  karena itu, Kami sangat menyarankan agar Anda menjaga keamanan dan kerahasiaan
                  Akun Aplikasi Anda, termasuk alamat surat elektronik terdaftar, nomor telepon
                  terdaftar, dan kode OTP (<em>One Time Password</em>) yang dihasilkan dan dikirim
                  oleh sistem Kami.
                </li>
              </ol>
              <p>
                <strong>Pemberian dan Pengungkapan Data Pribadi dan/atau Data Transaksi.</strong>
              </p>
              <p>
                Dengan tunduk kepada Tujuan sebagaimana disebutkan di atas, Anda dengan ini
                memberikan persetujuan secara tegas kepada Kami untuk mengungkapkan Data Pribadi
                dan/atau Data Transaksi kepada pihak ketiga dengan ketentuan di bawah ini:
              </p>
              <ul>
                <li>Perusahaan riset dan pemasaran terkait promosi produk/layanan Kami.</li>
                <li>
                  Perusahaan penyedia layanan terkait teknologi informasi (termasuk layanan
                  infrastruktur, komputasi awan (<em>cloud computing</em>
                  ), perangkat lunak, analisa
                  <em>big data</em>
                  dan
                  <em>machine learning</em>, termasuk di dalamnya layanan
                  <em>data cleansing</em>, <em>data insight</em>
                  dan
                  <em>credit scoring</em>
                  ).
                </li>
                <li>
                  Perusahaan penyedia jasa pemrosesan transaksi pembayaran yang meliputi
                  penyelenggara
                  <em>payment gateway</em>, transfer dana, dompet elektronik, uang elektronik dan
                  penyelenggara jasa sistem pembayaran lainnya terkait transaksi yang dilakukan
                  dalam Aplikasi.
                </li>
                <li>
                  Perusahaan penyedia layanan lainnya maupun mitra Kami yang terkait dengan produk
                  dan layanan yang ditawarkan dalam Aplikasi.
                </li>
                <li>
                  Penasihat profesional dan auditor eksternal, termasuk penasihat hukum, penasihat
                  keuangan dan konsultan lainnya.
                </li>
                <li>
                  Otoritas pemerintah, baik di dalam maupun di luar yurisdiksi negara Republik
                  Indonesia sesuai peraturan perundang-undangan yang berlaku atau jika secara hukum
                  Kami harus melakukannya.
                </li>
              </ul>
              <p>Pihak-pihak lainnya sesuai dengan peraturan perundang-undangan yang berlaku.</p>
              <p>
                <strong>Pengelolaan dan Keamanan Data Pribadi dan/atau Data Transaksi</strong>
              </p>
              <p>
                Anda dengan ini memberikan persetujuan secara tegas kepada Kami bahwa Kami dapat
                mengirimkan, menyimpan, menggunakan dan mengolah Data Pribadi dan/atau Data
                Transaksi Anda pada
                <em>server</em>
                yang terletak di pusat data yang ditunjuk oleh Kami. Pusat data tersebut dapat
                dikelola oleh pihak ketiga dan/atau terletak di luar wilayah negara Republik
                Indonesia. Meskipun demikian, Pemanfaatan Data Pribadi dan/atau Data Transaksi Anda
                sehubungan dengan penggunaan Aplikasi akan terus diatur oleh Kebijakan Privasi ini
                sesuai dengan peraturan perundangan-undangan yang berlaku.
              </p>
              <p>
                Kami berusaha untuk memelihara pengamanan fisik, teknis dan prosedural yang sesuai
                untuk melindungi Data Pribadi Anda dari kehilangan, penyalahgunaan, penyalinan,
                kerusakan atau modifikasi dan akses atau pengungkapan yang tidak sah.
              </p>
              <p>
                Kami akan menyimpan Data Pribadi dan/atau Data Transaksi Anda hingga ada permintaan
                khusus untuk menghapus akun Anda. Lebih lanjut, Kami tidak akan bertanggung jawab
                atas pelanggaran keamanan atau tindakan apapun dari pihak ketiga atau peristiwa
                apapun yang berada diluar kendali wajar Kami termasuk tetapi tidak terbatas pada
                tindakan pemerintah, peretasan komputer, akses tidak sah ke data komputer dan
                perangkat penyimpanan, komputer crash, pelanggaran keamanan dan enkripsi, buruknya
                kualitas layanan Internet atau layanan telepon dari Anda, dan lain-lain.
              </p>
              <p>
                <strong>Pembaruan dan Pengubahan Data Pribadi</strong>
              </p>
              <p>
                Anda dapat mengubah Data Pribadi di Profil Anda sewaktu-waktu, memilih untuk tidak
                menerima komunikasi dari Kami dan/atau menarik persetujuan atas Pemanfaatan Data
                Pribadi Anda.
              </p>
              <p>
                Anda setuju bahwa perubahan maupun penarikan persetujuan tersebut dapat mempengaruhi
                akses terhadap Aplikasi dan/atau layanan yang dapat Anda pergunakan atau dapat
                mengakibatkan Kami tidak dapat memberikan Layanan kepada Anda. . Harap perhatikan
                juga bahwa menghapus instalasi Aplikasi tidak akan mengakibatkan penghentian
                penggunaan Layanan oleh Anda atau Pemanfaatan Data Pribadi Anda.
              </p>
              <p>
                <strong>Perjanjian Pengguna dan Perubahan Pada Kebijakan Privasi</strong>
              </p>
              <p>
                Dengan mendaftar, mengakses dan/atau menggunakan Aplikasi, Anda dianggap telah
                membaca, memahami dan memberikan persetujuan secara tegas atas Kebijakan Privasi
                Kami sebagaimana dijelaskan di atas. Anda juga menyatakan dan menjamin bahwa Data
                Pribadi yang Anda berikan kepada Kami adalah benar, lengkap, diperoleh secara sah
                dan Anda memiliki hak sepenuhnya untuk memberikannya kepada Kami.
              </p>
              <p>
                Kami dapat meninjau, memperbarui, atau mengubah Kebijakan Privasi ini sewaktu-waktu
                dengan memunculkan informasi atas perubahan tersebut pada Aplikasi. Akses dan/atau
                penggunaan Aplikasi secara terus-menerus serta tidak adanya pemberitahuan secara
                tertulis kepada Kami mengenai keberatan Anda atas perubahan yang dibuat merupakan
                bentuk penerimaan dan persetujuan Anda atas perubahan Kebijakan Privasi tersebut.
              </p>
              <p>
                Ini adalah tanggung jawab Anda untuk secara berkala meninjau Kebijakan Privasi ini
                dan untuk mengetahui informasi terkini tentang bagaimana ketentuan Kebijakan Privasi
                ini Kami berlakukan. Anda bertanggung jawab untuk senantiasa memahami perubahan yang
                Kami buat dari waktu ke waktu. Kebijakan Privasi mulai berlaku sejak tanggal
                pembaruan, perubahan atau modifikasi tersebut.
              </p>
              <p>
                <strong>Lain &ndash; lain</strong>
              </p>
              <p>
                Kebijakan Privasi ini diatur dan ditafsirkan menurut hukum yang berlaku di negara
                Republik Indonesia dan setiap sengketa yang timbul dari Kebijakan Privasi ini akan
                diselesaikan melalui arbitrase yang diadakan di Jakarta sesuai dengan Peraturan
                Arbitrase yang berlaku di Badan Arbitrase Nasional Indonesia.
              </p>
              <p>
                <strong>Kontak Kami</strong>
              </p>
              <p>
                Anda memiliki hak atas perbaikan dan penghapusan data pribadi Anda termasuk
                informasi lebih lanjut mengenai penggunaan Aplikasi dan transaksi. Apabila Anda
                membutuhkan informasi lebih lanjut maupun terdapat keluhan sehubungan dengan hal
                ini, Anda dapat menghubungi Kami melalui surat elektronik cs@moxa.id.
              </p>
            </div> */}
          </div>
        </div>

        <Contact />
      </LayoutProduct>
    </div>
  );
};

export default Pp;
