<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;

class UsersController extends Controller
{
 
public function store(Request $request) {
    $this->validate($request, [
    'firstName' => 'required',
    'lastName' => 'required',
    'email' => 'required',
    'password' => 'required',
     ]);
    // we have to check that a user with that email doesn't already exist
    if (Users::where('email', '=',  $request->input('email'))->count() > 0) {
        return response('{"emailExists":1}');
        }

    else {
        $user = Users::create($request->all());
        return response()->json($user, 201);
         }
    }
}
