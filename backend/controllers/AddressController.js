const {Address} = require("../database/models");

const AddressController = {
    index: async(req,res)=>{
        try{
            const addresses = await Address.findAll();
            res.status(200).json(addresses);
        }catch(error){
            console.log(error);
            res.status(400).json({ message: "Erro ao listar endereços" });
        }
    },
    store: async(req,res)=>{
        const { postal_code, street, house_number, city } = req.body;
        const { userId } = req.params;
        try{
            await Address.create({
                postal_code,
                street,
                house_number,
                city,
                user_id: userId,
            });
            res.status(201).json({ message: "Endereço criado com sucesso" });
        }catch(error){
            console.log(error);
            res.status(400).json({ message: "Erro ao cadastrar endereço" });
        }
    },
};

module.exports = AddressController;