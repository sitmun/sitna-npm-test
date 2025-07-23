# Sitna Npm Test

This project was built using [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

The goal of this small repository is to provide a basic template for a web application built in Typescript 
and Angular CLI from which the API Sitna is invoked. The main problem 
encountered was installing the API (version 4.6.0) using NPM and using it within a Typescript program, since 
the library does not have the type definition required by the language.

To install the library, the steps indicated in the official [API](https://sitna.navarra.es/api/doc/) documentation 
were followed.

To avoid syntax errors, a simple typing file has been generated with the library exports, which allows it to be 
used from a Typescript file, but when making an invocation or call to any object in the library, it is not 
possible to build the application due to memory problems (possible infinite loop in type inference).
