package puppiesApi.puppiesApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import puppiesApi.puppiesApi.models.Puppy;

import java.lang.annotation.Repeatable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/puppy")
public class PuppyController {

    @Autowired
    IPuppyRepository ipuppyRepository;


    @GetMapping("/puppies")
    public ResponseEntity<List<Puppy>> getAllPuppies(@RequestParam(required = false) String breed){
        try {
            List<Puppy> puppies = new ArrayList<>();
            if(breed == null)
                ipuppyRepository.findAll().forEach(puppies::add);
            else
                ipuppyRepository.findByBreedContaining(breed).forEach(puppies::add);

            if(puppies.isEmpty()){
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(puppies, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/puppies/{id}")
    public ResponseEntity<Puppy> getPuppyById(@PathVariable("id") long id){
        Optional<Puppy> puppy = ipuppyRepository.findById(id);
        if(puppy.isPresent()){
            return new ResponseEntity<>(puppy.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/puppies")
    public ResponseEntity<Puppy> createPuppy(@RequestBody Puppy puppy){
        try {
            System.out.println("inside TRY POST...");
            Puppy _puppy = ipuppyRepository
                    .save(new Puppy(puppy.getId() ,puppy.getBreed(), puppy.getName(),puppy.getBirthDate(), puppy.getPhotoUrl()));
                    return new ResponseEntity<>(_puppy, HttpStatus.CREATED);
        } catch (Exception e){
            System.out.println("INSIDE EXCEPTION POST");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/puppies/{id}")
    public ResponseEntity<Puppy> updatePuppy(@PathVariable("id") long id, @RequestBody Puppy puppy){
        Optional<Puppy> puppyData = ipuppyRepository.findById(id);
        if(puppyData.isPresent()){
            Puppy _puppy = puppyData.get();
            _puppy.setName(puppy.getName());
            _puppy.setBreed(puppy.getBreed());
            _puppy.setBirthDate(puppy.getBirthDate());

            return new ResponseEntity<>(ipuppyRepository.save(_puppy), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/puppies/{id}")
    public ResponseEntity<Puppy> deletePuppy(@PathVariable("id") long id){

       try{
            ipuppyRepository.deleteById(id);
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }
}
