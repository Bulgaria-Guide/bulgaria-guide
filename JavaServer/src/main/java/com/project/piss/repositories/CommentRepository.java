package com.project.piss.repositories;

import com.project.piss.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository
        extends JpaRepository<Comment, Long> {
    @Query(value = "SELECT * FROM comment c WHERE c.sight_id = sightId", nativeQuery = true)
    List<Comment> findAllCommentsForSight(@Param("sight_id") Long sightId);
}
