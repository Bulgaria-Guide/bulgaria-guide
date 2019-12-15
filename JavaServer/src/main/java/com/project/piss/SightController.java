package com.project.piss;

import com.project.piss.models.Sight;
import com.project.piss.models.SightDTO;
import com.project.piss.services.SightService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@CrossOrigin
@RestController
public class SightController {

    private final String URL = "/images/";

    @Autowired
    private SightService sightService;

    @CrossOrigin
    @GetMapping("/v1/sights/{id}/retrieve")
    public ResponseEntity<SightDTO> findAById(@PathVariable("id") Long id) {
        try {

            Sight sight = sightService.findById(id);
            // api key is hardcoded - time limitation..
            String urlPattern =
                    String.format(
                            "https://api.openweathermap.org/data/2.5/weather?lat=%s&lon=%s&APPID=6e6f508a65222f7127a1fefb1d2b36a1",
                            sight.getLat(), sight.getLon());
            URL url = new URL(urlPattern);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");

            int responseCode = con.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) { // success
                BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println(response.toString());
                JSONObject jsonObject = new JSONObject(response.toString());
                return ResponseEntity.ok(
                        new SightDTO(
                                sight,
                                Math.round(jsonObject.getJSONObject("main").getDouble("temp") - 272.15),
                                jsonObject.getJSONArray("weather").getJSONObject(0).getString("main")));
            }
        } catch (Exception e) {

        }

        return ResponseEntity.ok(new SightDTO(new Sight(), 0, ""));
    }


    @GetMapping("/v1/sights/retrieve")
    public List<Sight> findAll(@RequestParam(value = "sort") Optional<String> sort, @RequestParam(value = "category") Optional<String> category,
                               @RequestParam(value = "min-rating") Optional<Integer> minRating) {

        return sightService.findSights(sort, category, minRating);
    }

    @GetMapping("/v1/sights/retrieve/pending")
    public List<Sight> findPending() {
        return sightService.findPending();
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
                        @RequestParam("category") String category
    ) throws IOException {
        return sightService.save(name, description, picture, workingTimeFrom, workingTimeTo, price, address,
                longitude, latitude, category);

    }


    @DeleteMapping("/v1/sights/{id}/delete")
    public ResponseEntity<?> deleteSight(@PathVariable("id") Long id) {
        return sightService.deleteSight(id);
    }

    @PatchMapping("/v1/sights/{id}/manage")
    public ResponseEntity<?> updateSight(@PathVariable("id") long id, @RequestBody Map<String, Boolean> values) {

        boolean isApproved = values.get("accepted");
        return sightService.update(id, isApproved);
    }

}


