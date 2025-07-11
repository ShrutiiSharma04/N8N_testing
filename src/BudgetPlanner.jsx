import { createSignal, onMount, Show } from 'solid-js';

function BudgetPlanner() {
  const [income, setIncome] = createSignal(0);
  const [expense, setExpense] = createSignal(0);
  const [mounted, setMounted] = createSignal(false);

  onMount(() => {
    setMounted(true);
  });

  return (
    <Show when={mounted()}>
      <div>
        <h2>Budget Planner</h2>
        <div>
          <label>
            Income:
            <input
              type="number"
              aria-label="Income"
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
              aria-label="Expense"
              value={expense()}
              onInput={e => setExpense(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <strong>Balance: {income() - expense()}</strong>
        </div>
      </div>
    </Show>
  );
}

export default BudgetPlanner;
