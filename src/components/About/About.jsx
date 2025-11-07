import aboutBg from '../../assets/images/PNG/about.png'
import diagram from '../../assets/images/PNG/diagram.png'
import userB from '../../assets/images/PNG/user__B.png'
import menuBoard from '../../assets/images/PNG/menu-board.png'
import homeWifi from '../../assets/images/PNG/home-wifi.png'

const About = () => (
  <section className="about__container">
    <div className="about__image" style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="about__wrapper">
        <div className="about__icons">
          <div className="about__icons--top">
            <div className="left__icon--top">
              <img className="img__icon" src={diagram} alt="کیفیت" />
              <p className="txt__icon">کیفیت بالای غذاها</p>
            </div>
            <div className="right__icon--down">
              <img src={userB} alt="پرسنل" />
              <p className="txt__icon">پرسنلی مجرب و حرفه‌ای</p>
            </div>
          </div>
          <div className="about__icons--down">
            <div className="left__icon--down">
              <img className="img__icon" src={menuBoard} alt="منو" />
              <p className="txt__icon">منوی متنوع</p>
            </div>
            <div className="right__icon--down">
              <img className="img__icon" src={homeWifi} alt="محیط" />
              <p className="txt__icon">محیطی دلنشین و آرام</p>
            </div>
          </div>
        </div>
        <div className="about__den">
          <h3 className="about__den--title">رستوران‌های زنجیره‌ای ترخینه</h3>
          <p className="about__den--tozih">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم...
          </p>
          <button className="about__den--btn">اطلاعات بیشتر</button>
        </div>
      </div>
    </div>
  </section>
)

export default About