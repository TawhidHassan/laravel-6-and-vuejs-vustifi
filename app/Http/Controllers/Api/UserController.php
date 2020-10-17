<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
 public function login(Request $request)
    {
        $username=$request->email;
        $password=$request->password;

       $user= User::where('email',$username)->where('password',$password)->first();

       $token=Hash::make($request->password);
        $user->api_token=$token;
        $user->save();

        return $token;
    }
}
