package com.example.Ecommerce.Service;

import com.example.Ecommerce.Dto.LoginDTO;
import com.example.Ecommerce.Dto.UserDTO;
import com.example.Ecommerce.response.LoginResponse;

public interface UserService {
    String addUser(UserDTO userDTO);
    LoginResponse loginUser(LoginDTO loginDTO);

}
