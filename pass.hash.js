

const bcrypt = require('bcrypt');


async function hashPassword(){
    
    const myPassword='admin2025'

    const hash=await bcrypt.hash(myPassword, 10)
    console.log(hash)


}
hashPassword()