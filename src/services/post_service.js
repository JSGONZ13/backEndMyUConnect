const Post = require('../models/post_model');

class PostService {

    PostService(){

    }

    async listarPostById (idPost) {
        try {
            return await Post.find({
                idPost: idPost
            })
        } catch (error) {
            return console.log(error);
        }
    }

    async listarPostByEmail (email) {
        try {
            return await Post.find({
                email: email
            })
        } catch (error) {
            return console.log(error);
        }
    }

    async guardarPost (post = new Post()) {
        try {
            var postGuardado;
            await Post.create(post).then((value)  => {
                postGuardado = value;
            });
            console.log(postGuardado);
            return postGuardado;
        } catch (error) {
            return console.log(error);
        }
    }

    async eliminarPost(idPost) {
        var postEliminado;
        try {
            await Post.findOneAndRemove({
                idPost: idPost
            }).then((value) => {
                postEliminado = value;
            })
            console.log(postEliminado);
            return postEliminado;
        } catch (error) {
            console.log(error);
        }
    }

    async editarPostByEmail (emailBody) {
        var editarPost;
        try {
            await Post.findOneAndUpdate({
                email: emailBody.email
            }, emailBody).then((value) => {
                editarPost = emailBody;
            });
            return editarPost;
        } catch (error) {
            return console.log(error);
        }
    }
}


module.exports = new PostService();
