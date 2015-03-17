import DS from 'ember-data';

/**
 * Implements simple JSend Serializer ( Ember defaults to JSON-API format )
 */
export default DS.RESTSerializer.extend({
    extractSingle: function(store, type, payload, id) {
        var post_payload = payload.data;
        return this._super(store, type, post_payload, id);
    },
    extractArray: function(store, type, payload) {
        var post_payload = payload.data;
        return this._super(store, type, post_payload);
    },
    normalize: function(type, hash, property) {
        return this._super(type, hash, property);
    }
});
