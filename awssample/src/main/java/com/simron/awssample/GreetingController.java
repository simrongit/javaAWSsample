package com.simron.awssample;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }

    @RequestMapping("/greetingstr")
    public String greetingstr(@RequestParam(value="name", defaultValue="World") String name) {
        return (new Greeting(counter.incrementAndGet(),
                            String.format(template, name))).getContent()+"SS";
    }

    @PostMapping("/postgreeting")
    public Greeting greetingpost(@RequestParam(value="name", required=false) String name, @RequestBody Greeting greet) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name+"_"+greet.getContent()+" post"));
    }

}

