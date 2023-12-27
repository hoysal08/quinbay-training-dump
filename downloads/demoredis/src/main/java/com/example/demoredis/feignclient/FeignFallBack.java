package com.example.demoredis.feignclient;

import feign.hystrix.FallbackFactory;
import org.springframework.stereotype.Component;

@Component
public class FeignFallBack implements FallbackFactory<StringFeign> {


    @Override
    public StringFeign create(Throwable throwable) {

        return new StringFeign() {
            @Override
            public String checkFeign() {
                return "wronggggggggggg";
            }
        };
    }
}
