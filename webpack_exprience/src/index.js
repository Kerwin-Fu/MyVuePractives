import $ from 'jquery';
import './css/1.css'


$(function() {
    $('li:odd').css('background','violet');
    $('li:even').css('background','chocolate');

})