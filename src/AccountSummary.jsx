import { createSignal } from 'solid-js';

interface BudgetPlannerProps {
  initialBudget?: number;
}

function BudgetPlanner(props: BudgetPlannerProps) {
  const [budget, setBudget] = createSignal(props.initialBudget || 20000);
  const [expenses, setExpenses] = createSignal([]);
  const [expenseName, setExpenseName] = createSignal("");

  return (
    <div>
      <h2>Budget Planner</h2>
      <div>Budget: ${budget()}</div>
    </div>
  );
}

export default BudgetPlanner;