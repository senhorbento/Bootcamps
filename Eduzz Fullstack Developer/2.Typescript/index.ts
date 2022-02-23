import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('chamou nova func');
    }
});

$('body').novaFuncao();