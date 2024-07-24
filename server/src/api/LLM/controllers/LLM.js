
const LLM = {

    health: async (req,res) =>{
        try {
            console.log({msg: "Api is working."});
            res.status(200).json({msg: "Api is working."});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "internal server error."});
        }
    }

};

module.exports = LLM;