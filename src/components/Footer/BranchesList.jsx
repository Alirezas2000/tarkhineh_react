const BranchesList = () => (
  <div className="branches__footer">
    <h3 className="branches__footer--title">شعبه‌های ترخینه</h3>
    <div className="easy__access--links">
      {['اکباتان', 'چالوس', 'اقدسیه', 'ونک'].map((b) => (
        <a key={b} href="#" className="branches__footer--link"><p>شعبه {b}</p></a>
      ))}
    </div>
  </div>
)

export default BranchesList