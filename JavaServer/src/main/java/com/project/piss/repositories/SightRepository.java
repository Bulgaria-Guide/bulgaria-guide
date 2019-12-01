package com.project.piss.repositories;

import com.project.piss.models.Sight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SightRepository
        extends JpaRepository<Sight, Long> {
}