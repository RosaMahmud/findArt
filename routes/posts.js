const express = require('express');
const router = express.Router();
const Post = require("../models/Post");
const User = require('../models/User');

//create a post

router.post ("/", async (req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json(err);
    }
});

//update a post

router.put("/:id", async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({$set: req.body});
            res.status(200).json("the post has been updated");
         } else{
                res.status(403).json("You can only update your own post");
            } 
        }
    catch (err){
        res.status(500).json(err);
    }
});

//delete a post

router.delete("/:id", async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne({$set: req.body});
            res.status(200).json("the post has been deleted");
         } else{
                res.status(403).json("You can only delete your own post");
            } 
        }
    catch (err){
        res.status(500).json(err);
    }
});

//like or dislike a post

router.put("/:id/like", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
        await post.updateOne({ $push: {likes: req.body.userId}});
        res.status(200).json("The post has been liked")
    } else{
        await post.updateOne({$pull: {likes: req.body.userId}});
        res.status(200).json("The post has been disliked")
    }
    }catch (err){
        res.status(500).json(err);
    }
});

//get a post

router.get("/:id", async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get all posts (newsfeed)

router.get("/newsfeed/all", async(req,res) => {
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id});
        const followingPosts = await Promise.all(
            currentUser.following.map((followId) => {
                return Post.find({userId: followId});
            })
        );
        res.json(userPosts.concat(...followingPosts))
    } catch(err){
        res.status(500).json(err);
    }
    
});



// router.get("/", (req,res) => {
//     console.log("post page")
// })

module.exports = router;
