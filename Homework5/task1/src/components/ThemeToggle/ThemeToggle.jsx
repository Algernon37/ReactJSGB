import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice';
import style from './style/ThemeToggle.module.sass';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleToggle} className={`theme-toggle ${currentTheme}`}>
      Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
