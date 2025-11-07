import insta from '../../assets/images/PNG/icon_insta.png'
import tel from '../../assets/images/PNG/icon_tel.png'
import x from '../../assets/images/PNG/icon_x.png'

const QuickLinks = () => (
  <div className="easy__access">
    <p className="easy__access--title">دسترسی آسان</p>
    <div className="easy__access--links">
      {['پرسش‌های متداول', 'قوانین ترخینه', 'حریم خصوصی'].map((text) => (
        <a key={text} href="#" className="easy__access--link"><p>{text}</p></a>
      ))}
    </div>
    <div className="easy__access--icons">
      <a className="easy__access__icon"><img src={insta} alt="اینستاگرام" /></a>
      <a className="easy__access__icon"><img src={tel} alt="تلگرام" /></a>
      <a className="easy__access__icon"><img src={x} alt="ایکس" /></a>
    </div>
  </div>
)

export default QuickLinks