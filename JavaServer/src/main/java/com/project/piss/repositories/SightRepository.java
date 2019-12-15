package com.project.piss.repositories;

import com.project.piss.models.Sight;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SightRepository
        extends JpaRepository<Sight, Long> {

    @Query(value = "SELECT * FROM sights s WHERE s.is_pending=false", nativeQuery = true)
    List<Sight> findAllApprovedSights();

    @Query(value = "SELECT * FROM sights s WHERE s.is_pending=false ORDER BY :sort DESC", nativeQuery = true)
    List<Sight> findAllApprovedSights(String sort);
}