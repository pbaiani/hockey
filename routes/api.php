<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('login', function () {
    return response(['Product 1', 'Product 2', 'Product 3'],200);
});


Route::post('users','UsersController@store');
Route::post('login','UsersController@login');
Route::get('getLeagues','LeagueController@getLeagues');
Route::get('persistentLogIn', 'UsersController@logInWithCookie');


Route::get('checkEmail', 'UsersController@checkemail');





Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
