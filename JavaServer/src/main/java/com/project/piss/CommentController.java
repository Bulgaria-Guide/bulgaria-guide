package com.project.piss;


import com.project.piss.models.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {

    @Autowired
    private CommentRepository repository;


    @GetMapping("/v1/comments/{sight_id}/retrieve")
    public List<Comment> findSightComments(@PathVariable("sight_id") Long id) {
//        return repository.findAllCommentsForSight(id);
        return null;
    }

    @PostMapping(value = "/v1/comments/create")
    public Comment create(@RequestParam("content") String content,
                          @RequestParam("sightId") Long sightId,
                          @RequestParam("authorId") Long authorId) {
        Comment comment = new Comment(content, sightId, authorId);
        return comment;
    }

    //implement response code
    @DeleteMapping("/v1/comments/{id}/delete")
    public void deleteSight(@PathVariable("id") long id) {
        repository.deleteById(id);
    }

}
