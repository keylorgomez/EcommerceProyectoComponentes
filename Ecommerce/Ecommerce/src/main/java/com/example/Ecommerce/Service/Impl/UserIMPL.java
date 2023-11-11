package com.example.Ecommerce.Service.Impl;

import com.example.Ecommerce.Dto.LoginDTO;
import com.example.Ecommerce.Dto.UserDTO;
import com.example.Ecommerce.Entity.User;
import com.example.Ecommerce.Repo.UserRepo;
import com.example.Ecommerce.Service.UserService;
import com.example.Ecommerce.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserIMPL implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserid(),
                userDTO.getIdcard(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getAddress(),
                userDTO.getPhone(),
                this.passwordEncoder.encode(userDTO.getPassword())
        );

        userRepo.save(user);


        return  user.getUsername();
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user1  = userRepo.findByEmail(loginDTO.getEmail());
        if(user1 != null){
            String password = loginDTO.getPassword();
            String encodePassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodePassword);
            if(isPwdRight){
                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodePassword);
                if(user.isPresent()){
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);

                }
            }else {
                return new LoginResponse("Password Not Match",false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }
}
