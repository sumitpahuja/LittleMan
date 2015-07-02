Router.configure({
    layoutTemplate: 'main'
});



Router.map(function() {
    this.route('restaurant', {
        path:'/restaurant',
        template: 'basicInfo',
        onBeforeAction: function() {alert();
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('redirecting');
                this.redirect('/');
            } else {
				this.next();
			}
        }
    });
});