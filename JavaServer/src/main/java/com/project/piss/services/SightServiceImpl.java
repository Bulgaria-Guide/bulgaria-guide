package com.project.piss.services;

import com.project.piss.models.Sight;
import com.project.piss.repositories.SightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
public class SightServiceImpl implements SightService {

    private final String URL = "/images/";


    @Autowired
    private SightRepository repository;


    @Override
    public Sight findById(Long id) {
        return repository.findById(id)
                .orElseThrow(RuntimeException::new);
    }

    @Override
    public List<Sight> findAll() {
        List<Sight> sights = repository.findSights(false);
        sights.forEach(sight -> sight.setPicturePath(URL + sight.getPicturePath()));
        return sights;
    }

    @Override
    public List<Sight> findSights(Optional<String> sort, Optional<String> category, Optional<Integer> minRating) {
        List<Sight> sights;

        if (sort.isPresent()) {
            String sortParam = sort.get();
            if (sortParam.equals("rating")) {
                sights = repository.findAllSightsByRating();
            } else {
                sights = repository.findAllSightsByCategory();
            }
        } else {
            sights = repository.findSights(false);
        }

        sights.forEach(sight -> sight.setPicturePath(URL + sight.getPicturePath()));

        if (minRating.isPresent()) {
            int minRatingParam = minRating.get();
            sights = sights.stream().filter(sight -> sight.getRating() > minRatingParam).collect(Collectors.toList());
        }

        if (category.isPresent()) {
            String categoryParam = category.get();
            sights = sights.stream().filter(sight -> sight.getCategory().equals(categoryParam)).collect(Collectors.toList());
        }

        return sights;
    }

    @Override
    public List<Sight> findPending() {
        return repository.findSights(true);
    }

    @Override
    public ResponseEntity<?> updateRating(long id, int rating) {
        Optional<Sight> sightResponse = repository.findById(id);
        if (sightResponse.isPresent()) {
            Sight sight = sightResponse.get();
            int ratingSum = sight.getRatingSum();
            int ratingVotes = sight.getRatingVotes();
            int newRatingSum = ratingSum + rating;
            int newRatingVotes = ratingVotes + 1;
            double newRating = newRatingSum / newRatingVotes;
            sight.setRating(newRating);
            sight.setRatingSum(newRatingSum);
            sight.setRatingVotes(newRatingVotes);
            repository.save(sight);
            return ResponseEntity.ok("{\"rating\": \"" + newRating + "\" }");
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @Override
    public Sight save(String name, String description, MultipartFile picture, int workingTimeFrom, int workingTimeTo, double price, String address, double longitude, double latitude, String category) throws IOException {
        String newImageName = generateNewImageName(picture);
        saveUploadedFile(picture, newImageName);
        final double INITIAL_RATING = 0;
        final boolean IS_PENDING_DEFAULT_STATUS = true;
        Sight sight = new Sight(name, description, INITIAL_RATING, newImageName, workingTimeFrom, workingTimeTo, price, address,
                longitude, latitude, category, IS_PENDING_DEFAULT_STATUS);
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


    @Override
    public ResponseEntity<?> deleteSight(Long id) {
        return repository.findById(id)
                .map(sight -> {
                    delete(sight.getPicturePath(), id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

    private void delete(String imageName, long id) {

        File file = new File(URL + imageName);
        file.delete();
        repository.deleteById(id);
    }

    @Override
    public ResponseEntity<?> update(long id, boolean isApproved) {
        if (isApproved) {
            if (repository.findById(id).isPresent()) {
                Sight sight = repository.findById(id).get();
                final boolean isPending = false;
                sight.setIsPending(isPending);
                repository.save(sight);

                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return deleteSight(id);
        }
    }
}
