import React from "react";
import { Link } from "gatsby";

class Recommandations extends React.Component {
  constructor(props) {
    super(props);
    this.fetchRecommandations = this.fetchRecommandations.bind(this);
    this.state = {
      products: [],
      isLoaded: false,
    };
  }

  fetchRecommandations() {

      fetch('http://localhost:3000/api/recommandation/'+this.props.id,{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          products: result
        });
      });
  }

  componentDidMount() {
    this.fetchRecommandations();
  }

  render() {
    const { products } = this.state;
    if (!this.state.isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div>
          {products.map(product => (
            <div key={product.id}>
              <Link
                to={`/${product.id}`}
              >
              <img src={`https:${product.photo}`} alt={product.id} style={{ width: `200px`, float: `left` }}/>
              </Link>
            </div>
          ))}
        </div>
      );
    }
  }
}

/*
const Recommandations = (props) => {
  return (
    <div>
      {props.id}
    </div>
  )
}*/

export default Recommandations;
