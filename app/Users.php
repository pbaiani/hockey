<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
protected $fillable = ['firstName', 'lastName', 'email', 'password', 'created_at', 'updated_at'];




}
