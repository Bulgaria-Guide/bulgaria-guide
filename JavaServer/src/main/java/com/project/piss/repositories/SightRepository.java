package com.project.piss.repositories;

import com.project.piss.models.Sight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SightRepository
        extends JpaRepository<Sight, Long> {

    @Query(value = "SELECT * FROM sights s WHERE s.is_pending = :pendingStatus", nativeQuery = true)
    List<Sight> findSights(boolean pendingStatus);

    @Query(value = "SELECT * FROM sights s WHERE s.is_pending=false ORDER BY id DESC", nativeQuery = true)
    List<Sight> findAllApprovedSights(String sort);

    @Query(value = "SELECT * FROM sights s WHERE s.is_pending=false ORDER BY rating DESC", nativeQuery = true)
    List<Sight> findAllSightsByRating();

    @Query(value = "SELECT * FROM sights s WHERE s.is_pending=false ORDER BY name", nativeQuery = true)
    List<Sight> findAllSightsByCategory();

}