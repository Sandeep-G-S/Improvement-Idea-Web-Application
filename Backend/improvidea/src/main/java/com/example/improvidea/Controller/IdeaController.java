package com.example.improvidea.Controller;

import com.example.improvidea.Entity.Idea;
import com.example.improvidea.Service.IdeaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class IdeaController {

    @Autowired
    IdeaService service;

    @PostMapping("/postIdea")
    public Idea postIdea(@RequestBody Idea idea){
        return service.postAllIdea(idea);
    }
}
