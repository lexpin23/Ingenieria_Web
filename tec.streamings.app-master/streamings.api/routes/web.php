<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::get('/',function(){
    return view('index');
});



//Views

// Route::get('/auth/ingreso',[AuthController::class,'ingreso']);
// Route::get('/auth/registro',[AuthController::class,'registro']);
// Route::get('/home',[AuthController::class,'home']);


//Events
Route::post('/auth/login',[AuthController::class,'login']);
Route::post('/auth/recuperar',[AuthController::class,'recuperar']);
Route::post('/auth/registro',[AuthController::class,'store']);

