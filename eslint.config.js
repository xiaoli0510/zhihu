export default [
  {
      rules: {
        "no-console": "warn", // 将console.log警告级别设置为警告
        "indent": ["error", 2], // 强制使用2个空格缩进
      },
      languageOptions: {
        ecmaVersion: 5,
        sourceType: "module"
      },
      ignores: [
        ".config/*",
        "node_modules/*",           
      ],
  }
];