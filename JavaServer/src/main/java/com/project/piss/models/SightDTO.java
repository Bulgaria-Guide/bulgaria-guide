package com.project.piss.models;

public class SightDTO {

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getPicture_path() {
        return picture_path;
    }

    public void setPicture_path(String picture_path) {
        this.picture_path = picture_path;
    }

    public int getWorking_time_from() {
        return working_time_from;
    }

    public void setWorking_time_from(int working_time_from) {
        this.working_time_from = working_time_from;
    }

    public int getWorking_time_to() {
        return working_time_to;
    }

    public void setWorking_time_to(int working_time_to) {
        this.working_time_to = working_time_to;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Weather getWeather() {
        return weather;
    }

    public void setWeather(Weather weather) {
        this.weather = weather;
    }

  public SightDTO(Sight sight, double temp, String outlook){
      this.id = sight.getId();
      this.name = sight.getName();
      this.description = sight.getDescription();
      this.rating = sight.getRating();
      this.working_time_from = sight.getWorking_time_from();
      this.working_time_to = sight.getWorking_time_to();
      this.price = sight.getPrice();
      this.picture_path = sight.getPicture_path();
      this.category = sight.getCategory();
      this.weather = new Weather();
      this.address = sight.getAddress();
      this.weather.temp = temp;
      this.weather.outlook = outlook;
  }

  private class Weather{
      double temp;
      String outlook;

      public double getTemp() {
          return temp;
      }

      public void setTemp(double temp) {
          this.temp = temp;
      }

      public String getOutlook() {
          return outlook;
      }

      public void setOutlook(String outlook) {
          this.outlook = outlook;
      }
  }

    private Long id;

    private String name;

    private String description;

    private double rating;

    private String picture_path;

    private int working_time_from;

    private int working_time_to;

    private double price;

    private String address;

    private String category;

    private Weather weather;
}
