<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;


class SocialController extends Controller
{
    public function googleredirect()
    {
        return Socialite::driver('github')->redirect();   
    }

    public function googlecallback()
    {
     
        $userdata = Socialite::driver('google')->user();
        $user = User::where('email', $userdata->email)->whereNotNull('gmail_token')->first();
        $userNull = User::where('email', $userdata->email)->where('gmail_token', null)->first();
        
        if($user){
            
            Auth::login($user);
            return redirect()->route("dashboard");

        }elseif($userNull){
  
            echo '<script>';
            echo 'alert("The email address associating with your gmail is already in use!!!")';
            echo '</script>';
            // return redirect()->route("home");
              
        }else{
            // $user->token
            $pass = Str::random(15);

            $user = new User();
            $user->name = $userdata->name;
            $user->email = $userdata->email;
            $user->gmail_token = $userdata->token;
            $user->username = Str::random(33);
            $user->password = Hash::make($pass);
            $user->save();

            Auth::login($user);
            return redirect()->route("dashboard");
        }

    }
}
