import makan from '../../assets/images/PNG/makan.png'

const branches = [
  { title: "شعبه ونک", desc: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶" },
  { title: "شعبه اقدسیه", desc: "خیابان اقدسیه، نرسیده به میدان خیام، پلاک ۸" },
  { title: "شعبه چالوس", desc: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی" },
  { title: "شعبه اکباتان", desc: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم" }
]

const Branches = () => (
  <section className="branches">
    <h3 className="branches__title">ترخینه گردی</h3>
    <div className="branches__container">
      {branches.map((b, i) => (
        <div key={i} className="branches__cart">
          <img className="baranches__cart--image" src={makan} alt={b.title} />
          <div className="bs__cart--info">
            <div className="bs__cart--title">{b.title}</div>
            <div className="bs__cart--description">{b.desc}</div>
          </div>
          <button className="branches__cart--btn_more">صفحه شعبه</button>
        </div>
      ))}
    </div>
  </section>
)

export default Branches