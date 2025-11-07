import { useNavigate } from 'react-router-dom';
import IconButton from '../UI/IconButton';
import searchIcon from '../../assets/images/PNG/search-normal.png';

const SearchButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };

  return (
    <IconButton
      id="search-button"
      src={searchIcon}
      alt="جستجو"
      onClick={handleClick}
    />
  );
};

export default SearchButton;