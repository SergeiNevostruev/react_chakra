// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type OptionsLegacyParser, formDataBodySerializer } from './client';
import type { UploadFileData, UploadFileError, UploadFileResponse, AddPetData, UpdatePetData, FindPetsByStatusData, FindPetsByStatusError, FindPetsByStatusResponse, FindPetsByTagsData, FindPetsByTagsError, FindPetsByTagsResponse, GetPetByIdData, GetPetByIdError, GetPetByIdResponse, UpdatePetWithFormData, DeletePetData, GetInventoryError, GetInventoryResponse, PlaceOrderData, PlaceOrderError, PlaceOrderResponse, GetOrderByIdData, GetOrderByIdError, GetOrderByIdResponse, DeleteOrderData, CreateUsersWithListInputData, CreateUsersWithListInputError, CreateUsersWithListInputResponse, GetUserByNameData, GetUserByNameError, GetUserByNameResponse, UpdateUserData, DeleteUserData, LoginUserData, LoginUserError, LoginUserResponse, LogoutUserError, LogoutUserResponse, CreateUsersWithArrayInputData, CreateUsersWithArrayInputError, CreateUsersWithArrayInputResponse, CreateUserData, CreateUserError, CreateUserResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * uploads an image
 */
export const uploadFile = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UploadFileData, ThrowOnError>) => {
    return (options?.client ?? client).post<UploadFileResponse, UploadFileError, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/pet/{petId}/uploadImage'
    });
};

/**
 * Add a new pet to the store
 */
export const addPet = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<AddPetData, ThrowOnError>) => {
    return (options?.client ?? client).post<void, unknown, ThrowOnError>({
        ...options,
        url: '/pet'
    });
};

/**
 * Update an existing pet
 */
export const updatePet = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdatePetData, ThrowOnError>) => {
    return (options?.client ?? client).put<void, unknown, ThrowOnError>({
        ...options,
        url: '/pet'
    });
};

/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 */
export const findPetsByStatus = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<FindPetsByStatusData, ThrowOnError>) => {
    return (options?.client ?? client).get<FindPetsByStatusResponse, FindPetsByStatusError, ThrowOnError>({
        ...options,
        url: '/pet/findByStatus'
    });
};

/**
 * @deprecated
 * Finds Pets by tags
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */
export const findPetsByTags = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<FindPetsByTagsData, ThrowOnError>) => {
    return (options?.client ?? client).get<FindPetsByTagsResponse, FindPetsByTagsError, ThrowOnError>({
        ...options,
        url: '/pet/findByTags'
    });
};

/**
 * Find pet by ID
 * Returns a single pet
 */
export const getPetById = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetPetByIdData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetPetByIdResponse, GetPetByIdError, ThrowOnError>({
        ...options,
        url: '/pet/{petId}'
    });
};

/**
 * Updates a pet in the store with form data
 */
export const updatePetWithForm = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdatePetWithFormData, ThrowOnError>) => {
    return (options?.client ?? client).post<void, unknown, ThrowOnError>({
        ...options,
        ...formDataBodySerializer,
        headers: {
            'Content-Type': null,
            ...options?.headers
        },
        url: '/pet/{petId}'
    });
};

/**
 * Deletes a pet
 */
export const deletePet = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeletePetData, ThrowOnError>) => {
    return (options?.client ?? client).delete<void, unknown, ThrowOnError>({
        ...options,
        url: '/pet/{petId}'
    });
};

/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 */
export const getInventory = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<GetInventoryResponse, GetInventoryError, ThrowOnError>({
        ...options,
        url: '/store/inventory'
    });
};

/**
 * Place an order for a pet
 */
export const placeOrder = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<PlaceOrderData, ThrowOnError>) => {
    return (options?.client ?? client).post<PlaceOrderResponse, PlaceOrderError, ThrowOnError>({
        ...options,
        url: '/store/order'
    });
};

/**
 * Find purchase order by ID
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 */
export const getOrderById = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetOrderByIdData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetOrderByIdResponse, GetOrderByIdError, ThrowOnError>({
        ...options,
        url: '/store/order/{orderId}'
    });
};

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 */
export const deleteOrder = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteOrderData, ThrowOnError>) => {
    return (options?.client ?? client).delete<void, unknown, ThrowOnError>({
        ...options,
        url: '/store/order/{orderId}'
    });
};

/**
 * Creates list of users with given input array
 */
export const createUsersWithListInput = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateUsersWithListInputData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateUsersWithListInputResponse, CreateUsersWithListInputError, ThrowOnError>({
        ...options,
        url: '/user/createWithList'
    });
};

/**
 * Get user by user name
 */
export const getUserByName = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetUserByNameData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetUserByNameResponse, GetUserByNameError, ThrowOnError>({
        ...options,
        url: '/user/{username}'
    });
};

/**
 * Updated user
 * This can only be done by the logged in user.
 */
export const updateUser = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateUserData, ThrowOnError>) => {
    return (options?.client ?? client).put<void, unknown, ThrowOnError>({
        ...options,
        url: '/user/{username}'
    });
};

/**
 * Delete user
 * This can only be done by the logged in user.
 */
export const deleteUser = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteUserData, ThrowOnError>) => {
    return (options?.client ?? client).delete<void, unknown, ThrowOnError>({
        ...options,
        url: '/user/{username}'
    });
};

/**
 * Logs user into the system
 */
export const loginUser = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<LoginUserData, ThrowOnError>) => {
    return (options?.client ?? client).get<LoginUserResponse, LoginUserError, ThrowOnError>({
        ...options,
        url: '/user/login'
    });
};

/**
 * Logs out current logged in user session
 */
export const logoutUser = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<LogoutUserResponse, LogoutUserError, ThrowOnError>({
        ...options,
        url: '/user/logout'
    });
};

/**
 * Creates list of users with given input array
 */
export const createUsersWithArrayInput = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateUsersWithArrayInputData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateUsersWithArrayInputResponse, CreateUsersWithArrayInputError, ThrowOnError>({
        ...options,
        url: '/user/createWithArray'
    });
};

/**
 * Create user
 * This can only be done by the logged in user.
 */
export const createUser = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateUserData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateUserResponse, CreateUserError, ThrowOnError>({
        ...options,
        url: '/user'
    });
};