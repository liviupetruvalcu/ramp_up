package com.luxoft.rampUp.mappers;

import com.luxoft.rampUp.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select("select * from user")
    public List<User> findAll();

    @Select("select name, password, email from user where email = #{email}")
    @Results({
            @Result(property = "name", column = "Name"),
            @Result(property = "password", column = "password"),
            @Result(property = "email", column = "email")
    })
    public User findByUsername(String email);
}
