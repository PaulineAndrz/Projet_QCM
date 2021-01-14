import { questRepository} from '../repositories/QuestRepository'

class QuestService {
    public findAll() {
        return questRepository.findAll()
    }

    public create(quest: any) {
        return questRepository.create(quest)
    }

    public findById(id: String) {
        return questRepository.findById(id)
    }

    public deleteById(id: String) {
        return questRepository.deleteById(id);
    }

    public updateById(id: String, update: String) {
        return questRepository.updateById(id, update);
    }
}

export const questService = Object.freeze(new QuestService());
