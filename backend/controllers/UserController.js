const { User } = require("../database/models");

const UserController = {
    index: async (req,res)=>{
        try{
            const users = await User.findAll({
                include: "addresses",
                order:[
                    ["name","ASC"]
                ]
        });
            res.status(200).json(users);
        }catch(error){
            console.log(error);
            res.status(400).json({ message: "Erro ao listar os usuários" });
        }
    },
    store: async (req,res)=>{
        const { name, email } = req.body;
        try{
            await User.create({
                name,
                email,
            });
            res.status(201).json({ message: "Usuário criado com sucesso" });
        }catch(error){
            console.log(error);
            res.status(400).json({ message: "Erro ao cadastrar usuário" });
        }
    },
    show: async (req,res)=>{
        const { id } = req.params;
        try{
            const user = await User.findByPk(id);
            res.status(200).json(user);
        }catch(error){
            console.log(error);
            res.status(400).json({ message: "Erro ao buscar usuário" });
        }
    },
    update: async (req,res)=>{
        const { id } = req.params;
        const { name, email } = req.body;
        try{
            await User.update({
                name, 
                email
            },
            {
                where:{
                    id,
                },
            });
            res.status(200).json({ message: "Usuário atualizado com sucesso" });
        }catch(error){
            console.log(error);
            res.status(400).json({ message: "Erro ao atualizar usuário" });
        }
    },
    delete: async (req,res)=>{
        const {id} = req.params;
        try{
            await User.destroy({
                where:{
                    id
                }
            });
            res.status(200).json({ message: "Usuário deletado com sucesso"});
        }catch(error){
            console.log(error);
            res.status(400).json({ message: "Erro ao deletar usuário" });
        }
    },
};

module.exports = UserController;