export default [
  {
    description: "default",
    getProps: () => ({})
  },
  {
    description: "disabled",
    getProps: () => ({
      disabled: true,
      error: false
    })
  },
  {
    description: "error",
    getProps: () => ({
      disabled: false,
      error: true
    })
  }
];
