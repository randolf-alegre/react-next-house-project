export const LOCAL_SERVER = process.env.LOCAL_SERVER ?? 'http://localhost:5000'
export const DB_COLLECTION = process.env.DB_COLLECTION ?? '/houses'
export const LOCAL_API_SERVER = LOCAL_SERVER + DB_COLLECTION
export const API_ENDPOINT = process.env.API_ENDPOINT ?? '/api/houses'