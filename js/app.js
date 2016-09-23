const App = React.createClass({
  render() {
    return (
      <div className="app">
        Hello everybody, I'm the App component!
        <News />
        <Comments />
      </div>
    );
  }
});

const News = React.createClass({
  render() {
    return (
      <div className="news">
        Unfortunately, there are no news.
      </div>
    );
  }
});

const Comments = React.createClass({
  render() {
    return (
      <div className="comments">
        So no news - no comments.
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);