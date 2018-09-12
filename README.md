# React - TypeScript - Parcel template

## Create from scratch

The only requirement is Node.js

```bash
npm i -g yarn
yarn init -y
yarn add react react-dom
yarn add --dev typescript parcel-bundler $types/react $types/react-dom
```

## TypeScript configuration

Add tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "react",
  }
}
```

## Visual Studio Code configuration

Add 'typescript.tsdk' under .vscode/settings.json

```json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Add entry index.html file

The only requirement is a script tag pointing to an entry module like:

```html
...
<script src="./src/index.tsx"></script>
...
```

and optionally placeholder *div* tag like

```html
<div id="app"></div>
```

## Enable CSS Modules

Add .postcssrc

```json
{
  "modules" : true
}

```

## Enable SASS support

```bash
yarn add --dev node-sass
```

## Configure Git

Add .gitignore

```gitignore
# npm
node_modules

# parcel.js
dist
.cache

```
