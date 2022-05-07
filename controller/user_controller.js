const user_model = require('../model/user_model');
async function get_user_list(req,res,next)
{
    var result = await user_model.get_user_list();
        if(result != 0)
        res.locals.result = result;
        else 
        res.locals.result = 0;
        next()
}
async function save_user(req,res,next)
{
    var inputPost = req.body.data;
    if(inputPost.first_name != undefined && inputPost.last_name != undefined && inputPost.email != undefined && inputPost.age != undefined){
        var result = await user_model.save_user(inputPost.first_name,inputPost.last_name,inputPost.email,inputPost.age);
        if(result != 0)
        res.locals.result = result;
        else 
        res.locals.result = 0;
        next()
    }
    else{
        res.locals.result = "param missing";
        next()
    }
}
async function get_user_by_id(req,res,next)
{
    var id = req.params.id;
    var result = await user_model.get_user_by_id(id);
        if(result != 0)
        res.locals.result = result[0];
        else 
        res.locals.result = 0;
        next()
}
async function update_user(req,res,next)
{
    var inputPost = req.body.data;
    var id = req.params.id;
    if(id != undefined && inputPost.first_name != undefined && inputPost.last_name != undefined && inputPost.email != undefined && inputPost.age != undefined){
        var result = await user_model.update_user(id,inputPost.first_name,inputPost.last_name,inputPost.email,inputPost.age);
        if(result != 0)
        res.locals.result = result;
        else 
        res.locals.result = 0;
        next()
    }
    else{
        res.locals.result = "param missing";
        next()
    }
}
async function delete_user(req,res,next)
{
    var id = req.body.id;
    if(id != undefined){
        var result = await user_model.delete_user(id);
        if(result != 0)
        res.locals.result = result;
        else 
        res.locals.result = 0;
        next()
    }
    else{
        res.locals.result = "param missing";
        next()
    }
}
module.exports = {
    get_user_list,
    save_user,
    get_user_by_id,
    update_user,
    delete_user
}