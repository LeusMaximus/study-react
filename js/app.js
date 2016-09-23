const App = React.createClass({
  render() {
    return (
      <div className="app">
        Hello everybody, I'm the App component!
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);