import './ThemeSelector.css';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeSelector() {
  const { changeColor } = useTheme();

  const themeColors = ['var(--color-primary)', 'var(--color-primary-2)', 'var(--color-primary-3)'];

  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div key={color} onClick={() => changeColor(color)} style={{ background: color }} />
        ))}
      </div>
    </div>
  );
}
