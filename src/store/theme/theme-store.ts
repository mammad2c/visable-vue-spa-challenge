import { ref } from "vue";

export const themes = ["light", "dark"];
type ThemeType = (typeof themes)[number];

const useThemeStore = () => {
  const selectedThem = ref<ThemeType>(
    localStorage.getItem("selectedTheme") || "system",
  );

  const setTheme = (newTheme: ThemeType) => {
    selectedThem.value = newTheme;
    const isSystem = selectedThem.value === "system";
    const baseUrl = "./themes/";
    let finalTheme = newTheme;

    if (isSystem) {
      if (
        window?.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        finalTheme = "dark";
      } else {
        finalTheme = "light";
      }
    }

    document
      .getElementById("theme-link")
      ?.setAttribute("href", `${baseUrl}${finalTheme}.css`);
    localStorage.setItem("selectedTheme", finalTheme);
  };

  return {
    selectedThem,
    setTheme,
    themes,
  };
};

const themeStore = useThemeStore();

export { themeStore };
