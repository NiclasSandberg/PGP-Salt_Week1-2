package puppiesApi.puppiesApi;

import org.springframework.data.jpa.repository.JpaRepository;
import puppiesApi.puppiesApi.models.Puppy;

import java.util.List;
import java.util.Optional;

public interface IPuppyRepository extends JpaRepository<Puppy, Long> {
    Optional<Puppy> findById(long id);
    List<Puppy> findByBreedContaining(String breed);
    void deleteById(long id);
}
