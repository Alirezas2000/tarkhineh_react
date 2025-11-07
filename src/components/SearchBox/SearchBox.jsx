import { useState } from 'react'
import searchIcon from '../../assets/images/PNG/search-normal.png'
import group from '../../assets/images/PNG/Group.png'
import about from '../../assets/images/PNG/about.png'
import HeartButton from '../UI/HeartButton'
import StarRating from '../UI/StarRating'

const SearchBox = ({ onClose }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false)
  const [rating, setRating] = useState(3)

  return (
    <section className="container__search__bax">
      <div className="wrapper__search__bax">
        
        {}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#417F56'
          }}
        >
          بازگشت
        </button>

        <div className="Search__result">
          <h5 className="Search__result--text">!موردی با این مشخصات پیدا نکردیم</h5>
        </div>

        <div className="search__box">
          <button className="search__box--btn">
            <img className="search__box--icon" src={searchIcon} alt="جستجو" />
          </button>
          <input type="text" placeholder="جستجو" className="input__text" />
        </div>

        <div className="image__search__bax">
          <img src={group} alt="جستجو" />
        </div>

        <div className="Search__products">
          <div className="Search__products__cart">
            <div className="Search__products__cart--images">
              <img className="Search__products__cart--image" src={about} alt="پیتزا" />
            </div>
            <div className="Search__products__cart--title">پیتزا سبزیجات</div>
            
            <div className="sp__wrapper">
              <div className="sp__w-left">
                <div className="price__top">
                  <div className="price__offer">
                    <p className="alert__offer">%</p>
                    <p className="num__offer">10</p>
                  </div>
                  <p className="old__price"><s>100000</s></p>
                </div>
                <div className="price__bottom">
                  <p className="toman__price">تومان</p>
                  <p className="new__price">90000</p>
                </div>
              </div>
              <div className="sp__w-right">
                <div className="favorite">
                  <HeartButton 
                    isFilled={isHeartFilled} 
                    onToggle={() => setIsHeartFilled(!isHeartFilled)} 
                  />
                  <p className="favorite-text">افزودن به علاقه‌مندی‌ها</p>
                </div>
                <div className="rank">
                  <div className="rank__wrapper">
                    <StarRating rating={rating} onRate={setRating} />
                    <h6 className="rank__numd">{rating}</h6>
                    <div className="num-rank">
                      <h6>( <h6 className="total__numd">20</h6> <h6 className="rank__numd">امتیاز</h6> )</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="send">افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchBox
