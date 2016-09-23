let my_news = [
  {
    author: 'Sasha Pechkin',
    text: 'On Thursday, the fourth of...',
  },
  {
    author: 'Just Vasya',
    text: 'I think that $ shoud be cost 35',
  },
  {
    author: 'Guest',
    text: 'Free. Download. The best site - http://localhost:3000',
  },
];

const App = React.createClass({
  render() {
    return (
      <div className="app">
        Hello everybody, I'm the App component!
        <News data={my_news} />{/* Add some data property*/}
        <Comments />
      </div>
    );
  }
});

const News = React.createClass({
  render() {
    const data = this.props.data;

    const newsTemplate = data.map((item, index) => (
        <div key={index}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    )

    console.log(newsTemplate)

    return (
      <div className="news">
        {newsTemplate}
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
  <App data={{name: 'max'}} />,
  document.getElementById('root')
);