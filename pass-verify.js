const bcrypt = require('bcrypt');
async function verifyPassword(){
    const myPassword='admin2025'
    const hash='$2b$10$6ZNgfY/axzKMkrWHwsAbce32y4qUYnVnGk4MIBqP1BOjvZSwZcXsO'
    const isMatch=await bcrypt.compare(myPassword, hash);
    console.log(isMatch)
}

verifyPassword();