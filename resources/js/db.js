import Dexie from 'dexie';

const db = new Dexie('adjob');
db.version(1).stores({
    entries: '++id, project, description, duration',
    projects: '++id, name'
});

export default db;