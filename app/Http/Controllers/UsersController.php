<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;

class UsersController extends Controller
{
 
public function store(Request $request)
    {
    
        $this->validate($request, [
        'firstName' => 'required',
         'lastName' => 'required',
         'email' => 'required',
        'password' => 'required',

    ]);
        


        $user = Users::create($request->all());
         return response()->json($user, 201);
    }






}
