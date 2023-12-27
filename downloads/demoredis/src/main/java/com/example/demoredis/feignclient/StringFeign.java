package com.example.demoredis.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



@FeignClient(value = "String", url = "http://localhost:8070", fallbackFactory = FeignFallBack.class)
public interface StringFeign {

    @RequestMapping(method = RequestMethod.GET, value = "/employee/feignCheck")
    String checkFeign();

}
