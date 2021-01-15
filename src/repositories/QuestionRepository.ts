import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
    question: String,
    answers: [{
        libelle: String,
        validation: Boolean,
    }]
},
    {versionKey: false}
)

const questionModel = mongoose.model('questions', questionSchema)

class QuestionRepository {

    public findAll() {
        return questionModel.find().exec()
    }

    public create(question: any) {
        return new questionModel(question).save();
    }

    public findById(id: String){
        return questionModel.findById(id).exec()
    }

    public deleteById(id: String) {
        return questionModel.findByIdAndDelete(id).exec();
    }

    public updateById(id: String, updateQuestion: String) {
         return questionModel.findByIdAndUpdate(id, {"question" : updateQuestion}).exec();
    }
}

export const questionRepository = Object.freeze(new QuestionRepository())
