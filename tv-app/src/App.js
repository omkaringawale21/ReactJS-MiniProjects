import React from 'react';
import TvApp from './Components/TvContainer/TvApp';
import ShowsState from '../src/Context/Shows/ShowsState';
import AlertsState from '../src/Context/Alerts/AlertsState';

const App = () => {
  return(
    <ShowsState>
      <AlertsState>
        <TvApp />
      </AlertsState>
    </ShowsState>
  )
}

export default App;