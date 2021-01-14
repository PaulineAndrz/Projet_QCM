import { questionService } from '../services/QuestionService'

class QuestionController {
    public findAll(req: any, res: any){
        const data = questionService.findAll().then((data: any) => {
            res.json(data);
        })
    }

    public create(req: any, res: any) {
        questionService.create(req.body).then((data: any) => {
            res.json(data)
        })
    }

    public findById(req: any, res: any) {
        const id = req.params.id
        questionService.findById(id).then((data: any) => res.json(data))
    }

    public deleteById(req: any, res: any) {
        const id = req.params.id;
        questionService.deleteById(id).then((data: any) => {
            res.json(data);
        })
    }

    public updateById(req: any, res: any) {
        const id = req.params.id;
        const question = req.body.question;
        questionService.updateById(id, question).then((data: any) => {
            res.json(data);
        })
    }
}

export const questionController = Object.freeze(new QuestionController());
