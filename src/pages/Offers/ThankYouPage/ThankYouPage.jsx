import { useEffect, useState } from "react";
import styles from "./ThankYouPage.module.css";

//images
import womans_cs from "./images/womans-bg.png";
import prod_1 from "./images/prod-1-head hair.png";
import prod_2 from "./images/prod-2-bee power.png";
import prod_3 from "./images/prod-3-Fungizol.png";
import prod_4 from "./images/prod-4-dash diet.jpg";
import prod_5 from "./images/prod-5-Joint Balm.png";
import prod_6 from "./images/prod-6-bee power.png";
import prod_7 from "./images/prod-7-DM-NORM.jpg";
import prod_8 from "./images/prod-8-Prostonix.jpg";
import prod_9 from "./images/prod-9-Hyperton.jpg";
import prod_10 from "./images/prod-10-Otolax.png";
import prod_11 from "./images/prod-11-Ocularix.png";
import prod_12 from "./images/prod-12-Mennex Caps N20.png";
import comment_1 from "./images/woman-comment-1.png";
import comment_2 from "./images/man-comment-2.png";
import comment_3 from "./images/woman-comment-3.png";

const ThankYouPage = (props) => {
    const [pixel, setPixel] = useState('');

    //get pixel from server response
   useEffect(() => {
    let pixel_server = localStorage.getItem('pixel');
    setPixel(pixel_server);
   }, []);

   var URL = `https://www.facebook.com/tr?id=${ pixel }&ev=Lead&noscript=1`;

  return (
    <div className={styles.thankyouBody}>
        <img className={styles.pixelImg} src={URL} alt="pixel-code"/>
        <main className={styles.main}>
        <section className={styles.thank}>
            <img className={styles.thank__bg} src={ womans_cs } alt="people-bg" />
            <div className={styles.container}>
                <div className={styles.thank__text}>
                    <h1 className={styles.title}>მადლობას გიხდით შეკვეთისთვის!</h1>
                    <p className={styles.info}>მადლობას გიხდით ჩვენი საიტისადმი ნდობისთვის. ჩვენი სპეციალისტი მალევე დაგიკავშირდებათ შეკვეთის დასადასტურებლად და დეტალების დასაზუსტებლად.</p>
                </div>
            </div>
        </section>
        <section className={styles.offers}>
            <div className={styles.container}>
                <h2 className={styles.offers__title}>სპეციალური შეთავაზება</h2>
                <ul className={styles.offers__list}>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge2.vedazx.com/ms9bXfbQ?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_1} alt="product_1"/>
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Head hair</b> - თმის შრატი</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">233 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge3.vedazx.com/DC3NzD2y?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_2} alt="product_2"/>
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Сила пчелы</b> - ქალთა ინტიმური კრემი</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">140 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge4.vedazx.com/Pv6QQP6X?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_3} alt="product_3"/>
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Fungizol</b> - სოკოს კრემი</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">30 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge.vedukj.com/jbZSsmSF?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_4} alt="product_4"/>
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Dash Diet</b> - დიეტური აბები</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">14 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge1.vedukj.com/YVGyhfsd?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_5} alt="product_5" />
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Joint Balm</b> - მალამო სახსრებისთვის</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">159.8 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge2.vedukj.com/XqW9w6Gp?sub_id_2=dan&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_6} alt="product_6"/>
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Сила пчелы</b> - ლარი ვარიკოზული ვენებისთვის</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">140 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge3.vedukj.com/PRXFGSr8?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_7} alt="product_7"/>
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>DM-NORM</b> - დიაბეტის კაფსულები</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">30 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge4.vedukj.com/KnSMGzNx?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_8} alt="product_8"/>
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Prostonix</b> - კაფსულები პოტენციისთვის</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">99 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge5.vedukj.com/k3jbgNT4?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_9} alt="product_9" />
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Hyperton</b> - კაფსულები ჰიპერტენზიისთვის</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">30 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge6.vedukj.com/hVPdcHpV?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_10} alt="product_10" />
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Otolax</b> - კაფსულები სმენის გასაუმჯობესებლად</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">100 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge7.vedukj.com/DPBbMdkS?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_11} alt="product_11"/>
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Ocularix</b> - კაფსულები ხედვისთვის</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">30 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.offers__listItem}>
                        <a href="https://ge8.vedukj.com/DYsJvsZj?sub_id_2=mish&sub_id_3=text_3&pixel=111111111111111" className={styles.link}>
                            <div className={styles.link__top}>
                                <img src={prod_12} alt="product_12" />
                                <span>აქცია</span>
                            </div>
                            <div className={styles.link__bottom}>
                                <h3><b>Mennex Caps N20</b> - კაფსულები პოტენციისთვის</h3>
                                <div className={styles.price}>
                                    {/* <!-- <span className="old-price">14 GEL</span> --> */}
                                    <span className={styles.newPrice}>ფასდაკლებით!</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    <footer className={styles.footer}>
        <div className={styles.container}>
            <h2 className={styles.footer__title}>გამოხმაურებები</h2>
            <ul className={styles.footer__comments}>
                <li className={styles.footer__commentsItem}>
                    <img src={comment_1} alt="comment-1"/>
                    <div className={styles.textBlock}>
                        <span>მზია მახარაშვილი</span>
                        <p>მადლობას გიხდით ხარისხიანი ნივთისთვის და შესანიშნავი მომსახურებისთვის! მიწოდება სწრაფია, კონსულტაცია უმაღლეს დონეზე, აუცილებლად შევუკვეთავ თქვენგან კიდევ!</p>
                    </div>
                </li>
                <li className={styles.footer__commentsItem}>
                    <img src={comment_2} alt="comment-2"/>
                    <div className={styles.textBlock}>
                        <span>კახა კიკაბიძე</span>
                        <p>ძალიან კმაყოფილი ვარ შენაძენებით თქვენი მაღაზიიდან! მომსახურება უმაღლეს დონეზეა, განსაკუთრებული მადლობა კონსულტანტ მარიამს, რომელმაც თავისი დრო დაგვითმო ყველაფრის დეტალურად ახსნისთვის. აუცილებლად ვურჩევ თქვენს მაღაზიას მეგობრებს. გისურვებთ ბევრ მადლობელ მომხმარებელს და სიამოვნების მიღებას თქვენი საქმიანობიდან.</p>
                    </div>
                </li>
                <li className={styles.footer__commentsItem}>
                    <img src={comment_3} alt="comment-3"/>
                    <div className={styles.textBlock}>
                        <span>თეონა ბრეგვაძე</span>
                        <p>სასიამოვნოდ გაკვირვებული დავრჩი, როდესაც შეკვეთის განთავსებიდან და ყველა დეტალის დაზუსტებიდან სულ რამდენიმე დღეში მივიღე ნივთი. ყველაფრით კმაყოფილი დავრჩი, მომსახურება შესანიშნავი იყო, მენეჯერთან ურთიერთობაც სასიამოვნო იყო. ყველაფრით კმაყოფილი ვარ! ყველას ვურჩევ თქვენს მაღაზიას, მადლობა!</p>
                    </div>
                </li>
            </ul>
        </div>
    </footer>
    </div>
    // <div className={styles.body}>
    //   <img className={styles.pixelImg} src={URL} alt="pixel-code"/>
      
    //     <h1 className={styles.h1}>Გმადლობთ შეკვეთისთვის!</h1>
      
    //   <div className={styles.container-1 }>
    //     <p className={styles.p}>
    //       მოხარული ვართ, რომ თქვენ აირჩიეთ ჩვენი პროდუქცია. თქვენი შეკვეთა იყო
    //       წარმატებით მიიღო.
    //     </p>
    //     <p className={styles.p}>
    //       ჩვენი სპეციალისტები მალე დაგიკავშირდებიან მიწოდებისა და გადახდის
    //       დასადასტურებლად დეტალები.
    //     </p>
    //     <p className={styles.p}>თუ თქვენ გაქვთ რაიმე შეკითხვები, მოგერიდებათ დაგვიკავშირდეთ:</p>
    //     <p className={styles.p}>ტელეფონი: +1 (123) 456-7890</p>
    //     <p className={styles.p}>ელფოსტა: info@yourbadstore.com</p>
    //     <Link to="/shop/offers" className="btn">
    //       დაბრუნება მთავარ გვერდზე
    //     </Link>
    //   </div>
    // </div>
  );
};

export default ThankYouPage;
