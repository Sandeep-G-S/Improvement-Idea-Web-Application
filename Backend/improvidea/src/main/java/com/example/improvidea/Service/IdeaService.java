package com.example.improvidea.Service;

import com.example.improvidea.Entity.Idea;
import com.example.improvidea.Repository.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IdeaService {

    @Autowired
    IdeaRepository repo;

    public Idea postAllIdea(Idea idea) {
        return repo.save(idea);
    }
}
