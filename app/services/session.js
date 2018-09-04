import Service from '@ember/service';

export default Service.extend({
    token:null,
    authenticate(log,pass){
        console.log(75775)
        return Ember.$.ajax({
            method:"POST",
            url:'/token',
            data: {username:log,password:pass}
        }).then((info)=>{
            this.set('token',info.access_token);
        })
    }
});
