module.exports = {
    init_db: async (conn) => {
        console.log('Creating application database table');
        const fs = require('fs');
        const path = require('path');
        const schemaFilePath = path.join(__dirname, './schema.sql');
        try {
            const sql = await fs.promises.readFile(schemaFilePath, 'utf-8');
            return conn.query(sql);
        } catch (err) {
            console.log('Failed to read schema file.');
            console.log(error);
        }
    }
}


