const db = require('../config');
async function get_user_list(){
    return new Promise(async function(resolve, reject) {
        try{
            const results = await db.query("select * from users order by id desc");
            if(results != undefined)
            resolve(results[0])
            else resolve(0);
        }
        catch(err){
            console.log(err);
            resolve(0);
        }
    })
}
async function save_user(first_name,last_name,email,age){
    return new Promise(async function(resolve, reject) {
        try{
            const results = await db.query("INSERT INTO users (first_name,last_name,email,age) VALUES(?,?,?,?)",[first_name,last_name,email,age]);
            if(results != undefined)
            resolve(results[0])
            else resolve(0);
        }
        catch(err){
            console.log(err);
            resolve(0);
        }
    })
}
async function get_user_by_id(id){
    return new Promise(async function(resolve, reject) {
        try{
            const results = await db.query("select * from users where id = ?",[id]);
            if(results != undefined)
            resolve(results[0])
            else resolve(0);
        }
        catch(err){
            console.log(err);
            resolve(0);
        }
    })
}
async function update_user(id,first_name,last_name,email,age){
    return new Promise(async function(resolve, reject) {
        try{
            const results = await db.query("UPDATE users SET first_name = ?,last_name = ?,email = ?,age = ? where id = ?",[first_name,last_name,email,age,id]);
            if(results != undefined)
            resolve(results[0])
            else resolve(0);
        }
        catch(err){
            console.log(err);
            resolve(0);
        }
    })
}
async function delete_user(id){
    return new Promise(async function(resolve, reject) {
        try{
            const results = await db.query("DELETE FROM users where id = ?",[id]);
            if(results != undefined)
            resolve(results[0])
            else resolve(0);
        }
        catch(err){
            console.log(err);
            resolve(0);
        }
    })
}
module.exports = {
    get_user_list,
    save_user,
    get_user_by_id,
    update_user,
    delete_user
}