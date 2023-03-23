package com.eduit.bootcamp.cartui.conf;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.BufferingClientHttpRequestFactory;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.DefaultUriBuilderFactory;

import com.eduit.bootcamp.cart_ui.ApiClient;
import com.eduit.bootcamp.cart_ui.api.BackofficeApi;
import com.eduit.bootcamp.cart_ui.api.LoginApi;
import com.eduit.bootcamp.cart_ui.api.StoreApi;
import com.eduit.bootcamp.cart_ui.api.UserApi;
import com.eduit.bootcamp.cartui.interceptors.RestTemplateHeaderModifierInterceptor;
import com.eduit.bootcamp.cartui.interceptors.RestTemplateResponseErrorHandler;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class AppConfig {

	@Bean
	public ApiClient getApiClient(RestTemplate restTemplate, @Value("${api.server.host}") String baseUri) {
		ApiClient client = new ApiClient(restTemplate);
		client.setBasePath(baseUri);
		return client;
	}
	
	@Bean
	public RestTemplateResponseErrorHandler getRestTemplateResponseErrorHandler(ObjectMapper objectMapper) {
		return new RestTemplateResponseErrorHandler(objectMapper);
	}
	
    @Bean
    public RestTemplate getRestTemplate(RestTemplateResponseErrorHandler responseErrorHandler, ObjectMapper objectMapper) {
        RestTemplate restTemplate = new RestTemplate();
        // This allows us to read the response more than once - Necessary for debugging.
        restTemplate.setRequestFactory(new BufferingClientHttpRequestFactory(restTemplate.getRequestFactory()));

        // disable default URL encoding
        DefaultUriBuilderFactory uriBuilderFactory = new DefaultUriBuilderFactory();
        uriBuilderFactory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);
        restTemplate.setUriTemplateHandler(uriBuilderFactory);

        List<ClientHttpRequestInterceptor> interceptors = restTemplate.getInterceptors();
        if (CollectionUtils.isEmpty(interceptors)) {
            interceptors = new ArrayList<>();
        }
        interceptors.add(new RestTemplateHeaderModifierInterceptor(objectMapper));
        restTemplate.setInterceptors(interceptors);
        return restTemplate;
    }
    
	@Bean
	public LoginApi getLoginApi(ApiClient apiClient) {
		return new LoginApi(apiClient);
	}
	
	@Bean
	public BackofficeApi getBackofficeApi(ApiClient apiClient) {
		return new BackofficeApi(apiClient);
	}
	
	@Bean
	public StoreApi getStoreApi(ApiClient apiClient) {
		return new StoreApi(apiClient);
	}
	
	@Bean
	public UserApi getUserApi(ApiClient apiClient) {
		return new UserApi(apiClient);
	}
	
}
