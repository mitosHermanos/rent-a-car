package com.rent_a_car.agentski_bekend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableAutoConfiguration//(exclude={DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
@RestController
public class AgentskiBekendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgentskiBekendApplication.class, args);
	}

	@RequestMapping("/health")
	public String sayHello(){
//		Person percy = new Person ();
//		percy.setFirstName("Percy");
//		percy.setLastName("the Person");
//		People people = new People();
		String retVal = "";
//		for (Person p : people.getAllThePeople()) {
//			retVal += p.getFirstName();
//		}
		return "Hello from agent backend!" + " " + retVal;
	}

}
