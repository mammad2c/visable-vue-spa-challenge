import { ref } from "vue";

export const themes = ["system", "light", "dark"];
type ThemeType = (typeof themes)[number];

const useThemeStore = () => {
  const selectedThem = ref<ThemeType>("system");

  const setTheme = (newTheme: ThemeType) => {
    selectedThem.value = newTheme;
  };

  return {
    selectedThem,
    setTheme,
    themes,
  };
};

const themeStore = useThemeStore();

export { themeStore };
