package com.eduit.bootcamp.cartui.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.eduit.bootcamp.cart_ui.model.ProductDTO;
import com.eduit.bootcamp.cartui.model.UserLoginModel;

@Controller
@RequestMapping(path = "/products")
public class ProductsController extends BaseController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ProductsController.class);
	
	public ProductsController() {
		// TODO Auto-generated constructor stub
	}

	@GetMapping("")
	public String mainPage(HttpServletRequest request, HttpServletResponse response, Model model) {
		HttpSession session = request.getSession();
		model.addAttribute("products", new ArrayList<ProductDTO>());
		model.addAttribute("userLoginModel", new UserLoginModel());
		checkUserSession(response, model, session);
		
		return "products";
	}

}
