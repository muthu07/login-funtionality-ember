import DS from 'ember-data';
import { inject } from '@ember/service';

//import injection from '@ember/service';

export default DS.RESTAdapter.extend({
    namespace:"api",
    session: inject(),
    headers: Ember.computed('session.token',function(){
        return {
            'authorization': `${this.get('session.token')}`
        }
    })
});
