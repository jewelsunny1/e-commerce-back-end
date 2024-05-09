// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category 
Product.belongsTo (Category,{
  foreignKey:'category_id' //refers to id of Category model
});
// Categories have many Products
//category is parent. Product is child. foreign key is of child product
Category.hasMany(Product,{
  foreignKey:'category_id',//refers to category_id of Product
  onDelete:'SET NULL'//means when we delete category the proct doesnt disappear it can be reassigned to diff category
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany (Tag,{
  through:ProductTag,
  foreignKey:'product_id',
  onDelete:'CASCADE'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through:ProductTag,
  foreignKey:'tag_id',//is foreign key necessary
  onDelete:'CASCADE'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
