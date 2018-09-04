import Controller from '@ember/controller';

export default Controller.extend({
    loginName:null,
    password:null,
    session:Ember.inject.service(),
    actions: {
        authenticate(){
            console.log(this.get('loginName'),this.get('password'))
            this.get('session').authenticate(this.get('loginName'),this.get('password')).then(()=>{
                    alert("Logged in");
                    this.transitionToRoute('students')
                },(err)=>{
                    alert("error with login")
                });
            
        }
    }
});
