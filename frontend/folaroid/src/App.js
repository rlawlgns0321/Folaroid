import './index.css';
import SignUp from './introduction/base_introduction';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <SignUp></SignUp>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
