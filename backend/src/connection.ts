import { createConnection, getConnection } from 'typeorm';

const connection = {
    async create() {
        await createConnection();
    },

    async close() {
        await getConnection().close();
    },

    async clear(entities) {
        const connection = getConnection();

        entities.forEach(async (entity) => {
            const repository = connection.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName}`);
        });
    },
};
export default connection;