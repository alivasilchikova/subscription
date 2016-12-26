class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        var r = this.state.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
        if (!r){
            alert('Уверены что email введен верно?');
            return false;
        }
        else {
            $.ajax({
                    type: "POST",
                    url: "/post",
                    data: this.state,
                    success: function () {
                        alert("Данные отправлены");
                    }
                }
            )
        }

    event.preventDefault();
    }

    render() {
        return (
            <div className="block">
            <form onSubmit={this.handleSubmit}>

                <label >
                    Enter your e-mail:
                    <input type="text" value={this.state.value} className="textbox" placeholder="example@example.com" onChange={this.handleChange} />
                    <input type="submit" value="Subscribe" className="button" />
                </label>
            </form>
            </div>
        );
    }
}

ReactDOM.render(
    <Subscription />,
    document.getElementById('root')
);