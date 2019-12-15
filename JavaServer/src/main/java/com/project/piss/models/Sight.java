package com.project.piss.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "sights")
public class Sight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "rating")
    private double rating;

    @Column(name = "picture_path")
    private String picture_path;

    @Column(name = "working_time_from")
    private int working_time_from;

    @Column(name = "working_time_to")
    private int working_time_to;

    @Column(name = "price")
    private double price;

    @Column(name = "address")
    private String address;

    @Column(name = "longitude")
    private double longitude;

    @Column(name = "latitude")
    private double latitude;

    @Column(name = "is_pending")
    private boolean is_pending;

    @Column(name = "category")
    private String category;

    public Sight() {

    }

    public Sight(String name, String description, double rating, String picture_path, int working_time_from,
                 int working_time_to, double price, String address, double longitude, double latitude, String category, boolean is_pending) {
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.picture_path = picture_path;
        this.working_time_from = working_time_from;
        this.working_time_to = working_time_to;
        this.price = price;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.category = category;
        this.is_pending = is_pending;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getRating() {
        return rating;
    }

    public String getPicture_path() {
        return picture_path;
    }

    public int getWorking_time_from() {
        return working_time_from;
    }

    public int getWorking_time_to() {
        return working_time_to;
    }

    public double getPrice() {
        return price;
    }

    public String getCategory() {
        return category;
    }

    public String getAddress() {
        return address;
    }

    public double getLat() {
        return latitude;
    }

    public double getLon() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public String getPicturePath() {
        return picture_path;
    }

    public void setPicturePath(String picturePath) {
        this.picture_path = picturePath;
    }

    public boolean getIsPending() {
        return is_pending;
    }

    public void setIsPending(boolean isPending) {
        this.is_pending = isPending;
    }


}
