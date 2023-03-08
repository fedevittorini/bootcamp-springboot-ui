package com.eduit.bootcamp.cartui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.eduit.bootcamp.cartui.model.UserLoginModel;

@Controller
public class LoginController {

	public LoginController() {
		// TODO Auto-generated constructor stub
	}

	@GetMapping("/login")
	public String loginPage(Model model) {
		model.addAttribute("userLoginModel", new UserLoginModel());
		return "login";
	}
	
	@PostMapping("/login")
	public String performLogin(Model model, @ModelAttribute UserLoginModel loginModel) {
		return "redirect:/login";
	}
}
