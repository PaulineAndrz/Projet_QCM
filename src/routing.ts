import {questController} from './controllers/QuestController'

export const setRouting = (server: any) => {
    server.get('/question', questController.findAll)
    server.post('/question', questController.create)
    server.get('/question/:id', questController.findById)
    server.delete('/question/search/:id', questController.deleteById)
    server.post('/question/update/:id', questController.updateById)


}