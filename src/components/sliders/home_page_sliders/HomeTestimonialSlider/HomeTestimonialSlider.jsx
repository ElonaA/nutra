import Slider from "react-slick";

import "./HomeTestimonialSlider.css";

import testimonial_img01 from "../../../../img/testimonal/1.jpg";
import testimonial_img02 from "../../../../img/testimonal/2.jpg";
import testimonial_img03 from "../../../../img/testimonal/3.jpg";
import testimonial_img04 from "../../../../img/testimonal/4.jpg";
import testimonial_img05 from "../../../../img/testimonal/5.jpg";
import testimonial_img06 from "../../../../img/testimonal/6.jpeg";
import testimonial_img07 from "../../../../img/testimonal/7.jpeg";

const HomeTestimonialSlider = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="row testimonial-active">
      <div className="col-xl-4">
        <div className="testimonial-item">
          <div className="testi-img">
            <img src={testimonial_img01} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ Hyperton-ი - საუკეთესო საშუალებაა. ადრე იშვიათად ვსვამდი ძლიერ საშუალებებს, როდესაც წნევა მაღლა მეწეოდა ან გულის პრობლემები მქონდა. მაგრამ შემდეგ უცებ ეფექტი გაქრა. ექიმთან მივედი, მან მირჩია ახალი Hyperton-ი მეცადა (ახალგაზრდა ექიმი, ერთ-ერთი ცოტათაგანი რომელსაც უნდა, რომ ხალხს უნდა უმკურნალოს და არა ფული გამოძალოს!) აი ეს საშუალება დამეხმარა პირველივე დღიდან - წნევა დაუყოვნებლივ დაეცა, მაგრამ გადავწყვიტე კურსი მიმეღო როგორც ეს ექიმმა მირჩია. 3 კვირის თავზე მე დამავიწყდა თუ რა იყო ჰიპერტენზია. ფეხებზე ვენები აღარ მებერება, არადა 10 წელი მტანჯავდა! მენოპაუზისგან ტაქიკარდია მქონდა, ახლა კი პრობლემებისგან კვალიც არ დარჩა. თავს გადასარევად ვგრძნობ, როგორც ახალგაზრდობაში! ”
            </p>
            <div className="testi-avatar-info">
              <h5 className="title">დარეჯან ბაქრაძე თელავი</h5>
              {/* <span>Founder. CEO</span> */}
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="testimonial-item">
          <div className="testi-img">
            <img src={testimonial_img02} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ დედაჩემს დაეწყო თითების დაბუჟება, ნაცნობმა ექიმმა ურჩია სისხლძარღვები გაეწმინდა. თქვა რომ დაელია ქატო და დიეტა დაეცვა, მაგრამ წავიკითხე, რომ ქატოს მსხვილი ნაწლავის სიმსივნის გამოწვევა შეუძლია!!! გადავწყვიტე არ გამერისკა... შედეგად შემთხვევით გავიგეთ ამ Hyperton-ის შესახებ. სულ რამდენიმე დღეში სახის ფერი გაუმჯობესდა, თმები და ფრჩხილები უკეთ გამოიყურებოდა. საერთო მდგომარეობა გაუმჯობესდა და მეორე კვირისთვის თითები თითქმის აღარ ბუჟდებოდა. დაბუჟება გაქრა 1,5 თვეში + წნევა ნორმაში ჩადგა. ”
            </p>
            <div className="testi-avatar-info">
              <h5 className="title">ელენა მესხი ცაგერი</h5>
              {/* <span>Founder. CEO</span> */}
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="testimonial-item">
          <div className="testi-img">
            <img src={testimonial_img03} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ საერთოდ PROSTONIX ანალოგი არ აქვს ბაზარზე. ეს საშუალება ამასთანავე არის ონკოპრეპარატი. ეს არის ერთადერთი საშუალება, რომელიც 100%-ით მუშაობს. მე საკუთარ თავზე გამოვცადე ნამდვილად ასევე ის დაეხმარა ჩემს ორ ნაცნობს. მოკლედ ზუსტად შემიძლია გითხრათ, რომ ეს სუბიექტური აზრი კი არაა, არამედ რამდენიმე ადამიანის განკურნებაა ”
            </p>
            <div className="testi-avatar-info">
              <h5 className="title">გოგი</h5>
              {/* <span>Founder. CEO</span> */}
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="testimonial-item">
          <div className="testi-img">
            <img src={testimonial_img04} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ არ ვარ დარწმუნებული რომ სოკო მქონდა, მაგრამ ფეხებზე ცუდი სუნი მქონდა. წინდებს დღეში 2-ჯერ ვიცვლიდი. ახალი ფეხსაცმელი ვიყიდე. არაფერი! გადავწყვიტე მეცადა Fungizol-ი. მან კი ნამდვილად მიშველა, თუმცა ეგრევე არა. ჯერ სუნი, შემდეგ ქავილი და შემდეგ კანი. ამ რიგითობით გამიარა. შემიძლია გირჩიოთ.. ”
            </p>
            <div className="testi-avatar-info">
              <h5 className="title">უალი კერიმოვი</h5>
              {/* <span>Founder. CEO</span> */}
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="testimonial-item">
          <div className="testi-img">
            <img src={testimonial_img05} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ ო, მეც ვიტანჯებოდი დიაბეტით სანამ DM-NORM-ის შესახებ გავიგებდი. ყველაფერი პენსიონერივით მქონდა. მაგრამ ასევე მქონდა მუდმივი მაღალი არტერიული წნევა პლუს სისხლში მაღალი შაქარი (200-230), რის გამოც სულ ვაღებინებდი. თანაც ჭარბწონიანობა - 120 კგ სიდაბლის ფონზე. შეშუპება, სუნთქვის გაძნელება, ეს ყველაფერი მაწუხებდა. ვოფლიანობდი. ახლა ეს არ მაწუხებს. გავიარე DM-NORM-ის მკურნალობის კურსი. ახლა თავს ცოცხალ ადამიანად ვგრძნობ. დავკარგე წონა, ჩემი არტერიული წნევა აღარ იმატებს. ”
            </p>
            <div className="testi-avatar-info">
              <h5 className="title">ია სვანიძე, ბაღდათი</h5>
              {/* <span>Founder. CEO</span> */}
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="testimonial-item">
          <div className="testi-img">
            <img src={testimonial_img06} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ არ დაიჯერებთ, მაგრამ მეც იგივე პრობლემა მაწუხებდა, ფეხები სულ დასიებული მქონდა, ვენები „ქსელის“ მსგავსად მაჩნდა, უკვე სასოწარკვეთილი ვიყავი, მაგრამ შემდეგ ეს Varihelp გამოჩნდა, ეს უბრალოდ ჯადოსნური პროდუქტია, ყველას მინდა ვურჩიო მისი გამოყენება. ”
            </p>
            <div className="testi-avatar-info">
              <h5 className="title">ინა</h5>
              {/* <span>Founder. CEO</span> */}
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="testimonial-item">
          <div className="testi-img">
            <img src={testimonial_img07} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ სრულიად ვადასტურებ. "PX-300" არაჩვეულებრივი პრეპარატია. მე 54 წლის ვარ. ბოლო პერიოდში პოტენცია თითქმის არ მქონდა. ჩნდებოდა ძალიან იშვიათად. ბევრი რამე ვცადე, მის დასაბრუნებლად. ხალხური რეცეპტები, ტაბლეტები, უროლოგთან მრავალჯერ მივედი. ერთადერთი, რაც დამეხმარა, ეს პრეპარატია. ახლა კვირაში ერთხელი სექსი სტაბილურადაა. პლუს მისგან ჯანმრთელობა გამიუმჯობესდა, რადგანაც ტესტოსტერონი მამაკაცის ორგანიზმისთვის უფრო სასარგებლოა. ”
            </p>
            <div className="testi-avatar-info">
              <h5 className="title">თემური</h5>
              {/* <span>Founder. CEO</span> */}
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default HomeTestimonialSlider;
