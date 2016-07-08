
var Vue = require("vue");

module.exports = Vue.component("c-category", {
    template: __inline('category.html'),
    props:['show-loading','type','cates'],
    ready: function(){
        var self = this;
    },
    methods: {
        
    }
});
var Category = React.createClass({
	render: function() {
		var aCates = this.props.aCate;

		return (
			<ul class="unstyled clearfix sort-nav" id="list-container">
    			<li v-for="c in cates" :class="{'active':c.active}">
      				<a href="/#{{ type }}/{{ c.id }}"  class="category">{{ c.name }}</a>
    			</li>
			</ul>
		);
	}
});