package com.project.piss;


import com.project.piss.models.Sight;
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

//da dovursha posta
//da dovawq service class
//commenatri i baza


@RestController
public class SightController {

    private final String URL = "/images/";


    @Autowired
    private SightRepository repository;


    @GetMapping("/v1/sights/{id}/retrieve")
    public Sight findAll(@PathVariable("id") long id) {
        Sight sight = repository.getOne(id);
        return sight;
    }

    //add optional arguments
    @GetMapping("/v1/sights/retrieve")
    public List<Sight> findAll() {
        List<Sight> sights = repository.findAll();
        sights.forEach(sight -> sight.setPicture_path(URL + sight.getPicture_path()));
        return sights;
    }


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
                        @RequestParam("isPending") boolean isPending
    ) throws IOException {
        String newImageName = generateNewImageName(picture);
        saveUploadedFile(picture, newImageName);
        final double INITIAL_RATING = 0;
        Sight sight = new Sight(name, description, INITIAL_RATING, newImageName, workingTimeFrom, workingTimeTo, price, address, longitude, latitude, isPending);
        return repository.save(sight);
    }

    private String generateNewImageName(MultipartFile file) {

        String generatedName = generateName();
        String fileExtension = getFileExtension(file);
        String newImageName = generatedName + "." + fileExtension;
        return newImageName;
    }

    private String generateName() {
        return UUID.randomUUID().toString();
    }


    //not handled exception
    private String getFileExtension(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        int INDEX_OF_FILE_EXTENSION = 1;
        String REGEX_FOR_MATCH_FILE_EXTENSION = "\\.(?=[^\\.]+$)";
        return fileName.split(REGEX_FOR_MATCH_FILE_EXTENSION)[INDEX_OF_FILE_EXTENSION];
    }


    private void saveUploadedFile(MultipartFile file, String pathOfImage) throws IOException {
        if (!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            String UPLOADED_FOLDER = "src/main/resources/static/images/";
            Path path = Paths.get(UPLOADED_FOLDER + pathOfImage);
            Files.write(path, bytes);
        }
    }

    @DeleteMapping("/v1/sights/{id}/delete")
    public ResponseEntity<?> deleteSight(@PathVariable("id") long id) {
        return repository.findById(id)
                .map(sight -> {
                    delete(sight.getPicture_path(), id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

    private void delete(String imageName, long id) {

        File file = new File(URL + imageName);
        file.delete();
        repository.deleteById(id);
    }


//    @PatchMapping("/v1/sights/{id}/manage")
//    public ResponseEntity<Sight> updateSight(@PathVariable("id") long id, @RequestParam("title") String title, @RequestParam("file") MultipartFile file
//    ) {
//        return cardServcie.update(id, title, file);
//    }
}
