<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Testing\Fluent\Concerns\Has;
use Throwable;

class SportingGoods extends Model
{
    /** @use HasFactory<\Database\Factories\SportingGoodsFactory> */
    use HasFactory, HasUlids;

    protected $fillable = [
        'name',
        'brand',
        'price',
        'year',
        'image_url',
        'amount',
        'category_id'
    ];

    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    protected static function booted(){
        self::deleted(function(SportingGoods $sporting){
            try{
                $image_name = explode('sportingGoods/', $sporting['image']);
                Storage::disk('public')->delete('sportingGoods/'.$image_name[1]);
            }catch(Throwable){}
        });
    }
}
