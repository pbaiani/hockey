<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::view('/', 'welcome');
Route::view('/roster', 'welcome');
Route::view('/roster/{id}', 'welcome');
Route::view('/schedule', 'welcome');
Route::view('/league', 'welcome');

/*

Route::get('/', function () {
   
    return view('welcome'); 
});


Route::get('/roster', function () {
   
    return view('welcome'); 
});

Route::get('/schedule', function () {
   
    return view('welcome'); 
});

*/