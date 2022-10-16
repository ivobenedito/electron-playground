import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import "xterm/css/xterm.css";
import { ipcRenderer } from 'electron';

function TerminalPlayground() {
  const term = new Terminal();
  const termEl = useRef(null);

  useEffect(() => {
    console.log(ipcRenderer.sendSync('sync-message', 'ping')); // prints pong

    ipcRenderer.on('async-reply', (event, arg) => {
      console.log(arg); // prints pong
    });
    
    ipcRenderer.send('async-message', 'ping');

    term.open(termEl.current);
    term.write("Hello from the app side");

    term.onData(e => {
      term.write(e);
    });
  }, []);

  return (
    <div className="TerminalPlayground">
      OLA MUNDO Terminal Playground!

      <div ref={termEl} className="terminal">
        asdsadsa
      </div>
    </div>
  );
}

export default TerminalPlayground;
