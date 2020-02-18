module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Adventure {
  id: ID!
  title: String
  period: Int!
  cost: Int!
  country: String!
  img: String!
  imglow: String!
}

type AdventureConnection {
  pageInfo: PageInfo!
  edges: [AdventureEdge]!
  aggregate: AggregateAdventure!
}

input AdventureCreateInput {
  id: ID
  title: String
  period: Int!
  cost: Int!
  country: String!
  img: String!
  imglow: String!
}

type AdventureEdge {
  node: Adventure!
  cursor: String!
}

enum AdventureOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  period_ASC
  period_DESC
  cost_ASC
  cost_DESC
  country_ASC
  country_DESC
  img_ASC
  img_DESC
  imglow_ASC
  imglow_DESC
}

type AdventurePreviousValues {
  id: ID!
  title: String
  period: Int!
  cost: Int!
  country: String!
  img: String!
  imglow: String!
}

type AdventureSubscriptionPayload {
  mutation: MutationType!
  node: Adventure
  updatedFields: [String!]
  previousValues: AdventurePreviousValues
}

input AdventureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdventureWhereInput
  AND: [AdventureSubscriptionWhereInput!]
  OR: [AdventureSubscriptionWhereInput!]
  NOT: [AdventureSubscriptionWhereInput!]
}

input AdventureUpdateInput {
  title: String
  period: Int
  cost: Int
  country: String
  img: String
  imglow: String
}

input AdventureUpdateManyMutationInput {
  title: String
  period: Int
  cost: Int
  country: String
  img: String
  imglow: String
}

input AdventureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  period: Int
  period_not: Int
  period_in: [Int!]
  period_not_in: [Int!]
  period_lt: Int
  period_lte: Int
  period_gt: Int
  period_gte: Int
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  imglow: String
  imglow_not: String
  imglow_in: [String!]
  imglow_not_in: [String!]
  imglow_lt: String
  imglow_lte: String
  imglow_gt: String
  imglow_gte: String
  imglow_contains: String
  imglow_not_contains: String
  imglow_starts_with: String
  imglow_not_starts_with: String
  imglow_ends_with: String
  imglow_not_ends_with: String
  AND: [AdventureWhereInput!]
  OR: [AdventureWhereInput!]
  NOT: [AdventureWhereInput!]
}

input AdventureWhereUniqueInput {
  id: ID
  title: String
}

type AggregateAdventure {
  count: Int!
}

type AggregateExperience {
  count: Int!
}

type AggregateStay {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Experience {
  id: ID!
  title: String
  cost: Int!
  ratings: Float
  reviews: Int
  country: String!
  img: String!
  imglow: String!
  location: String!
}

type ExperienceConnection {
  pageInfo: PageInfo!
  edges: [ExperienceEdge]!
  aggregate: AggregateExperience!
}

input ExperienceCreateInput {
  id: ID
  title: String
  cost: Int!
  ratings: Float
  reviews: Int
  country: String!
  img: String!
  imglow: String!
  location: String!
}

type ExperienceEdge {
  node: Experience!
  cursor: String!
}

enum ExperienceOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  cost_ASC
  cost_DESC
  ratings_ASC
  ratings_DESC
  reviews_ASC
  reviews_DESC
  country_ASC
  country_DESC
  img_ASC
  img_DESC
  imglow_ASC
  imglow_DESC
  location_ASC
  location_DESC
}

type ExperiencePreviousValues {
  id: ID!
  title: String
  cost: Int!
  ratings: Float
  reviews: Int
  country: String!
  img: String!
  imglow: String!
  location: String!
}

type ExperienceSubscriptionPayload {
  mutation: MutationType!
  node: Experience
  updatedFields: [String!]
  previousValues: ExperiencePreviousValues
}

input ExperienceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExperienceWhereInput
  AND: [ExperienceSubscriptionWhereInput!]
  OR: [ExperienceSubscriptionWhereInput!]
  NOT: [ExperienceSubscriptionWhereInput!]
}

input ExperienceUpdateInput {
  title: String
  cost: Int
  ratings: Float
  reviews: Int
  country: String
  img: String
  imglow: String
  location: String
}

