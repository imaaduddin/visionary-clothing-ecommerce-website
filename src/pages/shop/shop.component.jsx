import React from 'react';

import SHOP_DATA from "../shop/shop.data.js"

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    return <div>Shop Page</div>;
  }
}

export default ShopPage;