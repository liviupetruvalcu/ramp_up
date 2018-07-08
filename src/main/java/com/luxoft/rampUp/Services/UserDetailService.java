package com.luxoft.rampUp.Services;

import com.luxoft.rampUp.mappers.UserMapper;
import com.luxoft.rampUp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        System.out.println("Search for user: " + email);
        System.out.println("Finded: " + userMapper.findByUsername(email).getUsername());
       // return userMapper.findByUsername(email);
        User user = new User();
        user.setEmail("test@test.com");
        user.setName("test");
        user.setPassword("test");
        return user;
    }
}
