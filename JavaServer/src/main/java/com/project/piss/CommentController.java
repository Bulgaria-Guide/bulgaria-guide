package com.project.piss;


import com.project.piss.models.Comment;
import com.project.piss.services.CommentService;
import com.project.piss.services.CommentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {

    @Autowired
    private CommentServiceImpl commentService;


    @GetMapping("/v1/comments/{sight_id}/retrieve")
    public List<Comment> findSightComments(@PathVariable("sight_id") Long id) {
        return commentService.findAllCommentsForSight(id);
    }


//    old way--> will be removed when is confirmed that the new method is working properly
//    @PostMapping(value = "/v1/comments/create")
//    public Comment create(@RequestParam("content") String content,
//                          @RequestParam("sightId") Long sightId,
//                          @RequestParam("authorId") Long authorId) {
//        Comment comment = new Comment(content, sightId, authorId);
//        repository.save(comment);
//        return comment;
//    }

    @PostMapping(value = "/v1/comments/create")
    public Comment create(@RequestBody Comment comment) {
        return commentService.save(comment);
    }


    @DeleteMapping("/v1/comments/{id}/delete")
    public void deleteSight(@PathVariable("id") long id) {
        commentService.deleteById(id);
    }

}
