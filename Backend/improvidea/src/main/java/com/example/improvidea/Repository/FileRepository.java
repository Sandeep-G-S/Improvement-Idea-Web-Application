package com.example.improvidea.Repository;

import com.example.improvidea.Entity.Idea;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<Idea,Long> {
}
