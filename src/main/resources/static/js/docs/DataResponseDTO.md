# EduitRestShoppingCartApiOpenApi30.DataResponseDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of the contained object | [optional] 
**accessToken** | **String** |  | [optional] 
**refreshToken** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**price** | **Number** |  | 
**qty** | **Number** | the stock quantity. | 
**category** | [**CategoryDTO**](CategoryDTO.md) |  | 
**dateCreated** | **Date** |  | 
**dateDeleted** | **Date** |  | [optional] 
**items** | [**[ProductDTO]**](ProductDTO.md) |  | [optional] 
**username** | **String** |  | 
**firstName** | **String** |  | 
**lastName** | **String** |  | 
**email** | **String** | this field represent the user email | 
**password** | **String** |  | 
**role** | **String** | The user role. | [default to &#39;ROLE_USER&#39;]
**parentCategoryId** | **Number** |  | [optional] 
**user** | [**UserDTO**](UserDTO.md) |  | 
**productList** | [**[ProductDTO]**](ProductDTO.md) |  | [optional] 
**date** | **Date** |  | [optional] 



## Enum: RoleEnum


* `USER` (value: `"ROLE_USER"`)

* `ADMIN` (value: `"ROLE_ADMIN"`)




