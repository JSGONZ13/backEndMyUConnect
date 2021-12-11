const { Schema, model } = require('mongoose');

const postSchema = new Schema ({
    idPost: {
        type: String
    },
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    carrera: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    media: {
        type: String,
        required: true,
        trim: true
    },
    likes: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
});

postSchema.pre("save", function (next) {
    var docs = this;
      model("Posts", postSchema)
      .countDocuments({ account: docs.account }, function (error, counter) {
        if (error) return next(error);
        docs.idPost = counter + 1;
        next();
      });
  });

module.exports = model('Posts', postSchema);