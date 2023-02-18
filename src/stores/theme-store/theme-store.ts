import { ref } from "vue";
import dark from "@/assets/themes/dark.css?inline";
import light from "@/assets/themes/light.css?inline";

const themeFiles: Record<string, string> = {
  dark,
  light,
};

export const themes: ["light", "dark"] = ["light", "dark"];
type ThemeType = "dark" | "light";

const getTheme = (
  theme: ThemeType | "system",
): { themeContent: string; themeColor: ThemeType } => {
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

  if (themeColor === "dark") {
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.remove("dark");
  }

  document.documentElement.classList.add(themeColor);

  style.appendChild(themeContentNode);
  localStorage.setItem("selectedTheme", themeColor);
};

const useThemeStore = () => {
  const selectedTheme = ref<ThemeType>(
    getTheme((localStorage.getItem("selectedTheme") as ThemeType) || "system")
      .themeColor,
  );

  const setTheme = (newTheme: ThemeType | "system") => {
    const { themeContent, themeColor } = getTheme(newTheme);
    selectedTheme.value = themeColor;
    appendThemeStyle(themeContent, themeColor);
  };

  const loadTheme = () => {
    const finalTheme = getTheme(selectedTheme.value || "system");
    appendThemeStyle(finalTheme.themeContent, finalTheme.themeColor);
  };

  return {
    headerHeight: 96,
    loadTheme,
    selectedTheme,
    setTheme,
    themes,
  };
};

const themeStore = useThemeStore();

export { themeStore };
