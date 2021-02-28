import { questionRepository} from '../repositories/QuestionRepository'

class QuestionService {
    public findAll() {
        return questionRepository.findAll()
    }

    public create(question: any) {
        return questionRepository.create(question)
    }

    public findById(id: String) {
        return questionRepository.findById(id)
    }

    public deleteById(id: String) {
        return questionRepository.deleteById(id);
    }

    public updateById(id: String, updateQuestion: String) {
        return questionRepository.updateById(id, updateQuestion);
    }
}

export const questionService = Object.freeze(new QuestionService());
