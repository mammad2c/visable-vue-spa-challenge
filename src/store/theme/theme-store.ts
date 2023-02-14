import { ref } from "vue";
import dark from "@/assets/themes/dark.css?inline";
import light from "@/assets/themes/light.css?inline";

const themeFiles: Record<string, string> = {
  dark,
  light,
};

export const themes = ["light", "dark"];
type ThemeType = (typeof themes)[number];

const getTheme = (
  theme: ThemeType,
): { themeContent: string; themeColor: string } => {
  const isSystem = theme === "system";

  if (isSystem) {
    if (
      window?.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return {
        themeColor: "dark",
        themeContent: dark,
      };
    } else {
      return {
        themeColor: "light",
        themeContent: light,
      };
    }
  }

  return {
    themeColor: theme,
    themeContent: themeFiles[theme],
  };
};

const appendThemeStyle = (themeContent: string, themeColor: ThemeType) => {
  let style = document.querySelector("#theme-style");
  const themeContentNode = document.createTextNode(themeContent);

  if (style && style.lastChild) {
    style.removeChild(style.lastChild);
  } else {
    style = document.createElement("style");
    style.id = "theme-style";
    document.head.appendChild(style);
  }

  style.appendChild(themeContentNode);
  localStorage.setItem("selectedTheme", themeColor);
};

const useThemeStore = () => {
  const selectedThem = ref<ThemeType>(
    localStorage.getItem("selectedTheme") || "system",
  );

  if (selectedThem.value === "system") {
    const { themeColor } = getTheme(selectedThem.value);
    selectedThem.value = themeColor;
  }

  const setTheme = (newTheme: ThemeType) => {
    const { themeContent, themeColor } = getTheme(newTheme);
    selectedThem.value = themeColor;
    appendThemeStyle(themeContent, themeColor);
  };

  const loadTheme = () => {
    const finalTheme = getTheme(selectedThem.value);
    appendThemeStyle(finalTheme.themeContent, finalTheme.themeColor);
  };

  return {
    loadTheme,
    selectedThem,
    setTheme,
    themes,
  };
};

const themeStore = useThemeStore();

export { themeStore };
