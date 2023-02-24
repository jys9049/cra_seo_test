import { Route } from 'react-router';

function App() {
  return (
    <Route>
      <Route path='/' />
      <Route path='/sub' />
      <Route path='/sub2' />
    </Route>
  );
}

export default App;
