import {questionController} from './controllers/QuestionController'

export const setRouting = (server: any) => {
    server.get('/question', questionController.findAll)
    server.post('/question', questionController.create)
    server.get('/question/:id', questionController.findById)
    server.delete('/question/:id', questionController.deleteById)
    server.put('/question/:id', questionController.updateById)
}