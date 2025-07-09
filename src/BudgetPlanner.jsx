import { createSignal } from 'solid-js';

function BudgetPlanner() {
  const [income, setIncome] = createSignal(0);
  const [expense, setExpense] = createSignal(0);

  return (
    <div>
      <h2>Budget Planner</h2>
      <div>
        <label>
          Income:
          <input
            type="number"
            value={income()}
            onInput={e => setIncome(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Expense:
          <input
            type="number"
            value={expense()}
            onInput={e => setExpense(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <strong>Balance: {income() - expense()}</strong>
      </div>
    </div>
  );
}

export default BudgetPlanner;