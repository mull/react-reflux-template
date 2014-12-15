A simple, work in progress, template for starting of a ReactJS + Flux project with one clear goal: *no awful grunt or bower.*

## How to use
Use either `watch:js`, `watch:css` or `watch` to automatically build your changes as you make changes to your code. `watch` combines the two.

```
npm run watch:js
```

Build the entire project using `build`, `build:js` or `build:css`. `build` combines the two.

```
npm run build
```

Start the server with `start`, which hosts a simple express server at http://localhost:4000 

```
$ npm start
Starting server
Now listening at http://localhost:4000
```


## How to contribute
Make your changes in another branch (`git checkout -b feature/your-feature-name`) and submit a PR to this repository.

## TODO
- envify for environments (i.e. development|staging|production etc)
- better build process, with sourcemap for production & non-minified JS for development & CDN
- test suite template
- possibly server side generated templates for SEO
