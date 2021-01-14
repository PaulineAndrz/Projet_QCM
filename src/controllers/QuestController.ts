import { questService } from './../services/QuestService'

class QuestController {

    public findAll(req: any, res: any){
        const data = questService.findAll().then((data: any) => {
            res.json(data);
        })
    }

    public create(req: any, res: any) {
        questService.create(req.body).then((data: any) => {
            res.json(data)
        })
    }

    public findById(req: any, res: any) {
        const id = req.params.id
        questService.findById(id).then((data: any) => res.json(data))
    }

    public deleteById(req: any, res: any) {
        const id = req.params.id;
        questService.deleteById(id).then((data: any) => {
            res.json(data);
        })
    }

    public updateById(req: any, res: any) {
        const id = req.params.id;
        const question = req.body.question
        questService.updateById(id, question).then((data: any) => {
            res.json(data);
        })
        //                       PAS FINI                  !!!!!!
    }
}

export const questController = Object.freeze(new QuestController());
