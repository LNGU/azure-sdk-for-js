/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/networkExperimentProfilesMappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClientContext } from "../frontDoorManagementClientContext";

/** Class representing a NetworkExperimentProfiles. */
export class NetworkExperimentProfiles {
  private readonly client: FrontDoorManagementClientContext;

  /**
   * Create a NetworkExperimentProfiles.
   * @param {FrontDoorManagementClientContext} client Reference to the service client.
   */
  constructor(client: FrontDoorManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary Gets a list of Network Experiment Profiles under a subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkExperimentProfilesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.NetworkExperimentProfilesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ProfileList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProfileList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProfileList>, callback?: msRest.ServiceCallback<Models.ProfileList>): Promise<Models.NetworkExperimentProfilesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.NetworkExperimentProfilesListResponse>;
  }

  /**
   * @summary Gets a list of Network Experiment Profiles within a resource group under a subscription
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkExperimentProfilesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkExperimentProfilesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ProfileList>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProfileList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProfileList>, callback?: msRest.ServiceCallback<Models.ProfileList>): Promise<Models.NetworkExperimentProfilesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.NetworkExperimentProfilesListByResourceGroupResponse>;
  }

  /**
   * @summary Gets an NetworkExperiment Profile by ProfileName
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkExperimentProfilesGetResponse>
   */
  get(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkExperimentProfilesGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, callback: msRest.ServiceCallback<Models.Profile>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Profile>): void;
  get(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Profile>, callback?: msRest.ServiceCallback<Models.Profile>): Promise<Models.NetworkExperimentProfilesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.NetworkExperimentProfilesGetResponse>;
  }

  /**
   * @summary Creates an NetworkExperiment Profile
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param parameters An Network Experiment Profile
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkExperimentProfilesCreateOrUpdateResponse>
   */
  createOrUpdate(profileName: string, resourceGroupName: string, parameters: Models.Profile, options?: msRest.RequestOptionsBase): Promise<Models.NetworkExperimentProfilesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(profileName,resourceGroupName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.NetworkExperimentProfilesCreateOrUpdateResponse>;
  }

  /**
   * Updates an NetworkExperimentProfiles
   * @summary Updates an NetworkExperimentProfiles by NetworkExperimentProfile name
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param parameters The Profile Update Model
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkExperimentProfilesUpdateResponse>
   */
  update(resourceGroupName: string, profileName: string, parameters: Models.ProfileUpdateModel, options?: msRest.RequestOptionsBase): Promise<Models.NetworkExperimentProfilesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,profileName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.NetworkExperimentProfilesUpdateResponse>;
  }

  /**
   * @summary Deletes an NetworkExperiment Profile by ProfileName
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,profileName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @summary Creates an NetworkExperiment Profile
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param parameters An Network Experiment Profile
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(profileName: string, resourceGroupName: string, parameters: Models.Profile, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        profileName,
        resourceGroupName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates an NetworkExperimentProfiles
   * @summary Updates an NetworkExperimentProfiles by NetworkExperimentProfile name
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param parameters The Profile Update Model
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, profileName: string, parameters: Models.ProfileUpdateModel, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * @summary Deletes an NetworkExperiment Profile by ProfileName
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary Gets a list of Network Experiment Profiles under a subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkExperimentProfilesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkExperimentProfilesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProfileList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProfileList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProfileList>, callback?: msRest.ServiceCallback<Models.ProfileList>): Promise<Models.NetworkExperimentProfilesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.NetworkExperimentProfilesListNextResponse>;
  }

  /**
   * @summary Gets a list of Network Experiment Profiles within a resource group under a subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkExperimentProfilesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkExperimentProfilesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProfileList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProfileList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProfileList>, callback?: msRest.ServiceCallback<Models.ProfileList>): Promise<Models.NetworkExperimentProfilesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.NetworkExperimentProfilesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/NetworkExperimentProfiles",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProfileList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProfileList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Profile
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}",
  urlParameters: [
    Parameters.profileName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Profile,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Profile
    },
    201: {
      bodyMapper: Mappers.Profile
    },
    202: {
      bodyMapper: Mappers.Profile
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ProfileUpdateModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Profile
    },
    202: {
      bodyMapper: Mappers.Profile
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProfileList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProfileList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};