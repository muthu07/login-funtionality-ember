import Route from '@ember/routing/route';

export default Route.extend({
    loginName:null,
    password:null,
    session:Ember.inject.service(),
    actions: {
        authenticate(){
            console.log(this.get('loginName'),this.get('password'))
            this.get('session').authenticate("muthu","pass").then(()=>{
                    alert("Logged in");
                    this.transitionToRoute('students')
                },(err)=>{
                    alert("error with login")
                });
            
        }
    }
});