input ExperienceUpdateManyMutationInput {
  title: String
  cost: Int
  ratings: Float
  reviews: Int
  country: String
  img: String
  imglow: String
  location: String
}

input ExperienceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  ratings: Float
  ratings_not: Float
  ratings_in: [Float!]
  ratings_not_in: [Float!]
  ratings_lt: Float
  ratings_lte: Float
  ratings_gt: Float
  ratings_gte: Float
  reviews: Int
  reviews_not: Int
  reviews_in: [Int!]
  reviews_not_in: [Int!]
  reviews_lt: Int
  reviews_lte: Int
  reviews_gt: Int
  reviews_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  imglow: String
  imglow_not: String
  imglow_in: [String!]
  imglow_not_in: [String!]
  imglow_lt: String
  imglow_lte: String
  imglow_gt: String
  imglow_gte: String
  imglow_contains: String
  imglow_not_contains: String
  imglow_starts_with: String
  imglow_not_starts_with: String
  imglow_ends_with: String
  imglow_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  AND: [ExperienceWhereInput!]
  OR: [ExperienceWhereInput!]
  NOT: [ExperienceWhereInput!]
}

input ExperienceWhereUniqueInput {
  id: ID
  title: String
}

scalar Long

type Mutation {
  createAdventure(data: AdventureCreateInput!): Adventure!
  updateAdventure(data: AdventureUpdateInput!, where: AdventureWhereUniqueInput!): Adventure
  updateManyAdventures(data: AdventureUpdateManyMutationInput!, where: AdventureWhereInput): BatchPayload!
  upsertAdventure(where: AdventureWhereUniqueInput!, create: AdventureCreateInput!, update: AdventureUpdateInput!): Adventure!
  deleteAdventure(where: AdventureWhereUniqueInput!): Adventure
  deleteManyAdventures(where: AdventureWhereInput): BatchPayload!
  createExperience(data: ExperienceCreateInput!): Experience!
  updateExperience(data: ExperienceUpdateInput!, where: ExperienceWhereUniqueInput!): Experience
  updateManyExperiences(data: ExperienceUpdateManyMutationInput!, where: ExperienceWhereInput): BatchPayload!
  upsertExperience(where: ExperienceWhereUniqueInput!, create: ExperienceCreateInput!, update: ExperienceUpdateInput!): Experience!
  deleteExperience(where: ExperienceWhereUniqueInput!): Experience
  deleteManyExperiences(where: ExperienceWhereInput): BatchPayload!
  createStay(data: StayCreateInput!): Stay!
  updateStay(data: StayUpdateInput!, where: StayWhereUniqueInput!): Stay
  updateManyStays(data: StayUpdateManyMutationInput!, where: StayWhereInput): BatchPayload!
  upsertStay(where: StayWhereUniqueInput!, create: StayCreateInput!, update: StayUpdateInput!): Stay!
  deleteStay(where: StayWhereUniqueInput!): Stay
  deleteManyStays(where: StayWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  adventure(where: AdventureWhereUniqueInput!): Adventure
  adventures(where: AdventureWhereInput, orderBy: AdventureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Adventure]!
  adventuresConnection(where: AdventureWhereInput, orderBy: AdventureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdventureConnection!
  experience(where: ExperienceWhereUniqueInput!): Experience
  experiences(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Experience]!
  experiencesConnection(where: ExperienceWhereInput, orderBy: ExperienceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExperienceConnection!
  stay(where: StayWhereUniqueInput!): Stay
  stays(where: StayWhereInput, orderBy: StayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stay]!
  staysConnection(where: StayWhereInput, orderBy: StayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StayConnection!
  node(id: ID!): Node
}

type Stay {
  id: ID!
  name: String
  cost: Int!
  hostType: String!
  country: String!
  location: String!
  ratings: Float
  reviews: Int
  img: String!
  imglow: String!
  hostImg: String!
  hostImgLow: String!
  size: String!
  description: String!
  space: String
  access: String
  notes: String
  hostName: String!
  joined: String!
  hostDescription: String!
  duringStay: String
}

type StayConnection {
  pageInfo: PageInfo!
  edges: [StayEdge]!
  aggregate: AggregateStay!
}

input StayCreateInput {
  id: ID
  name: String
  cost: Int!
  hostType: String!
  country: String!
  location: String!
  ratings: Float
  reviews: Int
  img: String!
  imglow: String!
  hostImg: String!
  hostImgLow: String!
  size: String!
  description: String!
  space: String
  access: String
  notes: String
  hostName: String!
  joined: String!
  hostDescription: String!
  duringStay: String
}

type StayEdge {
  node: Stay!
  cursor: String!
}

enum StayOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cost_ASC
  cost_DESC
  hostType_ASC
  hostType_DESC
  country_ASC
  country_DESC
  location_ASC
  location_DESC
  ratings_ASC
  ratings_DESC
  reviews_ASC
  reviews_DESC
  img_ASC
  img_DESC
  imglow_ASC
  imglow_DESC
  hostImg_ASC
  hostImg_DESC
  hostImgLow_ASC
  hostImgLow_DESC
  size_ASC
  size_DESC
  description_ASC
  description_DESC
  space_ASC
  space_DESC
  access_ASC
  access_DESC
  notes_ASC
  notes_DESC
  hostName_ASC
  hostName_DESC
  joined_ASC
  joined_DESC
  hostDescription_ASC
  hostDescription_DESC
  duringStay_ASC
  duringStay_DESC
}

type StayPreviousValues {
  id: ID!
  name: String
  cost: Int!
  hostType: String!
  country: String!
  location: String!
  ratings: Float
  reviews: Int
  img: String!
  imglow: String!
  hostImg: String!
  hostImgLow: String!
  size: String!
  description: String!
  space: String
  access: String
  notes: String
  hostName: String!
  joined: String!
  hostDescription: String!
  duringStay: String
}

type StaySubscriptionPayload {
  mutation: MutationType!
  node: Stay
  updatedFields: [String!]
  previousValues: StayPreviousValues
}

input StaySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StayWhereInput
  AND: [StaySubscriptionWhereInput!]
  OR: [StaySubscriptionWhereInput!]
  NOT: [StaySubscriptionWhereInput!]
}

input StayUpdateInput {
  name: String
  cost: Int
  hostType: String
  country: String
  location: String
  ratings: Float
  reviews: Int
  img: String
  imglow: String
  hostImg: String
  hostImgLow: String
  size: String
  description: String
  space: String
  access: String
  notes: String
  hostName: String
  joined: String
  hostDescription: String
  duringStay: String
}

input StayUpdateManyMutationInput {
  name: String
  cost: Int
  hostType: String
  country: String
  location: String
  ratings: Float
  reviews: Int
  img: String
  imglow: String
  hostImg: String
  hostImgLow: String
  size: String
  description: String
  space: String
  access: String
  notes: String
  hostName: String
  joined: String
  hostDescription: String
  duringStay: String
}

input StayWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  hostType: String
  hostType_not: String
  hostType_in: [String!]
  hostType_not_in: [String!]
  hostType_lt: String
  hostType_lte: String
  hostType_gt: String
  hostType_gte: String
  hostType_contains: String
  hostType_not_contains: String
  hostType_starts_with: String
  hostType_not_starts_with: String
  hostType_ends_with: String
  hostType_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  ratings: Float
  ratings_not: Float
  ratings_in: [Float!]
  ratings_not_in: [Float!]
  ratings_lt: Float
  ratings_lte: Float
  ratings_gt: Float
  ratings_gte: Float
  reviews: Int
  reviews_not: Int
  reviews_in: [Int!]
  reviews_not_in: [Int!]
  reviews_lt: Int
  reviews_lte: Int
  reviews_gt: Int
  reviews_gte: Int
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  imglow: String
  imglow_not: String
  imglow_in: [String!]
  imglow_not_in: [String!]
  imglow_lt: String
  imglow_lte: String
  imglow_gt: String
  imglow_gte: String
  imglow_contains: String
  imglow_not_contains: String
  imglow_starts_with: String
  imglow_not_starts_with: String
  imglow_ends_with: String
  imglow_not_ends_with: String
  hostImg: String
  hostImg_not: String
  hostImg_in: [String!]
  hostImg_not_in: [String!]
  hostImg_lt: String
  hostImg_lte: String
  hostImg_gt: String
  hostImg_gte: String
  hostImg_contains: String
  hostImg_not_contains: String
  hostImg_starts_with: String
  hostImg_not_starts_with: String
  hostImg_ends_with: String
  hostImg_not_ends_with: String
  hostImgLow: String
  hostImgLow_not: String
  hostImgLow_in: [String!]
  hostImgLow_not_in: [String!]
  hostImgLow_lt: String
  hostImgLow_lte: String
  hostImgLow_gt: String
  hostImgLow_gte: String
  hostImgLow_contains: String
  hostImgLow_not_contains: String
  hostImgLow_starts_with: String
  hostImgLow_not_starts_with: String
  hostImgLow_ends_with: String
  hostImgLow_not_ends_with: String
  size: String
  size_not: String
  size_in: [String!]
  size_not_in: [String!]
  size_lt: String
  size_lte: String
  size_gt: String
  size_gte: String
  size_contains: String
  size_not_contains: String
  size_starts_with: String
  size_not_starts_with: String
  size_ends_with: String
  size_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  space: String
  space_not: String
  space_in: [String!]
  space_not_in: [String!]
  space_lt: String
  space_lte: String
  space_gt: String
  space_gte: String
  space_contains: String
  space_not_contains: String
  space_starts_with: String
  space_not_starts_with: String
  space_ends_with: String
  space_not_ends_with: String
  access: String
  access_not: String
  access_in: [String!]
  access_not_in: [String!]
  access_lt: String
  access_lte: String
  access_gt: String
  access_gte: String
  access_contains: String
  access_not_contains: String
  access_starts_with: String
  access_not_starts_with: String
  access_ends_with: String
  access_not_ends_with: String
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  hostName: String
  hostName_not: String
  hostName_in: [String!]
  hostName_not_in: [String!]
  hostName_lt: String
  hostName_lte: String
  hostName_gt: String
  hostName_gte: String
  hostName_contains: String
  hostName_not_contains: String
  hostName_starts_with: String
  hostName_not_starts_with: String
  hostName_ends_with: String
  hostName_not_ends_with: String
  joined: String
  joined_not: String
  joined_in: [String!]
  joined_not_in: [String!]
  joined_lt: String
  joined_lte: String
  joined_gt: String
  joined_gte: String
  joined_contains: String
  joined_not_contains: String
  joined_starts_with: String
  joined_not_starts_with: String
  joined_ends_with: String
  joined_not_ends_with: String
  hostDescription: String
  hostDescription_not: String
  hostDescription_in: [String!]
  hostDescription_not_in: [String!]
  hostDescription_lt: String
  hostDescription_lte: String
  hostDescription_gt: String
  hostDescription_gte: String
  hostDescription_contains: String
  hostDescription_not_contains: String
  hostDescription_starts_with: String
  hostDescription_not_starts_with: String
  hostDescription_ends_with: String
  hostDescription_not_ends_with: String
  duringStay: String
  duringStay_not: String
  duringStay_in: [String!]
  duringStay_not_in: [String!]
  duringStay_lt: String
  duringStay_lte: String
  duringStay_gt: String
  duringStay_gte: String
  duringStay_contains: String
  duringStay_not_contains: String
  duringStay_starts_with: String
  duringStay_not_starts_with: String
  duringStay_ends_with: String
  duringStay_not_ends_with: String
  AND: [StayWhereInput!]
  OR: [StayWhereInput!]
  NOT: [StayWhereInput!]
}

input StayWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  adventure(where: AdventureSubscriptionWhereInput): AdventureSubscriptionPayload
  experience(where: ExperienceSubscriptionWhereInput): ExperienceSubscriptionPayload
  stay(where: StaySubscriptionWhereInput): StaySubscriptionPayload
}
`
      }
    