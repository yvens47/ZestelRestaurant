export function indexOfProduct(product, array) {
  var pos = null; // position of items
  array.forEach(function (item, index) {
    if (item._id === product._id) {
      pos = index;
      return;
    }
  });

  return pos;
}
export function getCartTotal(copyState) {
  var total = 0;
  copyState.items.forEach(function (item) {
    total += item.price * item.quantity;
  });
  copyState.total = total;
  //return total;
}

export function addItem(product, array) {
  if (!product.quantity) {
    product.quantity = 1;
  }
  var position = indexOfProduct(product.id);
  if (position === null) {
    array.push(product);
    // this.carCount += 1;
  } else {
    array[position].quantity += 1;
    // this.carCount += 1;
  }
}
