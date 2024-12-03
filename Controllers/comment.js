const Comment = require('../Modals/comment');



exports.addComment = async(req,res)=>{
    try{
        // done
        let {video, message} = req.body;
        const comment = new Comment({user:req.user._id, video,message});
        await comment.save();

        res.status(201).json({
        message: "Success",
        comment
        });

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


exports.getCommentByVideoId = async(req,res)=>{
    try{
         // done
         let {videoId} = req.params;
         const comments = await Comment. find({ video: videoId }).populate('user', 'channelName profilepic userName createdAt');
         
         res.status(201).json({
         message: "Success",
         comments
         });

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}
