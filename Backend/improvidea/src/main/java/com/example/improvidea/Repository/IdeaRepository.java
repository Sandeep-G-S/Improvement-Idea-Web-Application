package com.example.improvidea.Repository;

import com.example.improvidea.Entity.Idea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdeaRepository extends JpaRepository<Idea,Long> {

}
