import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {  CssBaseline } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Navbar />
        <Search />
      </div>
    </ThemeProvider>
  );
}

export default App;

