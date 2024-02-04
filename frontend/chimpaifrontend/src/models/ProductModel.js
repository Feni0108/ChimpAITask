class ProductModel {
  id;
  name;
  productNumber;
  color;
  standardCost;
  listPrice;
  size;
  productCategoryId;

  constructor(
    id,
    name,
    productNumber,
    color,
    standardCost,
    listPrice,
    size,
    productCategoryId
  ) {
    this.id = id;
    this.name = name;
    this.productNumber = productNumber;
    this.color = color;
    this.standardCost = standardCost;
    this.listPrice = listPrice;
    this.size = size;
    this.productCategoryId = productCategoryId;
  }
}

export default ProductModel;
