import { render, screen, fireEvent, waitFor } from '@solidjs/testing-library';
import { describe, it, expect } from 'vitest';
import BudgetPlanner from './BudgetPlanner';

describe('BudgetPlanner', () => {
  it('renders the Budget Planner heading', async () => {
    render(() => <BudgetPlanner />);
    await waitFor(() => expect(screen.getByText('Budget Planner')).toBeInTheDocument());
  });

  it('shows initial balance as 0', async () => {
    render(() => <BudgetPlanner />);
    await waitFor(() => expect(screen.getByText('Balance: 0')).toBeInTheDocument());
  });

  it('updates income and calculates balance', async () => {
    render(() => <BudgetPlanner />);
    const incomeInput = await screen.findByLabelText(/Income:/i);
    fireEvent.input(incomeInput, { target: { value: '1000' } });
    await waitFor(() => expect(screen.getByText('Balance: 1000')).toBeInTheDocument());
  });

  it('updates expense and calculates balance', async () => {
    render(() => <BudgetPlanner />);
    const expenseInput = await screen.findByLabelText(/Expense:/i);
    fireEvent.input(expenseInput, { target: { value: '500' } });
    await waitFor(() => expect(screen.getByText('Balance: -500')).toBeInTheDocument());
  });

  it('updates both income and expense and calculates balance', async () => {
    render(() => <BudgetPlanner />);
    const incomeInput = await screen.findByLabelText(/Income:/i);
    const expenseInput = await screen.findByLabelText(/Expense:/i);
    fireEvent.input(incomeInput, { target: { value: '1200' } });
    fireEvent.input(expenseInput, { target: { value: '200' } });
    await waitFor(() => expect(screen.getByText('Balance: 1000')).toBeInTheDocument());
  });
});
