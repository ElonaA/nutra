import { useEffect, useState } from "react";
import styles from "./ThankYouPage.module.css";
import { Link } from "react-router-dom";

const ThankYouPage = (props) => {
    const [pixel, setPixel] = useState('');

    //get pixel from server response
   useEffect(() => {
    let pixel_server = localStorage.getItem('pixel');
    setPixel(pixel_server);
   }, []);

   var URL = `https://www.facebook.com/tr?id=${ pixel }&ev=Lead&noscript=1`;

  return (
    <div className={styles.body}>
      <img className={styles.pixelImg} src={URL} alt="pixel-code"/>
      
        <h1 className={styles.h1}>Გმადლობთ შეკვეთისთვის!</h1>
      
      <div className={styles.container-1 }>
        <p className={styles.p}>
          მოხარული ვართ, რომ თქვენ აირჩიეთ ჩვენი პროდუქცია. თქვენი შეკვეთა იყო
          წარმატებით მიიღო.
        </p>
        <p className={styles.p}>
          ჩვენი სპეციალისტები მალე დაგიკავშირდებიან მიწოდებისა და გადახდის
          დასადასტურებლად დეტალები.
        </p>
        <p className={styles.p}>თუ თქვენ გაქვთ რაიმე შეკითხვები, მოგერიდებათ დაგვიკავშირდეთ:</p>
        <p className={styles.p}>ტელეფონი: +1 (123) 456-7890</p>
        <p className={styles.p}>ელფოსტა: info@yourbadstore.com</p>
        <Link to="/shop/offers" className="btn">
          დაბრუნება მთავარ გვერდზე
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
