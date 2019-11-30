package com.project.piss;

import com.project.piss.models.Sight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface SightRepository
        extends JpaRepository<Sight, Long> {

}