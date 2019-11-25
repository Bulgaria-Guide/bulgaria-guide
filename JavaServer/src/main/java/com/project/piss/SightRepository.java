package com.project.piss;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface CardRepository
        extends JpaRepository<Sight, Long> {

}