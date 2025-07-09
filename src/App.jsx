import logo from './logo.svg';
import styles from './App.module.css';
import Header from './Header'; // Add this import
import BudgetPlanner from './BudgetPlanner';

const App = () => {
  return (
    <div class={styles.App}>
      <Header /> {/* Add this line */}
      <BudgetPlanner /> {/* Add this line */}
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          hello <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;