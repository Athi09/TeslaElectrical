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
  onCreateProjectt: OnCreateProjecttSubscription;
  onUpdateProjectt: OnUpdateProjecttSubscription;
  onDeleteProjectt: OnDeleteProjecttSubscription;
  onCreateMaterial: OnCreateMaterialSubscription;
  onUpdateMaterial: OnUpdateMaterialSubscription;
  onDeleteMaterial: OnDeleteMaterialSubscription;
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
  onCreateProjectName: OnCreateProjectNameSubscription;
  onUpdateProjectName: OnUpdateProjectNameSubscription;
  onDeleteProjectName: OnDeleteProjectNameSubscription;
};

export type CreateProjecttInput = {
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  id?: string | null;
};

export type ModelProjecttConditionInput = {
  ProjectName?: ModelStringInput | null;
  ProjectCode?: ModelStringInput | null;
  SiteManager?: ModelStringInput | null;
  and?: Array<ModelProjecttConditionInput | null> | null;
  or?: Array<ModelProjecttConditionInput | null> | null;
  not?: ModelProjecttConditionInput | null;
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

export type Projectt = {
  __typename: "Projectt";
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  Material?: ModelMaterialConnection | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelMaterialConnection = {
  __typename: "ModelMaterialConnection";
  items: Array<Material | null>;
  nextToken?: string | null;
};

export type Material = {
  __typename: "Material";
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  Project?: Projectt | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  projecttMaterialId?: string | null;
};

export type UpdateProjecttInput = {
  ProjectName?: string | null;
  ProjectCode?: string | null;
  SiteManager?: string | null;
  id: string;
};

export type DeleteProjecttInput = {
  id: string;
};

export type CreateMaterialInput = {
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  id?: string | null;
  projecttMaterialId?: string | null;
};

export type ModelMaterialConditionInput = {
  ProjectName?: ModelStringInput | null;
  MaterialDesc?: ModelStringInput | null;
  Quantity?: ModelStringInput | null;
  UnitOfMeasure?: ModelStringInput | null;
  Status?: ModelStringInput | null;
  QuantityRecieved?: ModelStringInput | null;
  QuantityShort?: ModelStringInput | null;
  and?: Array<ModelMaterialConditionInput | null> | null;
  or?: Array<ModelMaterialConditionInput | null> | null;
  not?: ModelMaterialConditionInput | null;
  projecttMaterialId?: ModelIDInput | null;
};

export type ModelIDInput = {
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

export type UpdateMaterialInput = {
  ProjectName?: string | null;
  MaterialDesc?: string | null;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  id: string;
  projecttMaterialId?: string | null;
};

export type DeleteMaterialInput = {
  id: string;
};

export type CreateOrderInput = {
  id?: string | null;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
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
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderInput = {
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
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
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id?: string | null;
};

export type ModelRequirementsConditionInput = {
  name?: ModelStringInput | null;
  Quantity?: ModelStringInput | null;
  siteName?: ModelStringInput | null;
  projectName?: ModelStringInput | null;
  and?: Array<ModelRequirementsConditionInput | null> | null;
  or?: Array<ModelRequirementsConditionInput | null> | null;
  not?: ModelRequirementsConditionInput | null;
};

export type Requirements = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRequirementsInput = {
  name?: string | null;
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
};

export type DeleteRequirementsInput = {
  id: string;
};

export type CreateProjectNameInput = {
  projectName?: string | null;
  siteName?: string | null;
  id?: string | null;
};

export type ModelProjectNameConditionInput = {
  projectName?: ModelStringInput | null;
  siteName?: ModelStringInput | null;
  and?: Array<ModelProjectNameConditionInput | null> | null;
  or?: Array<ModelProjectNameConditionInput | null> | null;
  not?: ModelProjectNameConditionInput | null;
};

export type projectName = {
  __typename: "projectName";
  projectName?: string | null;
  siteName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectNameInput = {
  projectName?: string | null;
  siteName?: string | null;
  id: string;
};

export type DeleteProjectNameInput = {
  id: string;
};

export type SearchableMaterialFilterInput = {
  ProjectName?: SearchableStringFilterInput | null;
  MaterialDesc?: SearchableStringFilterInput | null;
  Quantity?: SearchableStringFilterInput | null;
  UnitOfMeasure?: SearchableStringFilterInput | null;
  Status?: SearchableStringFilterInput | null;
  QuantityRecieved?: SearchableStringFilterInput | null;
  QuantityShort?: SearchableStringFilterInput | null;
  id?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  projecttMaterialId?: SearchableIDFilterInput | null;
  and?: Array<SearchableMaterialFilterInput | null> | null;
  or?: Array<SearchableMaterialFilterInput | null> | null;
  not?: SearchableMaterialFilterInput | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableMaterialSortInput = {
  field?: SearchableMaterialSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableMaterialSortableFields {
  ProjectName = "ProjectName",
  MaterialDesc = "MaterialDesc",
  Quantity = "Quantity",
  UnitOfMeasure = "UnitOfMeasure",
  Status = "Status",
  QuantityRecieved = "QuantityRecieved",
  QuantityShort = "QuantityShort",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  projecttMaterialId = "projecttMaterialId"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableMaterialAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableMaterialAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchableMaterialAggregateField {
  ProjectName = "ProjectName",
  MaterialDesc = "MaterialDesc",
  Quantity = "Quantity",
  UnitOfMeasure = "UnitOfMeasure",
  Status = "Status",
  QuantityRecieved = "QuantityRecieved",
  QuantityShort = "QuantityShort",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  projecttMaterialId = "projecttMaterialId"
}

export type SearchableMaterialConnection = {
  __typename: "SearchableMaterialConnection";
  items: Array<Material | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type ModelProjecttFilterInput = {
  ProjectName?: ModelStringInput | null;
  ProjectCode?: ModelStringInput | null;
  SiteManager?: ModelStringInput | null;
  and?: Array<ModelProjecttFilterInput | null> | null;
  or?: Array<ModelProjecttFilterInput | null> | null;
  not?: ModelProjecttFilterInput | null;
};

export type ModelProjecttConnection = {
  __typename: "ModelProjecttConnection";
  items: Array<Projectt | null>;
  nextToken?: string | null;
};

export type ModelMaterialFilterInput = {
  ProjectName?: ModelStringInput | null;
  MaterialDesc?: ModelStringInput | null;
  Quantity?: ModelStringInput | null;
  UnitOfMeasure?: ModelStringInput | null;
  Status?: ModelStringInput | null;
  QuantityRecieved?: ModelStringInput | null;
  QuantityShort?: ModelStringInput | null;
  and?: Array<ModelMaterialFilterInput | null> | null;
  or?: Array<ModelMaterialFilterInput | null> | null;
  not?: ModelMaterialFilterInput | null;
  projecttMaterialId?: ModelIDInput | null;
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null;
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
  Quantity?: ModelStringInput | null;
  siteName?: ModelStringInput | null;
  projectName?: ModelStringInput | null;
  and?: Array<ModelRequirementsFilterInput | null> | null;
  or?: Array<ModelRequirementsFilterInput | null> | null;
  not?: ModelRequirementsFilterInput | null;
};

export type ModelRequirementsConnection = {
  __typename: "ModelRequirementsConnection";
  items: Array<Requirements | null>;
  nextToken?: string | null;
};

export type ModelProjectNameFilterInput = {
  projectName?: ModelStringInput | null;
  siteName?: ModelStringInput | null;
  and?: Array<ModelProjectNameFilterInput | null> | null;
  or?: Array<ModelProjectNameFilterInput | null> | null;
  not?: ModelProjectNameFilterInput | null;
};

export type ModelProjectNameConnection = {
  __typename: "ModelProjectNameConnection";
  items: Array<projectName | null>;
  nextToken?: string | null;
};

export type CreateProjecttMutation = {
  __typename: "Projectt";
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  Material?: {
    __typename: "ModelMaterialConnection";
    items: Array<{
      __typename: "Material";
      ProjectName: string;
      MaterialDesc: string;
      Quantity?: string | null;
      UnitOfMeasure?: string | null;
      Status?: string | null;
      QuantityRecieved?: string | null;
      QuantityShort?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      projecttMaterialId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjecttMutation = {
  __typename: "Projectt";
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  Material?: {
    __typename: "ModelMaterialConnection";
    items: Array<{
      __typename: "Material";
      ProjectName: string;
      MaterialDesc: string;
      Quantity?: string | null;
      UnitOfMeasure?: string | null;
      Status?: string | null;
      QuantityRecieved?: string | null;
      QuantityShort?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      projecttMaterialId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjecttMutation = {
  __typename: "Projectt";
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  Material?: {
    __typename: "ModelMaterialConnection";
    items: Array<{
      __typename: "Material";
      ProjectName: string;
      MaterialDesc: string;
      Quantity?: string | null;
      UnitOfMeasure?: string | null;
      Status?: string | null;
      QuantityRecieved?: string | null;
      QuantityShort?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      projecttMaterialId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateMaterialMutation = {
  __typename: "Material";
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  Project?: {
    __typename: "Projectt";
    ProjectName: string;
    ProjectCode: string;
    SiteManager: string;
    Material?: {
      __typename: "ModelMaterialConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  projecttMaterialId?: string | null;
};

export type UpdateMaterialMutation = {
  __typename: "Material";
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  Project?: {
    __typename: "Projectt";
    ProjectName: string;
    ProjectCode: string;
    SiteManager: string;
    Material?: {
      __typename: "ModelMaterialConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  projecttMaterialId?: string | null;
};

export type DeleteMaterialMutation = {
  __typename: "Material";
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  Project?: {
    __typename: "Projectt";
    ProjectName: string;
    ProjectCode: string;
    SiteManager: string;
    Material?: {
      __typename: "ModelMaterialConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  projecttMaterialId?: string | null;
};

export type CreateOrderMutation = {
  __typename: "Order";
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
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
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRequirementsMutation = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRequirementsMutation = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectNameMutation = {
  __typename: "projectName";
  projectName?: string | null;
  siteName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectNameMutation = {
  __typename: "projectName";
  projectName?: string | null;
  siteName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectNameMutation = {
  __typename: "projectName";
  projectName?: string | null;
  siteName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type SearchMaterialsQuery = {
  __typename: "SearchableMaterialConnection";
  items: Array<{
    __typename: "Material";
    ProjectName: string;
    MaterialDesc: string;
    Quantity?: string | null;
    UnitOfMeasure?: string | null;
    Status?: string | null;
    QuantityRecieved?: string | null;
    QuantityShort?: string | null;
    Project?: {
      __typename: "Projectt";
      ProjectName: string;
      ProjectCode: string;
      SiteManager: string;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    projecttMaterialId?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetProjecttQuery = {
  __typename: "Projectt";
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  Material?: {
    __typename: "ModelMaterialConnection";
    items: Array<{
      __typename: "Material";
      ProjectName: string;
      MaterialDesc: string;
      Quantity?: string | null;
      UnitOfMeasure?: string | null;
      Status?: string | null;
      QuantityRecieved?: string | null;
      QuantityShort?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      projecttMaterialId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListProjecttsQuery = {
  __typename: "ModelProjecttConnection";
  items: Array<{
    __typename: "Projectt";
    ProjectName: string;
    ProjectCode: string;
    SiteManager: string;
    Material?: {
      __typename: "ModelMaterialConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetMaterialQuery = {
  __typename: "Material";
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  Project?: {
    __typename: "Projectt";
    ProjectName: string;
    ProjectCode: string;
    SiteManager: string;
    Material?: {
      __typename: "ModelMaterialConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  projecttMaterialId?: string | null;
};

export type ListMaterialsQuery = {
  __typename: "ModelMaterialConnection";
  items: Array<{
    __typename: "Material";
    ProjectName: string;
    MaterialDesc: string;
    Quantity?: string | null;
    UnitOfMeasure?: string | null;
    Status?: string | null;
    QuantityRecieved?: string | null;
    QuantityShort?: string | null;
    Project?: {
      __typename: "Projectt";
      ProjectName: string;
      ProjectCode: string;
      SiteManager: string;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    projecttMaterialId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetOrderQuery = {
  __typename: "Order";
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListOrdersQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    id: string;
    SupplierName?: string | null;
    SiteName?: string | null;
    ItemCode?: string | null;
    ItemName?: string | null;
    Quantity?: number | null;
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
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRequirementsQuery = {
  __typename: "ModelRequirementsConnection";
  items: Array<{
    __typename: "Requirements";
    name?: string | null;
    Quantity?: string | null;
    siteName?: string | null;
    projectName?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetProjectNameQuery = {
  __typename: "projectName";
  projectName?: string | null;
  siteName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectNamesQuery = {
  __typename: "ModelProjectNameConnection";
  items: Array<{
    __typename: "projectName";
    projectName?: string | null;
    siteName?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateProjecttSubscription = {
  __typename: "Projectt";
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  Material?: {
    __typename: "ModelMaterialConnection";
    items: Array<{
      __typename: "Material";
      ProjectName: string;
      MaterialDesc: string;
      Quantity?: string | null;
      UnitOfMeasure?: string | null;
      Status?: string | null;
      QuantityRecieved?: string | null;
      QuantityShort?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      projecttMaterialId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjecttSubscription = {
  __typename: "Projectt";
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  Material?: {
    __typename: "ModelMaterialConnection";
    items: Array<{
      __typename: "Material";
      ProjectName: string;
      MaterialDesc: string;
      Quantity?: string | null;
      UnitOfMeasure?: string | null;
      Status?: string | null;
      QuantityRecieved?: string | null;
      QuantityShort?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      projecttMaterialId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjecttSubscription = {
  __typename: "Projectt";
  ProjectName: string;
  ProjectCode: string;
  SiteManager: string;
  Material?: {
    __typename: "ModelMaterialConnection";
    items: Array<{
      __typename: "Material";
      ProjectName: string;
      MaterialDesc: string;
      Quantity?: string | null;
      UnitOfMeasure?: string | null;
      Status?: string | null;
      QuantityRecieved?: string | null;
      QuantityShort?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      projecttMaterialId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMaterialSubscription = {
  __typename: "Material";
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  Project?: {
    __typename: "Projectt";
    ProjectName: string;
    ProjectCode: string;
    SiteManager: string;
    Material?: {
      __typename: "ModelMaterialConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  projecttMaterialId?: string | null;
};

export type OnUpdateMaterialSubscription = {
  __typename: "Material";
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  Project?: {
    __typename: "Projectt";
    ProjectName: string;
    ProjectCode: string;
    SiteManager: string;
    Material?: {
      __typename: "ModelMaterialConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  projecttMaterialId?: string | null;
};

export type OnDeleteMaterialSubscription = {
  __typename: "Material";
  ProjectName: string;
  MaterialDesc: string;
  Quantity?: string | null;
  UnitOfMeasure?: string | null;
  Status?: string | null;
  QuantityRecieved?: string | null;
  QuantityShort?: string | null;
  Project?: {
    __typename: "Projectt";
    ProjectName: string;
    ProjectCode: string;
    SiteManager: string;
    Material?: {
      __typename: "ModelMaterialConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  projecttMaterialId?: string | null;
};

export type OnCreateOrderSubscription = {
  __typename: "Order";
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderSubscription = {
  __typename: "Order";
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderSubscription = {
  __typename: "Order";
  id: string;
  SupplierName?: string | null;
  SiteName?: string | null;
  ItemCode?: string | null;
  ItemName?: string | null;
  Quantity?: number | null;
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
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRequirementsSubscription = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRequirementsSubscription = {
  __typename: "Requirements";
  name?: string | null;
  Quantity?: string | null;
  siteName?: string | null;
  projectName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectNameSubscription = {
  __typename: "projectName";
  projectName?: string | null;
  siteName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectNameSubscription = {
  __typename: "projectName";
  projectName?: string | null;
  siteName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectNameSubscription = {
  __typename: "projectName";
  projectName?: string | null;
  siteName?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProjectt(
    input: CreateProjecttInput,
    condition?: ModelProjecttConditionInput
  ): Promise<CreateProjecttMutation> {
    const statement = `mutation CreateProjectt($input: CreateProjecttInput!, $condition: ModelProjecttConditionInput) {
        createProjectt(input: $input, condition: $condition) {
          __typename
          ProjectName
          ProjectCode
          SiteManager
          Material {
            __typename
            items {
              __typename
              ProjectName
              MaterialDesc
              Quantity
              UnitOfMeasure
              Status
              QuantityRecieved
              QuantityShort
              id
              createdAt
              updatedAt
              projecttMaterialId
            }
            nextToken
          }
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
    return <CreateProjecttMutation>response.data.createProjectt;
  }
  async UpdateProjectt(
    input: UpdateProjecttInput,
    condition?: ModelProjecttConditionInput
  ): Promise<UpdateProjecttMutation> {
    const statement = `mutation UpdateProjectt($input: UpdateProjecttInput!, $condition: ModelProjecttConditionInput) {
        updateProjectt(input: $input, condition: $condition) {
          __typename
          ProjectName
          ProjectCode
          SiteManager
          Material {
            __typename
            items {
              __typename
              ProjectName
              MaterialDesc
              Quantity
              UnitOfMeasure
              Status
              QuantityRecieved
              QuantityShort
              id
              createdAt
              updatedAt
              projecttMaterialId
            }
            nextToken
          }
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
    return <UpdateProjecttMutation>response.data.updateProjectt;
  }
  async DeleteProjectt(
    input: DeleteProjecttInput,
    condition?: ModelProjecttConditionInput
  ): Promise<DeleteProjecttMutation> {
    const statement = `mutation DeleteProjectt($input: DeleteProjecttInput!, $condition: ModelProjecttConditionInput) {
        deleteProjectt(input: $input, condition: $condition) {
          __typename
          ProjectName
          ProjectCode
          SiteManager
          Material {
            __typename
            items {
              __typename
              ProjectName
              MaterialDesc
              Quantity
              UnitOfMeasure
              Status
              QuantityRecieved
              QuantityShort
              id
              createdAt
              updatedAt
              projecttMaterialId
            }
            nextToken
          }
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
    return <DeleteProjecttMutation>response.data.deleteProjectt;
  }
  async CreateMaterial(
    input: CreateMaterialInput,
    condition?: ModelMaterialConditionInput
  ): Promise<CreateMaterialMutation> {
    const statement = `mutation CreateMaterial($input: CreateMaterialInput!, $condition: ModelMaterialConditionInput) {
        createMaterial(input: $input, condition: $condition) {
          __typename
          ProjectName
          MaterialDesc
          Quantity
          UnitOfMeasure
          Status
          QuantityRecieved
          QuantityShort
          Project {
            __typename
            ProjectName
            ProjectCode
            SiteManager
            Material {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          projecttMaterialId
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
    return <CreateMaterialMutation>response.data.createMaterial;
  }
  async UpdateMaterial(
    input: UpdateMaterialInput,
    condition?: ModelMaterialConditionInput
  ): Promise<UpdateMaterialMutation> {
    const statement = `mutation UpdateMaterial($input: UpdateMaterialInput!, $condition: ModelMaterialConditionInput) {
        updateMaterial(input: $input, condition: $condition) {
          __typename
          ProjectName
          MaterialDesc
          Quantity
          UnitOfMeasure
          Status
          QuantityRecieved
          QuantityShort
          Project {
            __typename
            ProjectName
            ProjectCode
            SiteManager
            Material {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          projecttMaterialId
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
    return <UpdateMaterialMutation>response.data.updateMaterial;
  }
  async DeleteMaterial(
    input: DeleteMaterialInput,
    condition?: ModelMaterialConditionInput
  ): Promise<DeleteMaterialMutation> {
    const statement = `mutation DeleteMaterial($input: DeleteMaterialInput!, $condition: ModelMaterialConditionInput) {
        deleteMaterial(input: $input, condition: $condition) {
          __typename
          ProjectName
          MaterialDesc
          Quantity
          UnitOfMeasure
          Status
          QuantityRecieved
          QuantityShort
          Project {
            __typename
            ProjectName
            ProjectCode
            SiteManager
            Material {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          projecttMaterialId
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
    return <DeleteMaterialMutation>response.data.deleteMaterial;
  }
  async CreateOrder(
    input: CreateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!, $condition: ModelOrderConditionInput) {
        createOrder(input: $input, condition: $condition) {
          __typename
          id
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
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
          id
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
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
          id
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
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
          siteName
          projectName
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
          siteName
          projectName
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
          siteName
          projectName
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
  async CreateProjectName(
    input: CreateProjectNameInput,
    condition?: ModelProjectNameConditionInput
  ): Promise<CreateProjectNameMutation> {
    const statement = `mutation CreateProjectName($input: CreateProjectNameInput!, $condition: ModelProjectNameConditionInput) {
        createProjectName(input: $input, condition: $condition) {
          __typename
          projectName
          siteName
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
    return <CreateProjectNameMutation>response.data.createProjectName;
  }
  async UpdateProjectName(
    input: UpdateProjectNameInput,
    condition?: ModelProjectNameConditionInput
  ): Promise<UpdateProjectNameMutation> {
    const statement = `mutation UpdateProjectName($input: UpdateProjectNameInput!, $condition: ModelProjectNameConditionInput) {
        updateProjectName(input: $input, condition: $condition) {
          __typename
          projectName
          siteName
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
    return <UpdateProjectNameMutation>response.data.updateProjectName;
  }
  async DeleteProjectName(
    input: DeleteProjectNameInput,
    condition?: ModelProjectNameConditionInput
  ): Promise<DeleteProjectNameMutation> {
    const statement = `mutation DeleteProjectName($input: DeleteProjectNameInput!, $condition: ModelProjectNameConditionInput) {
        deleteProjectName(input: $input, condition: $condition) {
          __typename
          projectName
          siteName
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
    return <DeleteProjectNameMutation>response.data.deleteProjectName;
  }
  async SearchMaterials(
    filter?: SearchableMaterialFilterInput,
    sort?: Array<SearchableMaterialSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableMaterialAggregationInput | null>
  ): Promise<SearchMaterialsQuery> {
    const statement = `query SearchMaterials($filter: SearchableMaterialFilterInput, $sort: [SearchableMaterialSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableMaterialAggregationInput]) {
        searchMaterials(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
          __typename
          items {
            __typename
            ProjectName
            MaterialDesc
            Quantity
            UnitOfMeasure
            Status
            QuantityRecieved
            QuantityShort
            Project {
              __typename
              ProjectName
              ProjectCode
              SiteManager
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            projecttMaterialId
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchMaterialsQuery>response.data.searchMaterials;
  }
  async GetProjectt(id: string): Promise<GetProjecttQuery> {
    const statement = `query GetProjectt($id: ID!) {
        getProjectt(id: $id) {
          __typename
          ProjectName
          ProjectCode
          SiteManager
          Material {
            __typename
            items {
              __typename
              ProjectName
              MaterialDesc
              Quantity
              UnitOfMeasure
              Status
              QuantityRecieved
              QuantityShort
              id
              createdAt
              updatedAt
              projecttMaterialId
            }
            nextToken
          }
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
    return <GetProjecttQuery>response.data.getProjectt;
  }
  async ListProjectts(
    filter?: ModelProjecttFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjecttsQuery> {
    const statement = `query ListProjectts($filter: ModelProjecttFilterInput, $limit: Int, $nextToken: String) {
        listProjectts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            ProjectName
            ProjectCode
            SiteManager
            Material {
              __typename
              nextToken
            }
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
    return <ListProjecttsQuery>response.data.listProjectts;
  }
  async GetMaterial(id: string): Promise<GetMaterialQuery> {
    const statement = `query GetMaterial($id: ID!) {
        getMaterial(id: $id) {
          __typename
          ProjectName
          MaterialDesc
          Quantity
          UnitOfMeasure
          Status
          QuantityRecieved
          QuantityShort
          Project {
            __typename
            ProjectName
            ProjectCode
            SiteManager
            Material {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          projecttMaterialId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMaterialQuery>response.data.getMaterial;
  }
  async ListMaterials(
    filter?: ModelMaterialFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMaterialsQuery> {
    const statement = `query ListMaterials($filter: ModelMaterialFilterInput, $limit: Int, $nextToken: String) {
        listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            ProjectName
            MaterialDesc
            Quantity
            UnitOfMeasure
            Status
            QuantityRecieved
            QuantityShort
            Project {
              __typename
              ProjectName
              ProjectCode
              SiteManager
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            projecttMaterialId
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
    return <ListMaterialsQuery>response.data.listMaterials;
  }
  async GetOrder(id: string): Promise<GetOrderQuery> {
    const statement = `query GetOrder($id: ID!) {
        getOrder(id: $id) {
          __typename
          id
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
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
            id
            SupplierName
            SiteName
            ItemCode
            ItemName
            Quantity
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
          siteName
          projectName
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
            siteName
            projectName
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
  async GetProjectName(id: string): Promise<GetProjectNameQuery> {
    const statement = `query GetProjectName($id: ID!) {
        getProjectName(id: $id) {
          __typename
          projectName
          siteName
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
    return <GetProjectNameQuery>response.data.getProjectName;
  }
  async ListProjectNames(
    filter?: ModelProjectNameFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectNamesQuery> {
    const statement = `query ListProjectNames($filter: ModelProjectNameFilterInput, $limit: Int, $nextToken: String) {
        listProjectNames(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            projectName
            siteName
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
    return <ListProjectNamesQuery>response.data.listProjectNames;
  }
  OnCreateProjecttListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProjectt">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectt {
        onCreateProjectt {
          __typename
          ProjectName
          ProjectCode
          SiteManager
          Material {
            __typename
            items {
              __typename
              ProjectName
              MaterialDesc
              Quantity
              UnitOfMeasure
              Status
              QuantityRecieved
              QuantityShort
              id
              createdAt
              updatedAt
              projecttMaterialId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProjectt">>
  >;

  OnUpdateProjecttListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProjectt">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectt {
        onUpdateProjectt {
          __typename
          ProjectName
          ProjectCode
          SiteManager
          Material {
            __typename
            items {
              __typename
              ProjectName
              MaterialDesc
              Quantity
              UnitOfMeasure
              Status
              QuantityRecieved
              QuantityShort
              id
              createdAt
              updatedAt
              projecttMaterialId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProjectt">>
  >;

  OnDeleteProjecttListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProjectt">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectt {
        onDeleteProjectt {
          __typename
          ProjectName
          ProjectCode
          SiteManager
          Material {
            __typename
            items {
              __typename
              ProjectName
              MaterialDesc
              Quantity
              UnitOfMeasure
              Status
              QuantityRecieved
              QuantityShort
              id
              createdAt
              updatedAt
              projecttMaterialId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProjectt">>
  >;

  OnCreateMaterialListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMaterial">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMaterial {
        onCreateMaterial {
          __typename
          ProjectName
          MaterialDesc
          Quantity
          UnitOfMeasure
          Status
          QuantityRecieved
          QuantityShort
          Project {
            __typename
            ProjectName
            ProjectCode
            SiteManager
            Material {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          projecttMaterialId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMaterial">>
  >;

  OnUpdateMaterialListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMaterial">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMaterial {
        onUpdateMaterial {
          __typename
          ProjectName
          MaterialDesc
          Quantity
          UnitOfMeasure
          Status
          QuantityRecieved
          QuantityShort
          Project {
            __typename
            ProjectName
            ProjectCode
            SiteManager
            Material {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          projecttMaterialId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMaterial">>
  >;

  OnDeleteMaterialListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMaterial">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMaterial {
        onDeleteMaterial {
          __typename
          ProjectName
          MaterialDesc
          Quantity
          UnitOfMeasure
          Status
          QuantityRecieved
          QuantityShort
          Project {
            __typename
            ProjectName
            ProjectCode
            SiteManager
            Material {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          projecttMaterialId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMaterial">>
  >;

  OnCreateOrderListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOrder">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrder {
        onCreateOrder {
          __typename
          id
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
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
          id
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
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
          id
          SupplierName
          SiteName
          ItemCode
          ItemName
          Quantity
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
          siteName
          projectName
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
          siteName
          projectName
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
          siteName
          projectName
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRequirements">>
  >;

  OnCreateProjectNameListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProjectName">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectName {
        onCreateProjectName {
          __typename
          projectName
          siteName
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProjectName">>
  >;

  OnUpdateProjectNameListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProjectName">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectName {
        onUpdateProjectName {
          __typename
          projectName
          siteName
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProjectName">>
  >;

  OnDeleteProjectNameListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProjectName">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectName {
        onDeleteProjectName {
          __typename
          projectName
          siteName
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProjectName">>
  >;
}
