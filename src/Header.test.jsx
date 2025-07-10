import { render, screen } from '@solidjs/testing-library';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import { onMount } from 'solid-js';

describe('Header', () => {
  it('renders the welcome message', () => {
    onMount(() => {
      render(() => <Header />);
      expect(screen.getByRole('heading', { name: 'Welcome to Our Company' })).toBeInTheDocument();
    });
  
  });
});
