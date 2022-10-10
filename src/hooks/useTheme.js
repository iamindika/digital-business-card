import { useState } from "react";

const useTheme = () => {
  const [ theme, setTheme ] = useState('dark');
  
  const toggleTheme = () => {
    setTheme((theme) => (
      theme === 'dark' ? 'light' : 'dark'
    ))
  }

  return {
    theme,
    toggleTheme
  }
}

export default useTheme;