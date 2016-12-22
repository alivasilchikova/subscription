var News = React.createClass({
    render: function() {
        return (
            <div className="news">
                К сожалению, новостей нет.
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                Новостей нет, комментировать нечего.
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем привет, я компонент App! Я умею отображать новости.
                <News />
                <Comment/>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);