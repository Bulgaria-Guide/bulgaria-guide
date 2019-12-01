package com.project.piss.services;

import com.project.piss.models.Comment;
import com.project.piss.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository repository;

    @Override
    public List<Comment> findAllCommentsForSight(Long id) {
        return repository.findAllCommentsForSight(id);
    }

    @Override
    public Comment save(Comment comment) {
        return repository.save(comment);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
