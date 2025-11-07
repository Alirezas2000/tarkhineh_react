import { useState, useEffect, useRef } from 'react'
import IconButton from '../UI/IconButton'
import userIcon from '../../assets/images/PNG/User.png'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // وقتی کلیک بیرون منو شد، بسته بشه
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="user__menu" ref={menuRef}>
      <IconButton 
        src={userIcon} 
        alt="User Icon" 
        onClick={() => setIsOpen(!isOpen)} 
      />
      
      {isOpen && (
        <ul className="user__dropdown" style={{ display: 'block' }}>
          <li><a href="#">ثبت نام</a></li>
          <li><a href="#">پروفایل</a></li>
          <li><a href="#">پیگیری سفارشات</a></li>
          <li><a href="#">علاقه‌مندی‌ها</a></li>
          <li><a href="#">آدرس‌های من</a></li>
          <li><a href="#">خروج از حساب کاربری</a></li>
        </ul>
      )}
    </div>
  )
}

export default UserMenu