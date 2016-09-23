let my_news = [
  {
    author: 'Sasha Pechkin',
    text: 'On Thursday, the fourth of...',
    bigText: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
  },
  {
    author: 'Just Vasya',
    text: 'I think that $ shoud be cost 35',
    bigText: 'and euro 42',
  },
  {
    author: 'Guest',
    text: 'Free. Download. The best site - http://localhost:3000',
    bigText: 'Actually fee, you just need to read the very long license agreement',
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
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
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
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired,
    })
  },
  getInitialState() {
    return {
      visible: false
    };
  },
  readmoreClick(e) {
    e.preventDefault();
    this.setState({visible: true});
  },
  render() {
    const data = this.props.data;
    const visible = this.state.visible;
    const more = visible ?
      null :
      <a
        onClick={this.readmoreClick}
        href="#"
        className="news__readmore">
        More...
      </a>;

    const bigText = visible ?
      <p
        className="news__big-text">
        {data.bigText}
      </p> :
      null;

    return (
      <div className="article">
        <p className="news__author">{data.author}:</p>
        <p className="news__text">{data.text}</p>
        {more}
        {bigText}
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
  <App />,
  document.getElementById('root')
);