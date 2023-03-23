/**
 * Eduit REST shopping cart API - OpenAPI 3.0
 * Aplicacion Carrito de compras Bootcamp EducacionIt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: federicovittorini@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ResponseContainerResponseDTO from '../com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO';
import UserDTO from '../com.eduit.bootcamp.cart-ui.model/UserDTO';
import UserRequestDTO from '../com.eduit.bootcamp.cart-ui.model/UserRequestDTO';

/**
* User service.
* @module com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi
* @version 1.0.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi
    * @class
    * @param {module:com.eduit.bootcamp.cart-ui/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.eduit.bootcamp.cart-ui/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create user
     * Create a user, authentication required.
     * @param {Object} opts Optional parameters
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserRequestDTO} opts.userRequestDTO Created user object
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    createUser(opts, callback) {
      opts = opts || {};
      let postBody = opts['userRequestDTO'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/users/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete user
     * Delete a user, authentication required.
     * @param {Number} userId the user id
     * @param {Object} opts Optional parameters
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserDTO} opts.userDTO Created user object
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    deleteUser(userId, opts, callback) {
      opts = opts || {};
      let postBody = opts['userDTO'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUser");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/users/user/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAllUsers operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~retrieveAllUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of users
     * Retrieve a list of users, authentication required.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~retrieveAllUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    retrieveAllUsers(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/users/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveUser operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~retrieveUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user
     * Retrieve a user, authentication required.
     * @param {Number} userId the user id
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~retrieveUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    retrieveUser(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling retrieveUser");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/users/user/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user
     * Update a user, authentication required.
     * @param {Number} userId the user id
     * @param {Object} opts Optional parameters
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/UserDTO} opts.userDTO Updated user object
     * @param {module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.eduit.bootcamp.cart-ui/com.eduit.bootcamp.cart-ui.model/ResponseContainerResponseDTO}
     */
    updateUser(userId, opts, callback) {
      opts = opts || {};
      let postBody = opts['userDTO'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseContainerResponseDTO;
      return this.apiClient.callApi(
        '/users/user/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}