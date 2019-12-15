package com.project.piss.services;

import com.project.piss.models.Sight;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface SightService {


    Sight findById(Long id);

    List<Sight> findAll();

    Sight save(String name, String description, MultipartFile picture, int workingTimeFrom,
               int workingTimeTo, double price, String address, double longitude, double latitude, String category) throws IOException;

    ResponseEntity<?> deleteSight(Long id);

    ResponseEntity<?> update(long id, boolean isApproved);
}
