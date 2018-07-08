package com.luxoft.rampUp.controller;

import com.luxoft.rampUp.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("account")
public class RampUpRestController {

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user){
        return null;
    }

    @RequestMapping("/login")
    public Principal user(Principal principal){
        return principal;
    }
}
