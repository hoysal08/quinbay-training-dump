package com.example.KafkaMessage.controller;

import com.example.KafkaMessage.model.Item;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("producer")
public class ItemController {

    @Autowired
    KafkaTemplate KafkaJsontemplate;

    String TOPIC_NAME = "items-topic";

    @PostMapping(value = "/postItem",consumes = {"application/json"},produces = {"application/json"})
    public String postJsonMessage(@RequestBody Item item) throws JsonProcessingException {

        KafkaJsontemplate.send(TOPIC_NAME,new ObjectMapper().writeValueAsString(new Item(1,"Lenvvgvgvgovo","Laptop")));
        return "Message published successfully";
    }
}