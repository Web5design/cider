/**
 * This work is copyright 2012 - 2013 Jordon Mears. All rights reserved.
 *
 * This file is part of Cider.
 *
 * Cider is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * Cider is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Cider. If not, see <http://www.gnu.org/licenses/>.
 */

cider.namespace('cider.views');

cider.views.TopNav = Backbone.View.extend({
    template: _.template(cider.templates.TOP_NAV),
    render: function(context) {
        this.$el.html(this.template(context));
        return this;
    }
});

cider.views.BottomNav = Backbone.View.extend({
    template: _.template(cider.templates.BOTTOM_NAV),
    render: function(context) {
        context = context || {};
        context = _.defaults(context, {right_content: ''});
        var view = null;
        if(typeof context.right_content == 'object') {
            // A Backbone.View was passed rather than a string, likely because
            // of the need for DOM events. Will need to render the view and
            // append to DOM instead of passing a string of the HTML to the
            // template.
            view = context.right_content;
            view.render();
            context.right_content = '';
        }
        this.$el.html(this.template(context));
        if(view) {
            this.$el.find('div.pull-right').append(view.$el);
        }
        return this;
    }
});
