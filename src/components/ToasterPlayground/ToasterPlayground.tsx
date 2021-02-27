import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

function ToasterPlayground() {
  const [showToast, setShowToast] = useState(true);

  const toggleToast = () => setShowToast(!showToast);

  return (
    <div className="ToastPlayground">
      <Toast show={showToast} onClose={toggleToast}>
        <Toast.Header>
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        
        <Toast.Body>
          Hello, world! This is a toast message.
        </Toast.Body>
      </Toast>

      <button className="btn btn-primary" onClick={() => setShowToast(true)}>
        Show Toast
      </button>

      <Button className="ml-2" variant="primary" onClick={() => setShowToast(false)}>
        Hide Toast
      </Button>
    </div>
  );
}

export default ToasterPlayground;
