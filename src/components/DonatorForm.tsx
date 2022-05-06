import { useState } from "react";
import "../styles/components/DonatorForm.sass";
import { placeHolderUsers } from "../data/db";
import { DonatedCardProps } from "./DonatorCard";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addADonationToDonationList } from "../redux/donation";

export const DonatorForm = () => {
  const [userName, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [ccv, setCCV] = useState("");
  const [donatedAmount, setAmount] = useState("");
  const [note, setNote] = useState("");
  // const [donationList, setDonationList] =
  //   useState<DonatedCardProps[]>(placeHolderUsers);

  const dispatch = useAppDispatch()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const donation = {
      userName,
      cardNumber: parseInt(cardNumber),
      ccv: parseInt(ccv),
      donatedAmount: parseInt(donatedAmount),
      note,
    };
    dispatch(addADonationToDonationList(donation))
    // setDonationList([...donationList, donation]);
    // const newarray = ...donationList;
    // newarray.push(donation);
    // setDonationList(newarray);
  };

  return (
    <div className="donatorFormContainer">
      <form onSubmit={handleSubmit} id="form">
        <label> Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={userName}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Card Number</label>
        <input
          type="number"
          id="cardNumber"
          name="cardNumber"
          placeholder="Your card number.."
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <label> CCV</label>
        <input
          type="number"
          id="ccv"
          name="ccv"
          placeholder="Your card's ccv.."
          value={ccv}
          onChange={(e) => setCCV(e.target.value)}
        />
        <label>Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Your amount.."
          value={donatedAmount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Note</label>
        <textarea
          id="note"
          name="note"
          placeholder="Your note.."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </form>
      <button form="form">Submit</button>
    </div>
  );
};
