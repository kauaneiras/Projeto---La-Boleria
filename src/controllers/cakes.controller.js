// {
//     "name": "Bolo de pote",
//     "price": 13.00,
//      "image":"encurtador.com.br/iDIX0",
//     "description": "Bolo de chocolate com recheio de leite ninho"
// }

async function postCake(){
    const {name, price, image, description} = req.body;
    try {
        await connection.query(`
        INSERT INTO cakes (name, price, image, description)
        VALUES ($1, $2, $3, $4)
        `, [name, price, image, description]
        );
        return res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500);
    }
}

export { postCake };