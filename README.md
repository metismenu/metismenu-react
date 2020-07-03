# @metismenu/react
> react.js component for metismenu

## Getting started
### Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install @metismenu/react
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add @metismenu/react
```

Add project file to metismenu

```js
import MetisMenu from '@metismenu/react';

// import MetisMenu css
import 'metismenujs/dist/metismenujs.css';
```

## Usage

1. Create SideBar component
  ```jsx
  // pages/SideBar.jsx
  import React from 'react'
  import { Link, NavLink } from 'react-router-dom'
  import MetisMenu from '@metismenu/react';
  import 'metismenujs/dist/metismenujs.css';

  const SidebarNav = () => {
      return (
        <React.Fragment>
          <MetisMenu>
            <li><NavLink to="/" exact>Home</NavLink></li>
              <li>
                <Link to="#" className="has-arrow">Other Pages</Link>
                <ul>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow">External Pages</Link>
                <ul>
                  <li><a href="https://github.com/onokumus/metismenujs" target="_blank" rel="noopener noreferrer">metismenujs</a></li>
                  <li><a href="https://github.com/onokumus/metismenu" target="_blank" rel="noopener noreferrer">metismenu jquery</a></li>
                </ul>
              </li>
          </MetisMenu>
        </React.Fragment>
      )
  }

  export default SidebarNav
  ```
 
2. Call Component to App

```js
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SidebarNav from './pages/SidebarNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <aside className="sidebar">
          <SidebarNav />
        </aside>
        <div className="content">
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

## Properties

#### toggle
Type: `Boolean`
Default: `true`

For auto collapse support.

```html
 <MetisMenu toggle={false}>
 ...
 </MetisMenu>
```

#### triggerElement
Type: `html tag`
Default: `a`

```html
 <MetisMenu triggerElement="h2">
 ...
 </MetisMenu>
```

#### parentTrigger
Type: `html tag`
Default: `li`

```html
 <MetisMenu parentTrigger="div">
 ...
 </MetisMenu>
```

#### subMenu
Type: `html tag`
Default: `ul`

```html
 <MetisMenu subMenu="div">
 ...
 </MetisMenu>
```

## Example Repo
[https://github.com/onokumus/metismenu-react-example](https://github.com/onokumus/metismenu-react-example)

## Demo
[https://onokumus.com/metismenu-react-example/](https://onokumus.com/metismenu-react-example/)

## About

### Related projects
- [metismenu](https://www.npmjs.com/package/metismenu): A jQuery menu plugin | [homepage](https://github.com/onokumus/metismenu#readme "A jQuery menu plugin")
- [metismenujs](https://www.npmjs.com/package/metismenujs): MetisMenu with Vanilla-JS  | [homepage](https://github.com/onokumus/metismenujs#readme "MetisMenu with Vanilla-JS")

### Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Author
**Osman Nuri Okumus**
+ [GitHub Profile](https://github.com/onokumus)
+ [Twitter Profile](https://twitter.com/onokumus)
+ [LinkedIn Profile](https://linkedin.com/in/onokumus)

### License
Copyright © 2020, [Osman Nuri Okumus](https://github.com/onokumus).
Released under the [MIT License](LICENSE).