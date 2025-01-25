import React, { useMemo } from "react";
import Header from "./Header";
import PaymentTimeline from "./PaymentTimeline";
import CreditAccountRow from "./CreditAccountRow";
import Card from "../DashComp/Card";

const CreditManagement = () => {
  const creditStats = useMemo(
    () => [
      {
        title: "Total Outstanding",
        value: "₹4,85,000",
        description: "28 accounts",
        indicator: "High Priority",
        indicatorColor: "red",
      },
      {
        title: "Due This Week",
        value: "₹95,000",
        description: "8 accounts",
        indicator: "Action Needed",
        indicatorColor: "red",
      },
      {
        title: "Overdue Amount",
        value: "₹32,500",
        description: "5 accounts",
        indicator: "Critical",
        indicatorColor: "red",
      },
      {
        title: "Collected This Month",
        value: "₹1,25,000",
        description: "15 payments",
        indicator: "+12%",
        indicatorColor: "green",
      },
    ],
    []
  );

  const paymentTimeline = useMemo(
    () => [
      {
        period: "Today",
        color: "bg-red-500",
        bg: "bg-red-200",
        width: "75%",
        amount: "₹45,000",
      },
      {
        period: "This Week",
        color: "bg-orange-500",
        bg: "bg-orange-200",
        width: "45%",
        amount: "₹95,000",
      },
      {
        period: "This Month",
        color: "bg-blue-500",
        bg: "bg-blue-200",
        width: "60%",
        amount: "₹1,85,000",
      },
    ],
    []
  );

  const creditAccounts = useMemo(
    () => [
      {
        id: "1", // Added unique ID for key prop
        customer: "Rajesh Kumar",
        phone: "+91 98765 43210",
        amount: "₹25,000",
        dueDate: "Aug 20, 2023",
        status: "Overdue",
        statusColor: "bg-red-100 text-red-800",
        lastPayment: "Jul 15, 2023",
      },
      {
        id: "2", // Added unique ID for key prop
        customer: "Suresh Patel",
        phone: "+91 98765 43211",
        amount: "₹15,000",
        dueDate: "Aug 25, 2023",
        status: "Due Soon",
        statusColor: "bg-yellow-100 text-yellow-800",
        lastPayment: "Aug 01, 2023",
      },
    ],
    []
  );

  return (
    <section id="credits" className="p-6 space-y-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {creditStats.map((stat) => (
          <Card key={stat.title} {...stat} />
        ))}
      </div>
      <PaymentTimeline timeline={paymentTimeline} />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Credit Accounts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Last Payment
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {creditAccounts.map((account) => (
                <CreditAccountRow key={account.id} account={account} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CreditManagement);
