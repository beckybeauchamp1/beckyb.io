import template from '../../templates/directives/svg.tpl.html';
import app from '../app';

export function svg () {

    'ngInject';

    return {
        restrict: 'E',
        templateUrl: template,
        scope: {
            svgType: '='
        }
        link: function( scope, element, attrs ) {

        }
    }
};

app.directive( 'svg', svg );
