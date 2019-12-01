package com.project.piss.services;

import com.project.piss.models.Comment;

import java.util.List;

public interface CommentService {

    List<Comment> findAllCommentsForSight(Long id);

    Comment save(Comment comment);

    void deleteById(Long id);

}
