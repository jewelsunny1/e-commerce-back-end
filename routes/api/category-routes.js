const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//GET req to /api/categories
router.get('/', async (req, res) => {
  try{
    const categories= await Category.findAll({include:Product });
//includes the associated products
 
    return res.status(200).json(categories) //refers to RESOLVES
    }catch(err){//err refers to REJECT
      return res.status(500).json({message:'Internal server: Could not find all categories',error:err.message});
    }
  }
  // find all categories
  // be sure to include its associated Products
);

router.get('/:id', async (req, res) => {
  try{
    const category= await Category.findByPk(req.params.id,{
      include:[{model:Product}],//includes the associated products
    });
     //refers to RESOLVES
     return res.status(200).json(category)
  }catch(err){//err refers to REJECT
    return res.status(500).json({message:'Internal server: Could not find that category',error:err.message});
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  try{
    const category = await Category.create({
      category_name: req.body.category_name

    });
    return res.status(200).json(category)
  }catch(err){//err refers to REJECT
    return res.status(500).json({message:'Internal server: Could not create that category',error:err.message});
  }
  // create a new category
});

router.put('/:id',async (req, res) => {
  try{
    const updateCategory= await Category.update(req.body,{
      where:{
        id: req.params.id,
      },
    });
    return res.status(200).json(updateCategory)
  }catch(err){
    return res.status(500).json({message:'Internal server: Could not update category',error:err.message});
  }
  // update a category by its `id` value
});

router.delete('/:id',async (req, res) => { 
  try{
    const deleteCategory= await Category.destroy({
      where:{
        id:req.params.id,
      }
    })
    return res.status(200).json(deleteCategory)
  }catch(err){
    return res.status(500).json({message:'Internal server: Could not delete category',error:err.message});
  }
  
  // delete a category by its `id` value
});

module.exports = router;
