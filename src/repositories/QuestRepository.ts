import mongoose from 'mongoose'

const questSchema = new mongoose.Schema({
    question: String,
    answers: [{
        libelle: String,
        resp: Boolean,
    }]
},
    {versionKey: false}
)

const questModel = mongoose.model('questions', questSchema)

class QuestRepository {

    public findAll() {
        return questModel.find().exec()
    }

    public create(quest: any) {
        return new questModel(quest).save();
    }

    public findById(id: String){
        return questModel.findById(id).exec()
    }

    public deleteById(id: String) {
        return questModel.findByIdAndDelete(id).exec();
    }

    public updateById(id: String, update: String) {
        return questModel.findByIdAndUpdate(id, update).exec();
    }

}

export const questRepository = Object.freeze(new QuestRepository)
