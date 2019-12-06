package com.project.piss;

import com.project.piss.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/v1/users/role", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<?> getUserRole(@RequestParam("username") String username) {
        String role = (userDao.findByUsername(username).getIsAdmin()) ? "admin" : "user";
        return ResponseEntity.ok("{\"role\": \""+ role +"\" }");
    }
}
