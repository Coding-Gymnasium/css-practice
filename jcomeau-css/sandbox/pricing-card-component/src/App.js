import "./App.css";
import HeaderBar from "./components/header/HeaderBar";
import PricingCardSection from "./components/pricingCard/PricingCardSection";

function App() {
  return (
    <>
      <div className="header">
        <HeaderBar />
      </div>
      <div className="main">
        <PricingCardSection />
      </div>
    </>
  );
}

export default App;
