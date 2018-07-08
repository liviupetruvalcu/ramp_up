package com.luxoft.rampUp;

import com.luxoft.rampUp.model.User;
import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;

@MappedTypes(User.class)
@MapperScan("com.luxoft.rampUp.mappers")
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class RampUpApplication {

	public static void main(String[] args) {
		SpringApplication.run(RampUpApplication.class, args);
	}
}
