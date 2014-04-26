React-article
============================

Hello. This repo include code for my article on habrahabr. 

##Installation
Before you run any code do some preparation:
###1. Install dependencies:

```npm i```

###2. install [gulp](https://github.com/gulpjs/gulp) globally by:

```npm i -g gulp```

###3. Run gulp by:

``` gulp ```

##Local gulp:
If you want use gulp local then: 

###1. *nix-like system that support symlinks just run from root of this project: 

``` ./gulp ``` 

###2. Without symlinks execute:

``` ./node_modules/.bin/gulp ```



##What magic will occur:
####1. Build project. 
####2. Watch src file for changes and build project after all. 
####3. Setup local server on: ```http:\\localhost:9002```.
####4. Open browser and enjoy React.
