import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Accordion,
  Button,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";

import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact";
import LayoutProduct from "../components/Layout/LayoutProduct";

const Faq = (props) => {
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState({
    umum: [],
    akun: [],
    aplikasi: [],
  });
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + `/home-banners?_sort=order:asc`)
  
  .then((res) => {
    setDownloadLink(res.data[0].button_link)
  })
  .catch((err) => {
    console.log(err);
  });
    axios
      .get(process.env.REACT_APP_API_URL + "/faqs")
      .then((res) => res.data)
      .then((data) => {
        const umum = data.filter((v) => v.about === "Umum");
        const akun = data.filter((v) => v.about === "Akun");
        const aplikasi = data.filter((v) => v.about === "Proses_Pengajuan_Aplikasi");

        setFaqs((state) => {
          return {
            ...state,
            umum,
            akun,
            aplikasi,
          };
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <LayoutProduct downloadLink={downloadLink} title="FAQ">
        <div id="faq">
          <div className="wrapper">
            <h1 className="title">Punya Pertanyaan Lebih Banyak?</h1>
            <h1 className="title">Temukan Disini</h1>

            {/* <Row className="mt-3">
              <Col md={8} className="m-auto">
                <div className="faq-search">
                  <input type="text" placeholder="Ketik disini..." />
                  <img src={require("../assets/img/search-btn.png")} alt="search-btn" />
                </div>
              </Col>
            </Row> */}

            <Row className="mt-3">
              <Col md={8} className="m-auto">
                <Accordion>
                  <h5 className="my-3 text-center">Umum</h5>

                  <Card>
                    <Card.Header>
                      <span>Apa itu Moxa?</span>
                      <ContextAwareToggle eventKey="0"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Moxa adalah sebuah aplikasi milik Astra Financial yang dapat membantu
                        pengguna untuk berbagai macam keperluan keuangan. Aplikasi ini merupakan
                        sebuah wadah/tempat di mana kami mengakomodir perusahaan-perusahaan di bawah
                        naungan Astra Financial untuk memungkinkan Anda mencari layanan dan produk
                        keuangan yang sesuai dengan kebutuhan Anda mulai dari: pembiayaan termasuk
                        roda empat, roda dua, Umroh, Haji, gadget, dana tunai, dan asuransi baik
                        jiwa, kecelakaan, dan mobil.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>Bagaimana cara menggunakan Moxa?</span>
                      <ContextAwareToggle eventKey="1"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <ol>
                          <li>Unduh aplikasi Moxa melalui app store maupun playstore.</li>
                          <li>
                            Setelah itu Anda akan disambut dengan 2 halaman pengenalan.
                            <div className="row">
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-menggunakan-moxa-1-min.png")}
                                  alt="cara-menggunakan-moxa-1"
                                />
                              </div>
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-menggunakan-moxa-2-min.png")}
                                  alt="cara-menggunakan-moxa-2"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Masukkan nama
                            <div className="row">
                              <div className="col-6 m-auto">
                                <img
                                  src={require("../assets/img/faq/cara-menggunakan-moxa-3-min.png")}
                                  alt="cara-menggunakan-moxa-3"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Masukkan tanggal lahir
                            <div className="row">
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-menggunakan-moxa-4-min.png")}
                                  alt="cara-menggunakan-moxa-4"
                                />
                              </div>
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-menggunakan-moxa-5-min.png")}
                                  alt="cara-menggunakan-moxa-5"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Pilih Tujuan
                            <div className="row">
                              <div className="col-6 m-auto">
                                <img
                                  src={require("../assets/img/faq/cara-menggunakan-moxa-6-min.png")}
                                  alt="cara-menggunakan-moxa-6"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Setelah itu Anda dapat mengakses halaman utama dan fitur-fitur yang
                            tersedia pada Aplikasi Moxa.
                            <div className="row">
                              <div className="col-6 m-auto">
                                <img
                                  src={require("../assets/img/faq/cara-menggunakan-moxa-7-min.png")}
                                  alt="cara-menggunakan-moxa-7"
                                />
                              </div>
                            </div>
                          </li>
                        </ol>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Apa perbedaan Moxa dengan pihak ketiga seperti perusahaan pembiayaan
                        multiguna atau perusahaan asuransi?
                      </span>
                      <ContextAwareToggle eventKey="2"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Moxa merupakan aplikasi yang mempermudah Anda untuk mengakses layanan dan
                        produk keuangan dari perusahaan-perusahaan di bawah naungan Astra Financial
                        dan bukan sebagai penyedia layanan dan produk keuangan bagi Anda.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Pihak ketiga apa saja yang bekerja sama dan terdapat pada Aplikasi Moxa?
                      </span>
                      <ContextAwareToggle eventKey="3"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        Aplikasi kami memungkinkan Anda untuk mendapatkan produk yang disediakan
                        oleh pihak ketiga di bawah ini:
                        <ul>
                          <li className="ml-3">
                            FIF Group - Federal International Finance FIFASTRA, DANASTRA, SPEKTRA,
                            AMITRA.
                          </li>
                          <li className="ml-3">ACC - Astra Credit Companies</li>
                          <li className="ml-3">TAF - Toyota Astra Finance</li>
                          <li className="ml-3">SANF - Surya Astra Nusantara Finance</li>
                          <li className="ml-3">Asuransi Astra</li>
                          <li className="ml-3">Astra Life</li>
                          <li className="ml-3">AWDA - Astra WeLab Digital Astra</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Apakah saya mendapatkan jaminan persetujuan mendapatkan produk yang saya
                        inginkan jika mendaftar melalui Moxa?
                      </span>
                      <ContextAwareToggle eventKey="4"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        Layanan dan produk yang tersedia pada aplikasi Moxa akan diproses lebih
                        lanjut oleh partner kami. Hal tersebut meliputi proses verifikasi
                        kelengkapan data serta layanan dan produk keuangan yang telah Anda ajukan.{" "}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>Apakah informasi pribadi saya aman dengan Moxa?</span>
                      <ContextAwareToggle eventKey="5"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        Kami berusaha menjaga kerahasiaan data pribadi Anda. Informasi selengkapnya
                        terdapat pada kebijakan privasi Aplikasi Moxa.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>Bagaimana cara untuk mengubungi Moxa?</span>
                      <ContextAwareToggle eventKey="6"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body>
                        Jika ada pertanyaan yang berkaitan dengan aplikasi Moxa, Anda dapat
                        mengirimkan surat elektronik ke cs@moxa.id
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <h5 className="my-3 text-center">Akun</h5>

                  <Card>
                    <Card.Header>
                      <span>Bagaimana cara mengaktivasi akun Moxa saya?</span>
                      <ContextAwareToggle eventKey="7"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body>
                        Anda dapat mengaktifkan akun Moxa dengan cara:
                        <ol>
                          <li>
                            Masukkan nama
                            <div className="row">
                              <div className="col-6 m-auto">
                                <img
                                  src={require("../assets/img/faq/mengaktifkan-akun-moxa-1-min.png")}
                                  alt="mengaktifkan-akun-moxa-1"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Masukkan tanggal lahir
                            <div className="row">
                              <div className="col-6 m-auto">
                                <img
                                  src={require("../assets/img/faq/mengaktifkan-akun-moxa-2-min.png")}
                                  alt="mengaktifkan-akun-moxa-2"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Pilih tujuan keuangan Anda
                            <div className="row">
                              <div className="col-6 m-auto">
                                <img
                                  src={require("../assets/img/faq/mengaktifkan-akun-moxa-3-min.png")}
                                  alt="mengaktifkan-akun-moxa-3"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Setelah itu Anda dapat mengakses halaman utama dan fitur-fitur yang
                            tersedia pada Aplikasi Moxa.
                            <div className="row">
                              <div className="col-6 m-auto">
                                <img
                                  src={require("../assets/img/faq/mengaktifkan-akun-moxa-4-min.png")}
                                  alt="mengaktifkan-akun-moxa-4"
                                />
                              </div>
                            </div>
                          </li>
                        </ol>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>Dimana saya bisa meninjau akun Moxa dan riwayat transaksi saya?</span>
                      <ContextAwareToggle eventKey="8"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                      <Card.Body>
                        Anda dapat melihat riwayat transaksi atau pengajuan Layanan dan Produk
                        keuangan Anda di bagian Profil pada Daftar Pengajuan.
                        <div className="row">
                          <div className="col-6 col-md-4">
                            <img
                              src={require("../assets/img/faq/meninjau-akun-dan-riwayat-transaksi-1-min.png")}
                              alt="meninjau-akun-dan-riwayat-transaksi-1"
                            />
                          </div>
                          <div className="col-6 col-md-4">
                            <img
                              src={require("../assets/img/faq/meninjau-akun-dan-riwayat-transaksi-2-min.png")}
                              alt="meninjau-akun-dan-riwayat-transaksi-2"
                            />
                          </div>
                          <div className="col-6 col-md-4 m-auto">
                            <img
                              src={require("../assets/img/faq/meninjau-akun-dan-riwayat-transaksi-3-min.png")}
                              alt="meninjau-akun-dan-riwayat-transaksi-3"
                            />
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>Di mana saya bisa membaca tentang Kebijakan Privasi Moxa?</span>
                      <ContextAwareToggle eventKey="9"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                      <Card.Body>
                        Anda dapat membaca Kebijakan Privasi di bagian profil atau di{" "}
                        <a href="/kebijakan-privasi">Kebijakan Privasi</a>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>Di mana saya bisa membaca Syarat dan Ketentuan Moxa?</span>
                      <ContextAwareToggle eventKey="10"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="10">
                      <Card.Body>
                        Anda dapat membaca Syarat dan Ketentuan di bagian Profil atau di{" "}
                        <a href="/syarat-dan-ketentuan">Syarat dan Ketentuan</a>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>Bagaimana cara menutup akun saya?</span>
                      <ContextAwareToggle eventKey="11"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="11">
                      <Card.Body>Anda dapat menghubungi kami di cs@moxa.id</Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <h5 className="my-3 text-center">Proses Pengajuan Aplikasi</h5>

                  <Card>
                    <Card.Header>
                      <span>Bagaimana caranya mengajukan permohonan aplikasi di Moxa?</span>
                      <ContextAwareToggle eventKey="12"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="12">
                      <Card.Body>
                        Anda dapat melakukan pengajuan dengan cara:
                        <ol>
                          <li>
                            Pilih Layanan dan Produk keuangan yang sesuai dengan kebutuhan Anda
                            dengan 2 cara:
                            <br />
                            a. Klik logo Moxa (tombol berwarna kuning) untuk menampilkan menu
                            <div className="row">
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-mengajukan-permohonan-1-min.png")}
                                  alt="cara-mengajukan-permohonan-1"
                                />
                              </div>
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-mengajukan-permohonan-2-min.png")}
                                  alt="cara-mengajukan-permohonan-2"
                                />
                              </div>
                            </div>
                            b. Melalui chat (tombol berwarna biru) untuk menampilkan menu dalam
                            bentuk percakapan.
                            <div className="row">
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-mengajukan-permohonan-3-min.png")}
                                  alt="cara-mengajukan-permohonan-3"
                                />
                              </div>
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-mengajukan-permohonan-4-min.png")}
                                  alt="cara-mengajukan-permohonan-4"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Selanjutnya Anda dapat mengisi informasi yang dibutuhkan. Informasi yang
                            dibutuhkan dapat berbeda untuk setiap Layanan dan Produk keuangan yang
                            Anda pilih.
                          </li>
                          <li>
                            Untuk melakukan pengajuan, Anda dapat melengkapi Profil dan selanjutnya
                            Anda akan menerima kode OTP yang dikirimkan melalui SMS.
                            <div className="row">
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-mengajukan-permohonan-5-min.png")}
                                  alt="cara-mengajukan-permohonan-5"
                                />
                              </div>
                              <div className="col-6">
                                <img
                                  src={require("../assets/img/faq/cara-mengajukan-permohonan-6-min.png")}
                                  alt="cara-mengajukan-permohonan-6"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Setelah memasukkan kode OTP, pengajuan Anda akan terkirim.
                            <div className="row">
                              <div className="col-6 m-auto">
                                <img
                                  src={require("../assets/img/faq/cara-mengajukan-permohonan-7-min.png")}
                                  alt="cara-mengajukan-permohonan-7"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            Anda akan mendapatkan email konfirmasi yang berisikan detail pengajuan
                            Anda.
                          </li>
                          <li>
                            Selanjutnya Anda akan dihubungi oleh partner kami untuk melanjutkan
                            proses pengajuan.
                          </li>
                        </ol>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Setelah mengajukan aplikasi secara online melalui Moxa, apa langkah
                        selanjutnya yang harus saya lakukan?
                      </span>
                      <ContextAwareToggle eventKey="13"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="13">
                      <Card.Body>
                        Setelah Anda melakukan pengajuan secara online dari aplikasi Moxa, Anda akan
                        dihubungi oleh partner kami.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Apa ada biaya atau administrasi tambahan yang harus saya bayar jika
                        mengajukan aplikasi melalui Moxa?
                      </span>
                      <ContextAwareToggle eventKey="14"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="14">
                      <Card.Body>
                        Anda tidak dikenakan biaya apapun pada penggunaan aplikasi ini.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Apakah memungkinkan bagi saya untuk mengajukan aplikasi lebih dari satu
                        produk secara bersamaan?
                      </span>
                      <ContextAwareToggle eventKey="15"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="15">
                      <Card.Body>
                        Anda dapat mengajukan layanan dan produk secara bersamaan.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Apakah memungkinan bagi saya untuk mendapatkan persetujuan aplikasi dalam
                        hari yang sama?
                      </span>
                      <ContextAwareToggle eventKey="16"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="16">
                      <Card.Body>
                        Hal tersebut mengacu pada ketentuan dan proses dari masing-masing partner
                        kami.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Apa yang harus saya pelajari sebelum melakukan pengajuan aplikasi?
                      </span>
                      <ContextAwareToggle eventKey="17"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="17">
                      <Card.Body>
                        Anda dapat membaca dan mempelajari informasi terkait produk yang Anda
                        inginkan sebelum mengajukan aplikasi.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>
                        Perlukah saya mengirim dokumen saat menggunakan layanan aplikasi Moxa?
                      </span>
                      <ContextAwareToggle eventKey="18"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="18">
                      <Card.Body>
                        Terkait dokumen penting yang dibutuhkan untuk proses pengajuan Anda, kami
                        menyediakan halaman dan kolom untuk mengirimkan dokumen yang dibutuhkan
                        antara lain: foto KTP, foto NPWP, foto Kartu Keluarga, foto BPKB, dan foto
                        kendaraan Anda. Hal ini dibutuhkan sebagai validasi data pribadi Anda untuk
                        melakukan pengajuan produk. Dokumen yang telah Anda kirimkan akan kami
                        sampaikan kepada Pihak Ketiga untuk proses selanjutnya.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <span>Apakah saya dapat membatalkan pengajuan aplikasi?</span>
                      <ContextAwareToggle eventKey="19"></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="19">
                      <Card.Body>Anda tidak dapat membatalkan pengajuan aplikasi.</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
          </div>
        </div>

        <Contact />
      </LayoutProduct>
    </div>
  );
};

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div
      className={`circle-plus float-right ${isCurrentEventKey ? "opened" : "closed"}`}
      onClick={decoratedOnClick}
    >
      <div className="circle">
        <div className="horizontal"></div>
        <div className="vertical"></div>
      </div>
    </div>
  );
}

export default Faq;
