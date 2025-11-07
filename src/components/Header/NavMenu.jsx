const NavMenu = () => (
  <nav className="menu">
    <ul className="menu__link">
      <li className="menu__link--item">
        <a href="#" className="">تماس با ما</a>
      </li>
      <li className="menu__link--item">
        <a href="#">درباره ما</a>
      </li>
      <li className="menu__link--item">
        <a href="#">اعطای نمایندگی</a>
      </li>
      <li className="menu__link--item">
        <a href="#" className="menu-branch">شعبه‌ها</a>
        <ul className="sub__foods">
          <li><a href="#">اکباتان</a></li>
          <li><a href="#">چالوس</a></li>
          <li><a href="#">اقدسیه</a></li>
          <li><a href="#">ونک</a></li>
        </ul>
      </li>
      <li className="menu__link--item">
        <a href="menu.html" className="menu-branch">منو</a>
        <ul className="sub__foods">
          <li><a href="#">غذای اصلی</a></li>
          <li><a href="#">پیش‌غذا</a></li>
          <li><a href="#">دسر</a></li>
          <li><a href="#">نوشیدنی</a></li>
        </ul>
      </li>
      <li className="menu__link--item">
        <a href="index.html" className="active">صفحه اصلی</a>
      </li>
    </ul>
  </nav>
)

export default NavMenu