package com.project.piss.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "sight")
public class Sight {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "rating")
    private double string;

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

    public Sight() {

    }

    public Sight(int id, String name, String description, double string, String picture_path, int working_time_from,
                 int working_time_to, double price, String address, double longitude, double latitude, boolean is_pending) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.string = string;
        this.picture_path = picture_path;
        this.working_time_from = working_time_from;
        this.working_time_to = working_time_to;
        this.price = price;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.is_pending = is_pending;
    }


}
