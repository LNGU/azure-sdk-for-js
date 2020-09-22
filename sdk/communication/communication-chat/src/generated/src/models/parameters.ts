/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationURLParameter,
  OperationQueryParameter,
  OperationParameter
} from "@azure/core-http";
import {
  SendReadReceiptRequest as SendReadReceiptRequestMapper,
  SendChatMessageRequest as SendChatMessageRequestMapper,
  UpdateChatMessageRequest as UpdateChatMessageRequestMapper,
  AddChatThreadMembersRequest as AddChatThreadMembersRequestMapper,
  CreateChatThreadRequest as CreateChatThreadRequestMapper,
  UpdateChatThreadRequest as UpdateChatThreadRequestMapper
} from "../models/mappers";

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const chatThreadId: OperationURLParameter = {
  parameterPath: "chatThreadId",
  mapper: {
    serializedName: "chatThreadId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-09-21-preview2",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: SendReadReceiptRequestMapper
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: SendChatMessageRequestMapper
};

export const maxPageSize: OperationQueryParameter = {
  parameterPath: ["options", "maxPageSize"],
  mapper: {
    serializedName: "maxPageSize",
    type: {
      name: "Number"
    }
  }
};

export const startTime: OperationQueryParameter = {
  parameterPath: ["options", "startTime"],
  mapper: {
    serializedName: "startTime",
    type: {
      name: "DateTime"
    }
  }
};

export const chatMessageId: OperationURLParameter = {
  parameterPath: "chatMessageId",
  mapper: {
    serializedName: "chatMessageId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: UpdateChatMessageRequestMapper
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: AddChatThreadMembersRequestMapper
};

export const chatMemberId: OperationURLParameter = {
  parameterPath: "chatMemberId",
  mapper: {
    serializedName: "chatMemberId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: CreateChatThreadRequestMapper
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: UpdateChatThreadRequestMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};