# EduitRestShoppingCartApiOpenApi30.UserApi

All URIs are relative to *https://localhost:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /users/user | Create user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/user/{userId} | Delete user
[**retrieveAllUsers**](UserApi.md#retrieveAllUsers) | **GET** /users/user | Retrieve a list of users
[**retrieveUser**](UserApi.md#retrieveUser) | **GET** /users/user/{userId} | Retrieve a user
[**updateUser**](UserApi.md#updateUser) | **PUT** /users/user/{userId} | Update user



## createUser

> ResponseContainerResponseDTO createUser(opts)

Create user

Create a user, authentication required.

### Example

```javascript
import EduitRestShoppingCartApiOpenApi30 from 'eduit_rest_shopping_cart_api_open_api_3_0';
let defaultClient = EduitRestShoppingCartApiOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EduitRestShoppingCartApiOpenApi30.UserApi();
let opts = {
  'userRequestDTO': new EduitRestShoppingCartApiOpenApi30.UserRequestDTO() // UserRequestDTO | Created user object
};
apiInstance.createUser(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRequestDTO** | [**UserRequestDTO**](UserRequestDTO.md)| Created user object | [optional] 

### Return type

[**ResponseContainerResponseDTO**](ResponseContainerResponseDTO.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> ResponseContainerResponseDTO deleteUser(userId, opts)

Delete user

Delete a user, authentication required.

### Example

```javascript
import EduitRestShoppingCartApiOpenApi30 from 'eduit_rest_shopping_cart_api_open_api_3_0';
let defaultClient = EduitRestShoppingCartApiOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EduitRestShoppingCartApiOpenApi30.UserApi();
let userId = 789; // Number | the user id
let opts = {
  'userDTO': new EduitRestShoppingCartApiOpenApi30.UserDTO() // UserDTO | Created user object
};
apiInstance.deleteUser(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| the user id | 
 **userDTO** | [**UserDTO**](UserDTO.md)| Created user object | [optional] 

### Return type

[**ResponseContainerResponseDTO**](ResponseContainerResponseDTO.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveAllUsers

> ResponseContainerResponseDTO retrieveAllUsers()

Retrieve a list of users

Retrieve a list of users, authentication required.

### Example

```javascript
import EduitRestShoppingCartApiOpenApi30 from 'eduit_rest_shopping_cart_api_open_api_3_0';
let defaultClient = EduitRestShoppingCartApiOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EduitRestShoppingCartApiOpenApi30.UserApi();
apiInstance.retrieveAllUsers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ResponseContainerResponseDTO**](ResponseContainerResponseDTO.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveUser

> ResponseContainerResponseDTO retrieveUser(userId)

Retrieve a user

Retrieve a user, authentication required.

### Example

```javascript
import EduitRestShoppingCartApiOpenApi30 from 'eduit_rest_shopping_cart_api_open_api_3_0';
let defaultClient = EduitRestShoppingCartApiOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EduitRestShoppingCartApiOpenApi30.UserApi();
let userId = 789; // Number | the user id
apiInstance.retrieveUser(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| the user id | 

### Return type

[**ResponseContainerResponseDTO**](ResponseContainerResponseDTO.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> ResponseContainerResponseDTO updateUser(userId, opts)

Update user

Update a user, authentication required.

### Example

```javascript
import EduitRestShoppingCartApiOpenApi30 from 'eduit_rest_shopping_cart_api_open_api_3_0';
let defaultClient = EduitRestShoppingCartApiOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EduitRestShoppingCartApiOpenApi30.UserApi();
let userId = 789; // Number | the user id
let opts = {
  'userDTO': new EduitRestShoppingCartApiOpenApi30.UserDTO() // UserDTO | Updated user object
};
apiInstance.updateUser(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| the user id | 
 **userDTO** | [**UserDTO**](UserDTO.md)| Updated user object | [optional] 

### Return type

[**ResponseContainerResponseDTO**](ResponseContainerResponseDTO.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

