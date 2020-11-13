# Smart House

Smart House is our FIAP - Disrupt21 project.

It's an smart house application, managing rooms and devices and theirs status.

### Prerequisites

[NodeJs](https://nodejs.org/)\
[Expo](https://expo.io/)\
Android/iOS Emulator or Physical Device


### Installing

Install depencies on server / mobile repositories
```
cd server/
npm i server

cd mobile/
npm i
```

If on Windows running Android Emulator, connect your localhost with emulator locahost
```
adb reverse tcp:3333 tcp:3333

```
Start the local server

```
npm run dev --prefix server
```

Run on Expo

```
npm start --prefix mobile
```

Tests for Server
```
cd server/
npm test
```


## Built With

* [TypeScript](https://www.typescriptlang.org/) - JavaScript that scales. 
* [Expo](https://expo.io/) - The fastest way to build an app


## Authors

* **Lucas Dib** - [LucasDibz](https://github.com/LucasDibz)
* **Leonardo Santos** - [Leonnard19](https://github.com/Leonnard19)
* **Luiz Barone** - [BaroneLuiz](https://github.com/BaroneLuiz)
* **Fabio Monteiro** - [Monteifa](https://github.com/Monteifa)