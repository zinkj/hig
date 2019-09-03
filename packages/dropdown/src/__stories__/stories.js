export default [
  {
    description: "default",
    getProps: () => ({
      placeholder: "Select a theme",
      options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"]
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      placeholder: "Select a theme",
      options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"],
      disabled: true,
      error: false
    })
  },
  {
    description: "error",
    getProps: () => ({
      placeholder: "Select a theme",
      options: ["HIG Light Theme", "HIG Dark Blue Theme", "Matrix Theme"],
      disabled: false,
      error: true
    })
  }
];
