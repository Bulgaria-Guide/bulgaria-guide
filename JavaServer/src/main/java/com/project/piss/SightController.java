package com.project.piss;


import com.project.piss.models.Sight;
import com.project.piss.services.SightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;


//add optional parameters in get
//add service layer for better abstraction
//add patch operation


@RestController
public class SightController {

    private final String URL = "/images/";


    @Autowired
    private SightService sightService;


    @GetMapping("/v1/sights/{id}/retrieve")
    public Sight findAll(@PathVariable("id") Long id) {
        return sightService.findById(id);
    }


    //add optional arguments
    @GetMapping("/v1/sights/retrieve")
    public List<Sight> findAll() {
        return sightService.findAll();
    }


    //remove all arguments and add class on their place

    @PostMapping(value = "/v1/sights/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Sight create(@RequestParam("name") String name,
                        @RequestParam("description") String description,
                        @RequestParam("picture") MultipartFile picture,
                        @RequestParam("workingTimeFrom") int workingTimeFrom,
                        @RequestParam("workingTimeTo") int workingTimeTo,
                        @RequestParam("price") double price,
                        @RequestParam("address") String address,
                        @RequestParam("longitude") double longitude,
                        @RequestParam("latitude") double latitude,
                        @RequestParam("category") String category
    ) throws IOException {
        return sightService.save(name, description, picture, workingTimeFrom, workingTimeTo, price, address,
                longitude, latitude, category);
    }


    @DeleteMapping("/v1/sights/{id}/delete")
    public ResponseEntity<?> deleteSight(@PathVariable("id") long id) {
//        return repository.findById(id)
//                .map(sight -> {
//                    delete(sight.getPicture_path(), id);
//                    return ResponseEntity.ok().build();
//                }).orElse(ResponseEntity.notFound().build());
        return null;
    }

    private void delete(String imageName, long id) {

        File file = new File(URL + imageName);
        file.delete();
//        repository.deleteById(id);
    }


//    @PatchMapping("/v1/sights/{id}/manage")
//    public ResponseEntity<Sight> updateSight(@PathVariable("id") long id, @RequestParam("title") String title, @RequestParam("file") MultipartFile file
//    ) {
//        return sightService.update(id, title, file);
//    }
}
