<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class League extends Model
{
    
    public function getLeaguesByUserID($id)   {
        return self::join('jct_user_leagues', 'fk_league',   '=', 'leagues.id')
          ->select('jct_user_leagues.fk_userRole', 'leagues.name')
         ->where('jct_user_leagues.fk_user', '>=', $id)
         ->get();
    }

}
