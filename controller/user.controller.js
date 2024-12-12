const db = require('../db.js')

class UserController {
    async createUser(req,res) {
        const {name,surname} = req.body //req.body Это данные, отправленные клиентом на сервер.
        const newPerson=await db.query('INSERT INTO person (name,surname) values ($1,$2) RETURNING *', [name, surname]);  //Асинхронный запрос к БД.
//Сначала запрос к БД а потом запис в переменную!
        console.log(name, surname) //Вывод в vs 
        res.json(newPerson.rows[0]); //вывод в postman с сортировкой.
    }
    async getUsers(req,res) {
        const users = await db.query('select * from person;')
        res.json(users)
    }
    async getOneUser(req,res) {
        const id = req.params.id   //Принимаем id который в домене
        const users = await db.query('select * from person where id = $1;',[id])
        res.json(users.rows[0])
    }
    async updateUser(req,res) {
        const {id,name,surname} = req.body
        const user = await db.query('UPDATE person set name=$1, surname =$2 where id =$3 RETURNING *;',[name,surname,id]) //ORM изучить
        res.json(user)
    }
    async deleteUser(req,res) {
        //req.body - Из ввода 
        //req.params.id Из параметров домена
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id =$1;',[id])
        res.json(user)
    }
    
}

module.exports = new UserController() //new для доступа к классу т.к к несозд я не смогу обратиться и взаимодействовать.