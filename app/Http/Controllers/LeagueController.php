<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\jct_UserLeague;
use App\League;
use App\Users;
use  \Tymon\JWTAuth\Middleware\GetUserFromToken;



class LeagueController extends Controller   {


    private function getUser()   {
        return \App\Users::where('auth_token', $_COOKIE['token'])->get()->first();
    }

    public function getLeagues(Request $request) {

        $user = self::getUser();
        $League = new \App\League;
        $leagueData = $League->getLeaguesByUserID($user->id);     
        $response = [
            'success'=>true,
            'data'=>[$leagueData]
        ];  
        return response()->json($response, 201);

    }        



}


