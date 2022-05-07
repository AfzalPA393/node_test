var express = require('express');
var router = express.Router();
const userCtrl = require('../controller/user_controller');
const { check, validationResult } = require('express-validator');
/* GET users listing. */
router.get('/', userCtrl.get_user_list,function(req, res, next) {
    if(res.locals.result == 0 )
    {
        var status = {
            'status' : false,
            'message' :"No result Found",
            result: []
            }
    }
    else{
        var status = {
            'status' : true,
            'message' :"succesfull response",
            result: res.locals.result,
            }
    }
    
        res.status(200).json(status);
});
router.post('/save-user',userCtrl.save_user,function(req, res, next) {
    let errors = validationResult(req);
   
   if(res.locals.result == 0 )
    {
        var status = {
            'status' : false,
            'message' :"Something went wrong",
            result: []
            }
    }else if(res.locals.result == "param missing" )
    {
        var status = {
            'status' : false,
            'message' :"validation error",
            result: []
            }
    }
    else{
        var status = {
            'status' : true,
            'message' :"succesfull response",
            result: res.locals.result,
            }
    }
    res.status(200).json(status);
});
router.get('/get_user_by_id/:id', userCtrl.get_user_by_id,function(req, res, next) {
    if(res.locals.result == 0 )
    {
        var status = {
            'status' : false,
            'message' :"No result Found",
            result: []
            }
    }
    else{
        var status = {
            'status' : true,
            'message' :"succesfull response",
            result: res.locals.result,
            }
    }
    
        res.status(200).json(status);
});
router.post('/update-user/:id',userCtrl.update_user,function(req, res, next) {
    let errors = validationResult(req);
   
   if(res.locals.result == 0 )
    {
        var status = {
            'status' : false,
            'message' :"Something went wrong",
            result: []
            }
    }else if(res.locals.result == "param missing" )
    {
        var status = {
            'status' : false,
            'message' :"validation error",
            result: []
            }
    }
    else{
        var status = {
            'status' : true,
            'message' :"succesfull response",
            result: res.locals.result,
            }
    }
    res.status(200).json(status);
});
router.post('/delete-user',userCtrl.delete_user,function(req, res, next) {
    let errors = validationResult(req);
   
   if(res.locals.result == 0 )
    {
        var status = {
            'status' : false,
            'message' :"Something went wrong",
            result: []
            }
    }else if(res.locals.result == "param missing" )
    {
        var status = {
            'status' : false,
            'message' :"validation error",
            result: []
            }
    }
    else{
        var status = {
            'status' : true,
            'message' :"succesfull response",
            result: res.locals.result,
            }
    }
    res.status(200).json(status);
});
module.exports = router;
