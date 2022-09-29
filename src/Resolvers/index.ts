// import events from "../DummyData/events";

import Events from '../Models/events'
import { v4 as uuidv4 } from "uuid";

const Resolvers = {
  Query: {
    getAllEvents: async () => await Events.find(),
    getEvent: async (_: any, args: any) => {
      //get the object that contains the specified ID.
      return await Events.find({id: args.id});
    },
  },
  Mutation: {
    createEvent: async (_: any, args: any) => {
      const event = new Events({
        id: uuidv4(),
        name: args.name,
        description: args.description,
        start_date: args.start_date,
        end_date: args.end_date,
        location: args.location,
        image: args.image,
        created_at: args.created_at,
        numberOfTickets: args.numberOfTickets,
        entryFee: args.entryFee,
      });
      await event.save()
      return event;
    },
    updateEvent: async (_: any, args: any) => {
      const event = await Events.findOneAndUpdate(
        { id: args.id },
        {
          name: args.name,
          description: args.description,
          start_date: args.start_date,
          end_date: args.end_date,
          location: args.location,
          image: args.image,
          numberOfTickets: args.numberOfTickets,
          entryFee: args.entryFee,
        },
        { new: true }
      );
      return event;
    },
    deleteEvent: async (_: any, args: any) => {
      const event = await Events.findOneAndDelete({ id: args.id });
      return event;
    },
  }
};

export default Resolvers;