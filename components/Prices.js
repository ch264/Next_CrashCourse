

class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {

        // cannot map through bpi data because it is returned as an object and not as an array
        let list = '' ;

        if(this.state.currency === 'USD') {
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi[this.state.currency].description} : <span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span> <strong>{this.props.bpi[this.state.currency].rate}</strong>
            </li>
        } else if (this.state.currency === 'GBP') {
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi[this.state.currency].description} : <span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span> <strong>{this.props.bpi[this.state.currency].rate}</strong>
            </li>
        } else if (this.state.currency === 'EUR') {
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi[this.state.currency].description} : <span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span> <strong>{this.props.bpi[this.state.currency].rate}</strong>
            </li>
        }

        return (
            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <br/>
                <select onChange={ e => this.setState({currency: e.target.value})} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        )
    }
}

export default Prices;