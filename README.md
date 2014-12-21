A simple, work in progress, template for starting of a ReactJS + reflux project with these goals:

1. No bower, gulp or other unnecessary tool that only adds complexity.
2. Clone & go: Just delete the example/reference code and you're ready to build.
3. SASS instead of LESS. SASS syntax is just too beautiful.

## Get started
For the JS stuff you need to have node & npm installed. All you should need to do from there is run `npm install` and you're ready to go.

SASS uses a Ruby gem to transform the SASS code into CSS. I recommend using rvm/rbenv or a similar tool to avoid having to install gems globally (which requires root privileges.) Once you're set up all you need is a `bundle install` and you should be ready to go.

If `watch` or `build` fails below, try running either the `:js` or `:css` part and see which one fails. Open an issue if you believe it's an error on my part.

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
