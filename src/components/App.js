import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ListPage, PostPage, EditorPage, NotFoundPage} from '../pages';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListPage}/>
        <Route path="/page/:page" component={ListPage}/>
        <Route path="/page/:tag/:page" component={ListPage}/>
        <Route path="/post/:id" component={PostPage}/>
        <Route path="/editor" component={EditorPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
}
export default App;
