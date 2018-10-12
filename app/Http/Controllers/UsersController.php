<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;
use JWTAuth;
use JWTAuthException;



class UsersController extends Controller
{

 private function getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }


 
public function store(Request $request) {
    $this->validate($request, [
    'firstName' => 'required',
    'lastName' => 'required',
    'email' => 'required',
    'password' => 'required',
     ]);

    $payload = [
        'password'=>\Hash::make($request->password),
        'email'=>$request->email,
        'firstName'=>$request->firstName,
        'lastName' =>$request->lastName,
        'auth_token'=> ''
        ];

    // we have to check that a user with that email doesn't already exist
    if (Users::where('email', '=',  $request->input('email'))->count() > 0) {
        return response('{"emailExists":1}');
        }

    else {
        // try to save user

        $user = new \App\Users ($payload);
        if ($user->save())
            {
            $token = self::getToken($request->email, $request->password); // generate user token
            if (!is_string($token)) 
                {
                return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
                }
            $user = \App\Users::where('email', $request->email)->get()->first();
            $user->auth_token = $token; // update user token
            $user->save();
            $response = ['success'=>true, 'data'=>['firstName'=>$user->firstName, 'lastName'=>$user->lastName,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]];        
            }
        else
            {
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            }

        /*
        $user = Users::create($request->all());
        $user->setAttribute('success', 1);
            
        var_dump($user);
         */  
        return response()->json($response, 201);

  

         }
    }
}
