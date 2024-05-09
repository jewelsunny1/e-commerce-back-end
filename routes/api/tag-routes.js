const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const allTags= await Tag.findAll({
      include:[{model:Product}],
    });
    return res.status(200).json(allTags) //refers to RESOLVES
  }catch(err){
    return res.status(500).json({message:'Internal server: Could not find all tags',error:err.message});
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try{
  const tagId= await Tag.findByPk(req.params.id,{
    include:Product
  })
  return res.status(200).json(tagId)
} catch(err){
  return res.status(500).json({message:'Internal server: Could not find that tag',error:err.message});
  
}
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try{
    const createTag= await Tag.create({
      tag_name: req.body.tag_name
    });

  return res.status(200).json(createTag)
  }catch(err){
    return res.status(500).json({message:'Internal server: Could create that tag',error:err.message});
    
  }

  // create a new tag
});

router.put('/:id', async (req, res) => {
  try{
    const updateTag= await Tag.update(req.body,{
where:{
  id:req.params.id,
}
    });
    return res.status(200).json(updateTag)
  }catch(err){
    return res.status(500).json({message:'Internal server: Could update that tag',error:err.message});
    
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const deleteTag= await Tag.destroy({
      where:{
        id:req.params.id
      }
    })
    return res.status(200).json(deleteTag)
  }catch(err){
    return res.status(500).json({message:'Internal server: Could not delete tag',error:err.message});
  }
  // delete on tag by its `id` value
});

module.exports = router;
