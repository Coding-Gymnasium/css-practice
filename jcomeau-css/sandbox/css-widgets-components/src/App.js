import "./App.css";
import FixedHelpButton from "./components/fixedHelpButton/FixedHelpButton";
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
        <FixedHelpButton />
      </div>
    </>
  );
}

export default App;
