import useTheme from './hooks/useTheme';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const themeOptions = useTheme();

  return (
    <ThemeContext.Provider value={themeOptions}>
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
