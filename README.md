<img src="screenshot.png">

# Bee Framework

Bee Framework is a pure JavaScript framework designed to build lightweight and efficient user interfaces (UI), ensuring optimal performance and easy development. 

## Development
```
git clone https://github.com/fitri-hy/bee-framework.git
cd bee-framework
npm install
npm start
```

## Production
- Build project: `npm run build`.
- upload the `dist` folder to your hosting service.
- Open Setup Node.js App
- Set Application startup file: `server.js`

## Using ApiService

- Import ApiService

Import ApiService from the appropriate path in any JavaScript file in your project.

`import ApiService from '../services/ApiService';`

- Use `getData` Method

Use the `getData` method to retrieve data from the given URL.

`const data = await ApiService.getData('https://example.com/api/data');`

- Error Handling (optional)

Add error handling according to your needs.

```
try {
  const data = await ApiService.getData('https://example.com/api/data');
} catch (error) {
  console.error('Failed to fetch data:', error);
}
```

## Support
- .js
- .jsx
- .tsx
- .vue

## Folder Structure:
```
BeeFramework/
├── public/
│   ├── index.html
│   └── styles.css
├── src/
│    ├── assets/
│    │    └── css/
│    │          └── global.css
│    ├── models/
│    │    └── Model.js
│    ├── routes/
│    │    └── Route.js
│    ├── services/
│    │    └── ApiService.js
│    ├── templates/
│    │    ├── components/
│    │    │    ├── BeeComponent.js
│    │    │    ├── Footer.js
│    │    │    └── Header.js
│    │    ├── pages
│    │    │    ├── Home.js
│    │    │    ├─ About.js
│    │    │    └── 404.js
│    │    └── Layout.js
│    ├── utils/
│    │    └── DomUtils.js
│    └── App.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── webpack.config.js
└── yarn.lock
```