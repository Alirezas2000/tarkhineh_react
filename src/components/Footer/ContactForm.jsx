const ContactForm = () => (
  <div className="left__footer">
    <h4 className="left__footer--title">پیام به ترخینه</h4>
    <div className="into__info">
      <div className="into__info--right">
        <input type="text" placeholder="نام خود را وارد کنید" className="info__right" />
        <input type="text" placeholder="نام خانوادگی خود را وارد کنید" className="info__right family" />
        <input type="text" placeholder="ایمیل خود را وارد کنید (اختیاری)" className="info__right" />
      </div>
      <div className="into__info--left">
        <input type="text" placeholder="پیام شما" className="info__left" />
      </div>
    </div>
    <button type="submit" className="footer__submit">ارسال پیام</button>
  </div>
)

export default ContactForm