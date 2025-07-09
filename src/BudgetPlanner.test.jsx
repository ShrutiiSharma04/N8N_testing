import { render, fireEvent, screen } from 'solid-testing-library';
import BudgetPlanner from './BudgetPlanner';
import { describe, it, expect } from 'vitest';

describe('BudgetPlanner', () => {
  it('renders Budget Planner', () => {
    render(() => <BudgetPlanner />);
    expect(screen.getByText(/Budget Planner/i)).toBeInTheDocument();
  });

  it('updates income input and calculates balance', async () => {
    render(() => <BudgetPlanner />);
    const incomeInput = screen.getByLabelText(/Income/i);
    fireEvent.input(incomeInput, { target: { value: '1000' } });
    expect(screen.getByText(/Balance: 1000/i)).toBeInTheDocument();
  });

  it('updates expense input and calculates balance', async () => {
    render(() => <BudgetPlanner />);
    const expenseInput = screen.getByLabelText(/Expense/i);
    fireEvent.input(expenseInput, { target: { value: '500' } });
    expect(screen.getByText(/Balance: -500/i)).toBeInTheDocument();
  });
});