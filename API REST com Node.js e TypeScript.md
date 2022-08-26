```json
//comands in terminal
yarn init -y
yarn add express
yarn add uuidv4
yarn add nodemailer

yarn add typescript ts-node-dev -D
yarn add @types/express -D
yarn add @types/nodemailer -D

yarn tsc --init
```

```json
//tsconfig.ts
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "allowJs": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "lib": ["ES6"],
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

```json
//package.json
{
  "scripts": {
    "start": "tsnd --transpile-only --respawn --ignore-watch node_modules src/server.ts"
  }
}
```
