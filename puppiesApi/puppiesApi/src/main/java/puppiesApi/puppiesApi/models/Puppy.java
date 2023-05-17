package puppiesApi.puppiesApi.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name= "puppies")
public class Puppy {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    @Column
    private String breed;

    public Puppy(String name) {
        this.name = name;
    }

    @Column
    private String name;

    @Column
    private Date birthDate;

    @Column
    private String photoUrl;

    public Puppy(String breed, String name, Date birthDate, String photoUrl) {
        this.breed = breed;
        this.name = name;
        this.birthDate = birthDate;
        this.photoUrl = photoUrl;
    }

    public Puppy(){

    }



    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    @Override
    public String toString() {
        return "Puppy{" +
                "id=" + id +
                ", breed='" + breed + '\'' +
                ", name='" + name + '\'' +
                ", birthDate=" + birthDate +
                ", photoUrl='" + photoUrl + '\'' +
                '}';
    }


}
