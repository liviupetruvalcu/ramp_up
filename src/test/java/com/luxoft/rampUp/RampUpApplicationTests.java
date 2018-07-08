package com.luxoft.rampUp;

import com.luxoft.rampUp.mappers.UserMapper;
import com.luxoft.rampUp.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootApplication
public class RampUpApplicationTests {

	@Autowired
	private UserMapper userMapper;

	private static final String USER_NAME = "test@test.com";

	@Test
	public void testMapper() {
		User user = userMapper.findByUsername(USER_NAME);

		int i=9;
	}

}
