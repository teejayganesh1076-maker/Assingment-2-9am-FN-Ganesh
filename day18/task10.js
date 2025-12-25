const defaultSettings = {
  theme: "light",
  notifications: true
};

let userTheme = defaultSettings.theme;
userTheme = "dark";

console.log("Default:", defaultSettings);
console.log("User Theme:", userTheme);
