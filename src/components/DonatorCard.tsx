import React from "react";
import "../styles/components/DonatorCard.sass";

export interface DonatedCardProps {
  userName: string;
  cardNumber: number;
  ccv: number;
  donatedAmount: number;
  note: string;
}

export const DonatorCard = ({
  userName,
  cardNumber,
  ccv,
  donatedAmount,
  note,
}: DonatedCardProps) => {
  return (
    <div className="donatorCardContainer">
      <p>Name: {userName}</p>
      <p>Card Number: {cardNumber}</p>
      <p>CCV: {ccv}</p>
      <p>Amount: ${donatedAmount}</p>
      <p>Note: {note}</p>
    </div>
  );
};
