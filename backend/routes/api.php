<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SportingGoodsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json(Auth::user(), Response::HTTP_OK);
    });
});



Route::middleware(['auth:sanctum', 'can:admin'])->group(function () {
    Route::apiResource('/category', CategoryController::class)->except(['index', 'show']);
    Route::apiResource('/sportingGoods', SportingGoodsController::class)->except(['index', 'show', 'buy']);
    Route::apiResource('/users', UserController::class);
});

Route::get('/category', [CategoryController::class, 'index']);
Route::get('/category/{id}', [CategoryController::class, 'show']);
Route::get('/sportingGoods', [SportingGoodsController::class, 'index']);
Route::get('/sportingGoods/{id}', [SportingGoodsController::class, 'show']);
Route::post('/sportingGoods/{id}/buy', [SportingGoodsController::class, 'buy']);

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';
