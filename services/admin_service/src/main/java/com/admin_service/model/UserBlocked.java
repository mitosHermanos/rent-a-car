package com.admin_service.model;

import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;


@Entity
@Table(name = "blocked_user_table")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class UserBlocked implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="user_id", nullable=false, unique=true)
    private Integer id;

    @NotNull
    @Column(name="firstname", nullable = false, unique = true)
    private String firstname;

    @NotNull
    @Column(name="lastname", nullable = false, unique = true)
    private String lastname;
    @NotNull
    @Email    // hybernate validator
    @Column(name="email", nullable = false, unique = true)
    private String email;

    @NotNull
    @Size(min = 5, max = 15)
    @Column(name="password", nullable = false, unique = true)
    private String password;

    public UserBlocked() {
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
