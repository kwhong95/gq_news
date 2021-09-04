export default {
    Query: {
        hello: async (parent, args, context, info) => {
            return 'Hello Back'
        }
    }
};