'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const orders = [
  { id: "PZA001", customer: "John Doe", type: "Margherita", quantity: 2, date: "2025-05-30 14:30", status: "Pending" },
  { id: "PZA002", customer: "Jane Smith", type: "Pepperoni", quantity: 1, date: "2025-05-30 15:00", status: "Preparing" },
  { id: "PZA003", customer: "Alice Johnson", type: "Veggie Supreme", quantity: 3, date: "2025-05-30 15:45", status: "OutForDelivery" },
  { id: "PZA004", customer: "Bob Brown", type: "Cheese Burst", quantity: 1, date: "2025-05-30 16:15", status: "Delivered" },
  { id: "PZA005", customer: "Eve Davis", type: "Farmhouse", quantity: 2, date: "2025-05-30 16:45", status: "Cancelled" }
];

export default function PizzaOrdersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="container">
        <button 
  onClick={() => router.push("/dashboard")}
  className="back-button"
>
  ← Back to Home
</button>
      <h1>Pizza Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Pizza Type</th>
            <th>Quantity</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.type}</td>
              <td>{order.quantity}</td>
              <td>{order.date}</td>
              <td><span className={`status ${order.status.replace(/\s/g, '')}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
