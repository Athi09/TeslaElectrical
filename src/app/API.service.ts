/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateOrder: OnCreateOrderSubscription;
  onUpdateOrder: OnUpdateOrderSubscription;
  onDeleteOrder: OnDeleteOrderSubscription;
  onCreateProjectManager: OnCreateProjectManagerSubscription;
  onUpdateProjectManager: OnUpdateProjectManagerSubscription;
  onDeleteProjectManager: OnDeleteProjectManagerSubscription;
  onCreateSupplier: OnCreateSupplierSubscription;
  onUpdateSupplier: OnUpdateSupplierSubscription;
  onDeleteSupplier: OnDeleteSupplierSubscription;
  onCreateRequirements: OnCreateRequirementsSubscription;
  onUpdateRequirements: OnUpdateRequirementsSubscription;
  onDeleteRequirements: OnDeleteRequirementsSubscription;
};

export type CreateOrderInput = {
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id?: string | null;
};

export type ModelOrderConditionInput = {
  SupplierName?: ModelStringInput | null;
  SiteName?: ModelStringInput | null;
  ItemCode?: ModelStringInput | null;
  ItemName?: ModelStringInput | null;
  Quantity?: ModelIntInput | null;
  and?: Array<ModelOrderConditionInput | null> | null;
  or?: Array<ModelOrderConditionInput | null> | null;
  not?: ModelOrderConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Order = {
  __typename: "Order";
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderInput = {
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
};

export type DeleteOrderInput = {
  id: string;
};

export type CreateProjectManagerInput = {
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id?: string | null;
};

export type ModelProjectManagerConditionInput = {
  name?: ModelStringInput | null;
  siteNumber?: ModelIntInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelProjectManagerConditionInput | null> | null;
  or?: Array<ModelProjectManagerConditionInput | null> | null;
  not?: ModelProjectManagerConditionInput | null;
};

export type ProjectManager = {
  __typename: "ProjectManager";
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectManagerInput = {
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
};

export type DeleteProjectManagerInput = {
  id: string;
};

export type CreateSupplierInput = {
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id?: string | null;
};

export type ModelSupplierConditionInput = {
  name?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  cell?: ModelIntInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelSupplierConditionInput | null> | null;
  or?: Array<ModelSupplierConditionInput | null> | null;
  not?: ModelSupplierConditionInput | null;
};

export type Supplier = {
  __typename: "Supplier";
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSupplierInput = {
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
};

export type DeleteSupplierInput = {
  id: string;
};

export type CreateRequirementsInput = {
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id?: string | null;
};

export type ModelRequirementsConditionInput = {
  name?: ModelStringInput | null;
  Quantity?: ModelIntInput | null;
  siteNumber?: ModelIntInput | null;
  and?: Array<ModelRequirementsConditionInput | null> | null;
  or?: Array<ModelRequirementsConditionInput | null> | null;
  not?: ModelRequirementsConditionInput | null;
};

export type Requirements = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRequirementsInput = {
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
};

export type DeleteRequirementsInput = {
  id: string;
};

export type ModelOrderFilterInput = {
  SupplierName?: ModelStringInput | null;
  SiteName?: ModelStringInput | null;
  ItemCode?: ModelStringInput | null;
  ItemName?: ModelStringInput | null;
  Quantity?: ModelIntInput | null;
  and?: Array<ModelOrderFilterInput | null> | null;
  or?: Array<ModelOrderFilterInput | null> | null;
  not?: ModelOrderFilterInput | null;
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection";
  items: Array<Order | null>;
  nextToken?: string | null;
};

export type ModelProjectManagerFilterInput = {
  name?: ModelStringInput | null;
  siteNumber?: ModelIntInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelProjectManagerFilterInput | null> | null;
  or?: Array<ModelProjectManagerFilterInput | null> | null;
  not?: ModelProjectManagerFilterInput | null;
};

export type ModelProjectManagerConnection = {
  __typename: "ModelProjectManagerConnection";
  items: Array<ProjectManager | null>;
  nextToken?: string | null;
};

export type ModelSupplierFilterInput = {
  name?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  cell?: ModelIntInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelSupplierFilterInput | null> | null;
  or?: Array<ModelSupplierFilterInput | null> | null;
  not?: ModelSupplierFilterInput | null;
};

export type ModelSupplierConnection = {
  __typename: "ModelSupplierConnection";
  items: Array<Supplier | null>;
  nextToken?: string | null;
};

export type ModelRequirementsFilterInput = {
  name?: ModelStringInput | null;
  Quantity?: ModelIntInput | null;
  siteNumber?: ModelIntInput | null;
  and?: Array<ModelRequirementsFilterInput | null> | null;
  or?: Array<ModelRequirementsFilterInput | null> | null;
  not?: ModelRequirementsFilterInput | null;
};

export type ModelRequirementsConnection = {
  __typename: "ModelRequirementsConnection";
  items: Array<Requirements | null>;
  nextToken?: string | null;
};

export type CreateOrderMutation = {
  __typename: "Order";
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectManagerMutation = {
  __typename: "ProjectManager";
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectManagerMutation = {
  __typename: "ProjectManager";
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectManagerMutation = {
  __typename: "ProjectManager";
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateSupplierMutation = {
  __typename: "Supplier";
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSupplierMutation = {
  __typename: "Supplier";
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSupplierMutation = {
  __typename: "Supplier";
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateRequirementsMutation = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRequirementsMutation = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRequirementsMutation = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type GetOrderQuery = {
  __typename: "Order";
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListOrdersQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    SupplierName?: string | null;
    SiteName?: string | null;
    ItemCode?: string | null;
    ItemName?: string | null;
    Quantity?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetProjectManagerQuery = {
  __typename: "ProjectManager";
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectManagersQuery = {
  __typename: "ModelProjectManagerConnection";
  items: Array<{
    __typename: "ProjectManager";
    name?: string | null;
    siteNumber?: number | null;
    email?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetSupplierQuery = {
  __typename: "Supplier";
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListSuppliersQuery = {
  __typename: "ModelSupplierConnection";
  items: Array<{
    __typename: "Supplier";
    name?: string | null;
    companyName?: string | null;
    cell?: number | null;
    email?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRequirementsQuery = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRequirementsQuery = {
  __typename: "ModelRequirementsConnection";
  items: Array<{
    __typename: "Requirements";
    name?: string | null;
    Quantity?: number | null;
    siteNumber?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateOrderSubscription = {
  __typename: "Order";
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderSubscription = {
  __typename: "Order";
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderSubscription = {
  __typename: "Order";
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectManagerSubscription = {
  __typename: "ProjectManager";
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectManagerSubscription = {
  __typename: "ProjectManager";
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectManagerSubscription = {
  __typename: "ProjectManager";
  name?: string | null;
  siteNumber?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSupplierSubscription = {
  __typename: "Supplier";
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSupplierSubscription = {
  __typename: "Supplier";
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSupplierSubscription = {
  __typename: "Supplier";
  name?: string | null;
  companyName?: string | null;
  cell?: number | null;
  email?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRequirementsSubscription = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRequirementsSubscription = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRequirementsSubscription = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: number | null;
  siteNumber?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateOrder(
    input: CreateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!, $condition: ModelOrderConditionInput) {
        createOrder(input: $input, condition: $condition) {
          __typename
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrderMutation>response.data.createOrder;
  }
  async UpdateOrder(
    input: UpdateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<UpdateOrderMutation> {
    const statement = `mutation UpdateOrder($input: UpdateOrderInput!, $condition: ModelOrderConditionInput) {
        updateOrder(input: $input, condition: $condition) {
          __typename
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrderMutation>response.data.updateOrder;
  }
  async DeleteOrder(
    input: DeleteOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<DeleteOrderMutation> {
    const statement = `mutation DeleteOrder($input: DeleteOrderInput!, $condition: ModelOrderConditionInput) {
        deleteOrder(input: $input, condition: $condition) {
          __typename
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrderMutation>response.data.deleteOrder;
  }
  async CreateProjectManager(
    input: CreateProjectManagerInput,
    condition?: ModelProjectManagerConditionInput
  ): Promise<CreateProjectManagerMutation> {
    const statement = `mutation CreateProjectManager($input: CreateProjectManagerInput!, $condition: ModelProjectManagerConditionInput) {
        createProjectManager(input: $input, condition: $condition) {
          __typename
          name
          siteNumber
          email
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectManagerMutation>response.data.createProjectManager;
  }
  async UpdateProjectManager(
    input: UpdateProjectManagerInput,
    condition?: ModelProjectManagerConditionInput
  ): Promise<UpdateProjectManagerMutation> {
    const statement = `mutation UpdateProjectManager($input: UpdateProjectManagerInput!, $condition: ModelProjectManagerConditionInput) {
        updateProjectManager(input: $input, condition: $condition) {
          __typename
          name
          siteNumber
          email
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectManagerMutation>response.data.updateProjectManager;
  }
  async DeleteProjectManager(
    input: DeleteProjectManagerInput,
    condition?: ModelProjectManagerConditionInput
  ): Promise<DeleteProjectManagerMutation> {
    const statement = `mutation DeleteProjectManager($input: DeleteProjectManagerInput!, $condition: ModelProjectManagerConditionInput) {
        deleteProjectManager(input: $input, condition: $condition) {
          __typename
          name
          siteNumber
          email
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectManagerMutation>response.data.deleteProjectManager;
  }
  async CreateSupplier(
    input: CreateSupplierInput,
    condition?: ModelSupplierConditionInput
  ): Promise<CreateSupplierMutation> {
    const statement = `mutation CreateSupplier($input: CreateSupplierInput!, $condition: ModelSupplierConditionInput) {
        createSupplier(input: $input, condition: $condition) {
          __typename
          name
          companyName
          cell
          email
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSupplierMutation>response.data.createSupplier;
  }
  async UpdateSupplier(
    input: UpdateSupplierInput,
    condition?: ModelSupplierConditionInput
  ): Promise<UpdateSupplierMutation> {
    const statement = `mutation UpdateSupplier($input: UpdateSupplierInput!, $condition: ModelSupplierConditionInput) {
        updateSupplier(input: $input, condition: $condition) {
          __typename
          name
          companyName
          cell
          email
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSupplierMutation>response.data.updateSupplier;
  }
  async DeleteSupplier(
    input: DeleteSupplierInput,
    condition?: ModelSupplierConditionInput
  ): Promise<DeleteSupplierMutation> {
    const statement = `mutation DeleteSupplier($input: DeleteSupplierInput!, $condition: ModelSupplierConditionInput) {
        deleteSupplier(input: $input, condition: $condition) {
          __typename
          name
          companyName
          cell
          email
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSupplierMutation>response.data.deleteSupplier;
  }
  async CreateRequirements(
    input: CreateRequirementsInput,
    condition?: ModelRequirementsConditionInput
  ): Promise<CreateRequirementsMutation> {
    const statement = `mutation CreateRequirements($input: CreateRequirementsInput!, $condition: ModelRequirementsConditionInput) {
        createRequirements(input: $input, condition: $condition) {
          __typename
          name
          Quantity
          siteNumber
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRequirementsMutation>response.data.createRequirements;
  }
  async UpdateRequirements(
    input: UpdateRequirementsInput,
    condition?: ModelRequirementsConditionInput
  ): Promise<UpdateRequirementsMutation> {
    const statement = `mutation UpdateRequirements($input: UpdateRequirementsInput!, $condition: ModelRequirementsConditionInput) {
        updateRequirements(input: $input, condition: $condition) {
          __typename
          name
          Quantity
          siteNumber
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRequirementsMutation>response.data.updateRequirements;
  }
  async DeleteRequirements(
    input: DeleteRequirementsInput,
    condition?: ModelRequirementsConditionInput
  ): Promise<DeleteRequirementsMutation> {
    const statement = `mutation DeleteRequirements($input: DeleteRequirementsInput!, $condition: ModelRequirementsConditionInput) {
        deleteRequirements(input: $input, condition: $condition) {
          __typename
          name
          Quantity
          siteNumber
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRequirementsMutation>response.data.deleteRequirements;
  }
  async GetOrder(id: string): Promise<GetOrderQuery> {
    const statement = `query GetOrder($id: ID!) {
        getOrder(id: $id) {
          __typename
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderQuery>response.data.getOrder;
  }
  async ListOrders(
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrdersQuery> {
    const statement = `query ListOrders($filter: ModelOrderFilterInput, $limit: Int, $nextToken: String) {
        listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            SupplierName
            SiteName
            ItemCode
            ItemName
            Quantity
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrdersQuery>response.data.listOrders;
  }
  async GetProjectManager(id: string): Promise<GetProjectManagerQuery> {
    const statement = `query GetProjectManager($id: ID!) {
        getProjectManager(id: $id) {
          __typename
          name
          siteNumber
          email
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectManagerQuery>response.data.getProjectManager;
  }
  async ListProjectManagers(
    filter?: ModelProjectManagerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectManagersQuery> {
    const statement = `query ListProjectManagers($filter: ModelProjectManagerFilterInput, $limit: Int, $nextToken: String) {
        listProjectManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            siteNumber
            email
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectManagersQuery>response.data.listProjectManagers;
  }
  async GetSupplier(id: string): Promise<GetSupplierQuery> {
    const statement = `query GetSupplier($id: ID!) {
        getSupplier(id: $id) {
          __typename
          name
          companyName
          cell
          email
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSupplierQuery>response.data.getSupplier;
  }
  async ListSuppliers(
    filter?: ModelSupplierFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSuppliersQuery> {
    const statement = `query ListSuppliers($filter: ModelSupplierFilterInput, $limit: Int, $nextToken: String) {
        listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            companyName
            cell
            email
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSuppliersQuery>response.data.listSuppliers;
  }
  async GetRequirements(id: string): Promise<GetRequirementsQuery> {
    const statement = `query GetRequirements($id: ID!) {
        getRequirements(id: $id) {
          __typename
          name
          Quantity
          siteNumber
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRequirementsQuery>response.data.getRequirements;
  }
  async ListRequirements(
    filter?: ModelRequirementsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRequirementsQuery> {
    const statement = `query ListRequirements($filter: ModelRequirementsFilterInput, $limit: Int, $nextToken: String) {
        listRequirements(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            Quantity
            siteNumber
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRequirementsQuery>response.data.listRequirements;
  }
  OnCreateOrderListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOrder">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrder {
        onCreateOrder {
          __typename
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOrder">>
  >;

  OnUpdateOrderListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOrder">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrder {
        onUpdateOrder {
          __typename
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOrder">>
  >;

  OnDeleteOrderListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOrder">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrder {
        onDeleteOrder {
          __typename
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOrder">>
  >;

  OnCreateProjectManagerListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateProjectManager">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectManager {
        onCreateProjectManager {
          __typename
          name
          siteNumber
          email
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateProjectManager">
    >
  >;

  OnUpdateProjectManagerListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateProjectManager">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectManager {
        onUpdateProjectManager {
          __typename
          name
          siteNumber
          email
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateProjectManager">
    >
  >;

  OnDeleteProjectManagerListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteProjectManager">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectManager {
        onDeleteProjectManager {
          __typename
          name
          siteNumber
          email
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteProjectManager">
    >
  >;

  OnCreateSupplierListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSupplier">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSupplier {
        onCreateSupplier {
          __typename
          name
          companyName
          cell
          email
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSupplier">>
  >;

  OnUpdateSupplierListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSupplier">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSupplier {
        onUpdateSupplier {
          __typename
          name
          companyName
          cell
          email
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSupplier">>
  >;

  OnDeleteSupplierListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSupplier">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSupplier {
        onDeleteSupplier {
          __typename
          name
          companyName
          cell
          email
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSupplier">>
  >;

  OnCreateRequirementsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRequirements">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRequirements {
        onCreateRequirements {
          __typename
          name
          Quantity
          siteNumber
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRequirements">>
  >;

  OnUpdateRequirementsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRequirements">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRequirements {
        onUpdateRequirements {
          __typename
          name
          Quantity
          siteNumber
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRequirements">>
  >;

  OnDeleteRequirementsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRequirements">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRequirements {
        onDeleteRequirements {
          __typename
          name
          Quantity
          siteNumber
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRequirements">>
  >;
}
