const grpc = require('grpc')
const PROTO_PATH = '../grpc-api/notes.proto'
const NoteService = grpc.load(PROTO_PATH).NoteService

const client = new NoteService('localhost:50051',
    grpc.credentials.createInsecure())
client.list({}, (error, notes) => {
    if (!error) {
        console.log('successfully fetch List notes')
        console.log(notes)
    } else {
        console.error(error)
    }
})