let productModel = require('../model/product-model');

exports.addItem = (req,res)=>{
    let p_product_type = req.body.product_type;
    let p_product_name = req.body.product_name;
    let p_product_price = req.body.product_price;
    let p_unit = req.body.unit;
    let p_quantity = req.body.quantity;
    let p_user_id = req.body.user_id;


    //formate to object
    let iOject = {
        product_type: p_product_type,
        product_name: p_product_name,
        product_price: p_product_price,
        unit: p_unit,
        quantity: p_quantity,
        user_id: p_user_id,
    }
    
    //add to model
    itemModel.add(iOject);
    res.json(req.body);
}