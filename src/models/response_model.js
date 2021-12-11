const { Schema, model } = require('mongoose');

const responseSchema = new Schema ({

    idResponse: {
        type: String
    },
    titulo: {
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
    idPost: {
        type: String
    },
    likes: {
        type: Number
    }
});

responseSchema.pre("save", function (next) {
    var docs = this;
      model("Responses", responseSchema)
      .countDocuments({ account: docs.account }, function (error, counter) {
        if (error) return next(error);
        docs.idResponse = counter + 1;
        next();
      });
  });

  module.exports = model('Responses', responseSchema);