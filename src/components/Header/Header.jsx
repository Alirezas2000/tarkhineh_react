import UserMenu from './UserMenu'
import NavMenu from './NavMenu'
import Logo from './Logo'
import IconButton from '../UI/IconButton'
import cartIcon from '../../assets/images/PNG/shopping-cart.png'
import searchIcon from '../../assets/images/PNG/search-normal.png'
import SearchButton from './SearchButton';

const Header = ({ onSearchClick }) => (
  <header className="header">
    <div className="container">
      <div className="left_icons">
        <UserMenu />
        <a href="#">
          <IconButton src={cartIcon} alt="Shopping Cart" count={0} />
        </a>
        <IconButton 
          src={searchIcon} 
          alt="Search" 
          onClick={onSearchClick} 
        />
      </div>
      <NavMenu />
      <Logo />
    </div>
  </header>
)

export default Header