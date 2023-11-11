package com.example.Ecommerce.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @Column(name ="user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;

    @Column(name = "user_idcard", length = 45)
    private int idcard;

    @Column (name="user_name", length = 255)
    private String username;

    @Column (name="email", length = 255)
    private String email;

    @Column (name="user_address", length = 255)
    private String address;

    @Column(name = "user_phone", length = 255)
    private String phone;

    @Column(name = "password", length = 255)
    private String password;

    public User(int userid, int idcard, String username, String email, String address, String phone, String password) {
        this.userid = userid;
        this.idcard = idcard;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.password = password;
    }

    public User() {
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getIdcard() {
        return idcard;
    }

    public void setIdcard(int idcard) {
        this.idcard = idcard;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "userid=" + userid +
                ", idcard=" + idcard +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
