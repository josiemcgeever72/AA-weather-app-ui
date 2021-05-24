import React from 'react';
import { CityInfoPage } from './containers/CityInfoPage';
import { labels } from './util/UIText';

export class App extends React.Component<{}> {

  public render() {
    return (
        <div className="container">
            <div className="jumbotron text-center">
                <h1>{labels.appName}</h1>
            </div>
          <CityInfoPage/>
        </div>
    );
  }
}

export default App;
