package com.rent_a_car.agentski_bekend.controller;

import com.rent_a_car.agentski_bekend.model.UserTokenState;
import com.rent_a_car.agentski_bekend.security.TokenUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import com.rent_a_car.agentski_bekend.model.User;
import com.rent_a_car.agentski_bekend.security.auth.JwtAuthenticationRequest;
import com.rent_a_car.agentski_bekend.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.ws.rs.core.SecurityContext;

//import com.webencyclop.demo.model.User; TODO import user

@RestController
public class AuthenticationController {

    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login"); // resources/template/login.html
        return modelAndView;
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public ModelAndView register() {
        ModelAndView modelAndView = new ModelAndView();
         User user = new User();
         modelAndView.addObject("user", user);
        modelAndView.setViewName("register"); // resources/template/register.html
        return modelAndView;
    }

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("home"); // resources/template/home.html
        return modelAndView;
    }

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenUtils tokenUtils;
    @PostMapping(value = "/api/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest){

//        final Authentication authentication = authenticationManager
//                .authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
//                        authenticationRequest.getPassword()));

        UsernamePasswordAuthenticationToken upat = new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
                        authenticationRequest.getPassword());

        final Authentication authentication = authenticationManager
                .authenticate(upat);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = (User)customUserDetailsService.loadUserByUsername(authenticationRequest.getEmail());

        String jwt = tokenUtils.generateToken(user.getEmail());
        int expiresIn = tokenUtils.getExpiredId();

        return ResponseEntity.ok(new UserTokenState(jwt, expiresIn));

    }
}

