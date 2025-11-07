import footerBg from '../../assets/images/PNG/Footer.png'
import ContactForm from './ContactForm'
import QuickLinks from './QuickLinks'
import BranchesList from './BranchesList'

const Footer = () => (
  <footer className="footer">
    <div className="footer__image" style={{ backgroundImage: `url(${footerBg})` }}>
      <section className="section__footer">
        <ContactForm />
        <div className="right__footer">
          <QuickLinks />
          <BranchesList />
        </div>
      </section>
    </div>
  </footer>
)

export default Footer