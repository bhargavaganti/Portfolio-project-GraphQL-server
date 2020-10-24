module.exports = {
    subscribe(parent, args, { pubsub, connection: con }, info) {
        return pubsub.asyncIterator(`courses`);
    }
}