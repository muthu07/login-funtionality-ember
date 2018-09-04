import DS from 'ember-data';

//import injection from '@ember/service';

export default DS.RESTAdapter.extend({
    namespace:"api",
    session: Ember.inject.service(),
    headers: Ember.computed('session.token',function(){
        return {
            'Authorizantion': `Bearer ${this.get('session.token')}`
        }
    })
});
