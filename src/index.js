import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Tracker from '@openreplay/tracker';

const tracker = new Tracker({
  projectKey: "UcxHApMSVkESb4JabBCI",  
});
tracker.start();
tracker.setUserID('john@doe.com');
ReactDOM.render(<App />, document.getElementById("root"));