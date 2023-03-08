package com.eduit.bootcamp.cartui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.eduit.bootcamp.cartui.model.UserLoginModel;

@Controller

public class IndexController {

	public IndexController() {
		// TODO Auto-generated constructor stub
	}

	@GetMapping("/index")
	public String indexPage(Model model) {
		model.addAttribute("userLoginModel", new UserLoginModel());
		return "index";
	}
}
