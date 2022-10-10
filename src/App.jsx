import useTheme from './hooks/useTheme';
import Header from './components/Header';
import Main from './components/Main';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const themeOptions = useTheme();

  return (
    <ThemeContext.Provider value={themeOptions}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  )
}

export default App
