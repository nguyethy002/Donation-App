import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/App.sass";
import { DonatorCard } from "./components/DonatorCard";
import { DonatorForm } from "./components/DonatorForm";
import { placeHolderUsers } from "./data/db";


function App() {
  return (
    <div className="App">
      <DonatorForm />
      {placeHolderUsers.map((donator) => (
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
