import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LayoutPlayground from './components/LayoutPlayground';
import ReactVirtualPlayground from './components/ReactVirtualPlayground';
import RouterPlayground from './components/RouterPlayground';

function render() {
  ReactDOM.render(<ReactVirtualPlayground />, document.body);
}

render();


