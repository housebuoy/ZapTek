import './App.css';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Headline from './components/Headline';
import Home from './components/Home';
import LatestNews from './components/LatestNews';
import OurCampaign from './components/OurCampaign';
import Tagline from './components/Tagline';
import Testimonial from './components/Testimonial';
import WhoWeAre from './components/WhoWeAre';


function App() {
  return (
    <div className="App">
      <Headline />
      <Header />
      <Home />
      <WhoWeAre />
      <OurCampaign />
      <LatestNews />
      <Testimonial />
      <Tagline />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
