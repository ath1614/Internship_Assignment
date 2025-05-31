'use client';
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
        <a href="/dashboard">Home</a> 
        <a href="/dashboard/pizza-orders">Pizza Orders</a> 
        </div> 
        <button onClick={() => signOut()}>Logout</button>
      </nav>
      <h1 className="hed">Hello, {session?.user?.name}</h1>
    </div>
  );
}
