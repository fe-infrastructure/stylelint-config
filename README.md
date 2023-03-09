# stylelint

stylelint config presets

## Install

```shell
pnpm i stylelint prettier @eye-socket/stylelint-config -D
```

## Usage
1. 配置 stylelint 配置文件
```json
// .stylelintrc
{
  "extends": "@eye-socket/stylelint-config"
}
```
2. 配置 vscode 保存自动格式化

```json
// .vscode/settings.json
{
  "stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss",
    "html"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```
