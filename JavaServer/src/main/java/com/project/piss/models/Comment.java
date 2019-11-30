package com.project.piss.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "content")
    private String content;

    @Column(name = "sight_id")
    private int sightId;

    @Column(name = "author_id")
    private int authorId;

    public Comment() {

    }

    public Comment(String content, int sightId, int authorId) {
        this.content = content;
        this.sightId = sightId;
        this.authorId = authorId;
    }
}
