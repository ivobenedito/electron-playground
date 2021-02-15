import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ContextPlayground from './components/ContextPlayground';
import LayoutPlayground from './components/LayoutPlayground';
import ReactVirtualPlayground from './components/ReactVirtualPlayground';
import RouterPlayground from './components/RouterPlayground';

function render() {
  ReactDOM.render(<ContextPlayground />, document.body);
}

render();


