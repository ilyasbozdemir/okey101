// themeUtils.ts
export const setCSSVariable = (variable: string, value: string): void => {
  document.documentElement.style.setProperty(variable, value);
};

export const applyLightTheme = (): void => {
  setCSSVariable("--primary-100", "#ffedd5");
  setCSSVariable("--primary-200", "#feb2b2");
  setCSSVariable("--primary-300", "#dd6b20");
  setCSSVariable("--accent-100", "#f6ad55");
  setCSSVariable("--accent-200", "#dd6b20");
  setCSSVariable("--text-100", "#1a202c");
  setCSSVariable("--text-200", "#718096");
  setCSSVariable("--bg-100", "#ffffff");
  setCSSVariable("--bg-200", "#f7fafc");
  setCSSVariable("--bg-300", "#edf2f7");
};

export const applyDarkTheme = (): void => {
  setCSSVariable("--primary-100", "#2d3748");
  setCSSVariable("--primary-200", "#4a5568");
  setCSSVariable("--primary-300", "#dd6b20");
  setCSSVariable("--accent-100", "#ed8936");
  setCSSVariable("--accent-200", "#dd6b20");
  setCSSVariable("--text-100", "#e2e8f0");
  setCSSVariable("--text-200", "#a0aec0");
  setCSSVariable("--bg-100", "#1a202c");
  setCSSVariable("--bg-200", "#2d3748");
  setCSSVariable("--bg-300", "#4a5568");
};

/*


  
  const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = (): void => {
    if (theme === 'light') {
      applyDarkTheme();
      setTheme('dark');
    } else {
      applyLightTheme();
      setTheme('light');
    }
  };

  const muiTheme = createMuiTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ChakraThemeProvider theme={chakraTheme}>
        </ChakraThemeProvider>
      </div>
    );
  };
  
  */
