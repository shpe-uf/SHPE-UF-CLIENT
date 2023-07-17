# SHPE UF Client

This repository is the frontend code for the [SHPE UF website](https://membershpeuf.netlify.app).
SHPE, also known as the Society of Hispanic Professional Engineers, is a Hispanic community at the
University of Florida that strives to reach its fullest potential by impacting the world through STEM
awareness, access, support and development. The goal of this website is to allow our community easy
access to several professional, academic and communal resoures.

# Setup

## git clone

Using the https link under "Code", downloads the repository's code onto your personal computer.

## npm install

Installs the node_modules folder needed to run the client.

## npm start

Runs our client. In development, we use localhost:3000 as our client host and in production we use the
hosting service [Netlify](https://www.netlify.com) to run our client
[SHPE UF](https://membershpeuf.netlify.app).

We run our server code separately as seen [here](https://github.com/shpe-uf/SHPE-UF-SERVER) on
[Heroku](https://www.heroku.com/). Instructions to run the server are explained in that repository.
In Apolloprovider.js, you can change the `httplink` to specify if you'd like to recieve information
from Heroku.

## Build scripts

Build scripts are not included in this readme beacause the build is deployed on
[Netlify](https://www.netlify.com), which runs these for us.

# Repository Guidelines

The majority of our code is set up within the `src` folder. Inside, we have react components, public
and private pages, Apollo Provider, App.js and more. Each is explained further below.

## Components

The components folder houses react components that are used within each web page. Each piece of every
page that serves user interaction is separated into its own component. Multiple components are often
used within each page. This separation of components allows for better modality and reability within
our files.

## Public and Private Pages

The pages folder includes our public and private pages. The public folder contains pages that users
can interact with without needing to sign in. The files outside of the public folder are our private
pages. These include our admin accessible pages and our general signed in user pages. Users need to
create an account and sign in to access the majority of our internal resoures.

## Apollo Provider

Apollo Provider is a file within `src` that connects our backend uri to our frontent using the
[Apollo Client](https://www.apollographql.com/docs/react/). The file exports the Apollo Provider
component with our client and the App.js.

## App.js

The App.js file defines all of our pages and creates a routing mechanism to each. Routes are
defined depending on accessibility.

## Other

The Assets folder holds fonts and images that are used across the website.

Outside of `src`, package.json and package-lock.json are used to retain the open sourced
dependencies our project utilizes and the version to download when running npm install.
