package com.eduit.bootcamp.cartui.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.HttpClientErrorException;

import com.eduit.bootcamp.cart_ui.api.BackofficeApi;
import com.eduit.bootcamp.cart_ui.model.CategoryListDTO;
import com.eduit.bootcamp.cart_ui.model.ResponseContainerResponseDTO;
import com.eduit.bootcamp.cartui.model.UserLoginModel;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@RequestMapping(path = "/index")
public class IndexController extends BaseController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);
	
	private BackofficeApi backofficeApi;
	private ObjectMapper mapper;
	
	public IndexController(ObjectMapper theMapper, BackofficeApi theBackofficeApi) {
		mapper = theMapper;
		backofficeApi = theBackofficeApi;
	}

	@GetMapping("")
	public String indexPage(HttpServletRequest request, HttpServletResponse response, Model model) {
		HttpSession session = request.getSession();
		ResponseContainerResponseDTO responseContainerDto = null;
		try {
			responseContainerDto = backofficeApi.retrieveAllCategory();
		} catch (HttpClientErrorException e) {
			try {
				responseContainerDto = mapper.readValue(e.getResponseBodyAsByteArray(), ResponseContainerResponseDTO.class);
			} catch (Exception e1) {
				LOGGER.error("response error de-serialization error", e1);
			}
		}
		
		if (responseContainerDto == null) {
			model.addAttribute("errorRetrievingCategories", "Error interno.");
		} else if (responseContainerDto.getErrors() != null && !responseContainerDto.getErrors().isEmpty()) {
			model.addAttribute("errorRetrievingCategories", responseContainerDto.getErrors().get(0).getDetail());
		} else {
			CategoryListDTO categoryListDTO = (CategoryListDTO) responseContainerDto.getData();
			model.addAttribute("categories", categoryListDTO);
		}
		
		model.addAttribute("userLoginModel", new UserLoginModel());
		checkUserSession(response, model, session);
		
		return "index";
	}
}
