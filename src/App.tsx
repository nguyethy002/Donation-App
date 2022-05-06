import "./App.css";
import "./styles/App.sass";
import { DonatorCard } from "./components/DonatorCard";
import { DonatorForm } from "./components/DonatorForm";
import { useAppSelector } from "./redux/hooks";


function App() {
    const donationList = useAppSelector((state) => state.donation);
  return (
    <div className="App">
      <DonatorForm />
      {donationList.donationList.map((donator) => (
        <DonatorCard
          userName={donator.userName}
          cardNumber={donator.cardNumber}
          ccv={donator.ccv}
          donatedAmount={donator.donatedAmount}
          note={donator.note}
        />
      ))}
    </div>
  );
}

export default App;
