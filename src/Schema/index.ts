import { gql } from "apollo-server-express";

const Schema = gql`
  type Event {
    id: String
    name: String
    description: String
    startDate: String
    endDate: String
    location: String
    image: String
    createdAt: String
    numberOfTickets: Int
    entryFee: Int
  }
  type Query {
    getAllEvents: [Event]
    getEvent(id: String): Event
  }

  type Mutation {
    createEvent(
      name: String
      description: String
      startDate: String
      endDate: String
      location: String
      image: String
      createdAt: String
      numberOfTickets: Int
      entryFee: Int
    ): Event

    updateEvent(
      id: String
      name: String
      description: String
      startDate: String
      endDate: String
      location: String
      image: String
      numberOfTickets: Int
      entryFee: Int
    ): Event

    deleteEvent(id: String): Event
  }
`;
export default Schema;
