Router.configure({
    layoutTemplate: 'main'
});


Router.route('/restaurant', function(){
    this.render('basicInfo');
});
