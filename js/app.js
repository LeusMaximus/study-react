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
        <h3>News</h3>
        <News data={my_news} />{/* Add some data property*/}
        {/*<Comments />*/}
      </div>
    );
  }
});

const News = React.createClass({
  render() {
    const data = this.props.data;
    const dataSize = data.length;

    const newsTemplate = (() => {
      if (dataSize) {
        return data.map((item, index) => (
          <div key={index}>
            <Article data={item} />
          </div>
        ))
      }

      return <p>Unfortunately, there are no news.</p>
    })();

    return (
      <div className="news">
        {newsTemplate}
        <strong className={'news__count ' + (dataSize ? '' : 'none')}>Total news: {dataSize}</strong>
      </div>
    );
  }
});

const Article = React.createClass({
  render() {
    const data = this.props.data;

    return (
      <div className="article">
        <p className="news__author">{data.author}:</p>
        <p className="news__text">{data.text}</p>
      </div>
    )
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