import './App.css';
import { ReactComponent as EyefitLogo } from './components/public/eyefit.svg';

function App() {
  const pageContent = <div className="app">
    <header className="app-header">
      <div className='app-header__logo'>
        <EyefitLogo className='logo'></EyefitLogo>
      </div>
    </header>
    <main className='app-content'>
      <section className='app-content__intro'>
        <h1 className='app-content__title'>
          Just take a selfie and let our technology give suitable glasses for you
        </h1>
        <p className='app-content__intro-para'>
          I'm your virtual assistant to help you get your best match glasses based on
          your facial type, and I can connect to our client online shop for you to choose.
        </p>
        <button className='app-content__scan-cta' type='button'>Scan your face</button>
      </section>
      <section className='app-content__hero'>
        <div className='app-content__hero-image-wrapper'>
          <div className='app-content__hero-image'></div>
        </div>
      </section>
    </main>
    <footer className='app-footer'>
      <section className='app-footer__credit'>
        <h2 className='app-footer__credit-header'>Member</h2>
        <ul className='app-credit'>
          <li className='app-credit__member'>Tiya Nur Alfiyanti</li>
          <li className='app-credit__member'>Rilo Adi Riambudi</li>
          <li className='app-credit__member'>Amsal Budiansyah</li>
          <li className='app-credit__member'>Nacre Faiz Hibatullah A.P</li>
          <li className='app-credit__member'>Kelvin Kurniawan</li>
        </ul>
      </section>
      <p className='app-footer__information'>&copy; 2023 StratTech Solutions | All Rights Reserved</p>
    </footer>
  </div>;

  return pageContent;
}

export default App;
