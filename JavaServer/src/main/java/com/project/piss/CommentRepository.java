package com.project.piss;

import com.project.piss.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface CommentRepository
        extends JpaRepository<Comment, Long> {
}
