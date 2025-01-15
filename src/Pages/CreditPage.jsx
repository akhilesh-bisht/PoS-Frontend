import React from "react";
import CreditManagement from "../components/Credits/CreditManagement";
import PaymentManagement from "../components/PaymentM/PayMent";
import ReturnsSection from "../components/PaymentM/Return";
import ReportsPage from "../components/PaymentM/Report";

function CreditPage() {
  return (
    <>
      <CreditManagement />
      <PaymentManagement />
      <ReturnsSection />
      <ReportsPage />
    </>
  );
}

export default CreditPage;
