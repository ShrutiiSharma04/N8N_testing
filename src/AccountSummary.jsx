import { createSignal } from 'solid-js';

function AccountSummary() {
  const [balance, setBalance] = createSignal(1000);
  const [interest, setInterest] = createSignal(50);
  const [deducted, setDeducted] = createSignal(200);
  const [added, setAdded] = createSignal(300);

  return (
    <div>
      <h2>Account Summary</h2>
      <div>Account Balance: ${balance()}</div>
      <div>Interest: ${interest()}</div>
      <div>Money Deducted: ${deducted()}</div>
      <div>Money Added: ${added()}</div>
    </div>
  );
}

export default AccountSummary;